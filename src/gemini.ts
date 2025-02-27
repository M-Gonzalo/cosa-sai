import { GoogleGenerativeAI } from '@google/generative-ai';
import { load } from 'js-yaml';
import { join } from 'path';
import { readFileSync } from 'fs';
import type { GeminiResponse, GeminiContent, GeminiContentPart, GeminiFileData } from './types';

// Error codes that should trigger a retry
const RETRYABLE_STATUS_CODES = new Set(['429', '503', '500', '502', '504']);

export class GeminiAPI {
  private gemini: GoogleGenerativeAI;
  private model: any; 
  private defaultPrompt: string;
  private rateLimitDelay = 1000;
  private maxRetries = 3;
  private lastRequestTime = 0;

  constructor() {
    const API_KEY = process.env.GEMINI_API_KEY;
    if (!API_KEY) {
      throw new Error('GEMINI_API_KEY environment variable is required');
    }

    try {
      this.gemini = new GoogleGenerativeAI(API_KEY);
      this.model = this.gemini.getGenerativeModel({ model: 'gemini-1.5-pro' });
      // Load default prompt using full path from project root
      const defaultPromptPath = join(process.cwd(), 'gemini-docs-mcp', 'prompts', 'default.txt');
      this.defaultPrompt = readFileSync(defaultPromptPath, 'utf-8');
    } catch (error) {
      console.error('[Gemini] Failed to initialize:', error);
      throw error;
    }
  }

  private async waitForRateLimit() {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;
    
    if (timeSinceLastRequest < this.rateLimitDelay) {
      await Bun.sleep(this.rateLimitDelay - timeSinceLastRequest);
    }
    
    this.lastRequestTime = Date.now();
  }

  private shouldRetry(error: any): boolean {
    // Check if error message includes status code
    for (const code of RETRYABLE_STATUS_CODES) {
      if (error.message?.includes(`[${code}`)) {
        return true;
      }
    }

    // Check for quota or availability keywords
    return (
      error.message?.includes('quota') ||
      error.message?.includes('unavailable') ||
      error.message?.includes('try again')
    );
  }

  private formatPrompt(
    query: string, 
    docRefs: GeminiFileData[], 
    context: Record<string, any> = {}, 
    promptFile?: string
  ): GeminiContent[] {
    let prompt = '';

    // Add custom prompt if provided
    if (promptFile) {
      prompt = readFileSync(promptFile, 'utf-8') + '\n\n';
    }

    // Add default prompt and query
    prompt += `${this.defaultPrompt}\n\nUSER QUERY: ${query}\nCONTEXT: ${JSON.stringify(context)}`;
    const parts: GeminiContentPart[] = [{ text: prompt.trim() }];

    for (const doc of docRefs) {
      parts.push({ fileData: doc });
    }

    return [{ parts }];
  }

  private async retryWithBackoff<T>(
    operation: () => Promise<T>,
    retries = this.maxRetries,
    initialDelay = this.rateLimitDelay
  ): Promise<T> {
    let lastError: Error;
    let delay = initialDelay;

    for (let i = 0; i < retries; i++) {
      try {
        await this.waitForRateLimit();
        return await operation();
      } catch (error: any) {
        lastError = error;
        
        if (this.shouldRetry(error)) {
          console.error(`[Gemini] Request failed (attempt ${i + 1}/${retries}), retrying in ${delay}ms:`, error.message);
          await Bun.sleep(delay);
          // Use more aggressive backoff for service issues
          delay *= 3;
          continue;
        }
        
        throw error;
      }
    }

    throw lastError!;
  }

  private async query(contents: GeminiContent[]): Promise<string> {
    return await this.retryWithBackoff(async () => {
      const response = await this.model.generateContent({ contents });
      return response.response.text();
    });
  }

  private parseResponse(text: string): GeminiResponse {
    try {
      // Extract just the YAML portion by finding the first "success: true"
      let yamlContent = text;
      const successIndex = text.indexOf('success: true');
      if (successIndex !== -1) {
        yamlContent = text.slice(successIndex);
      }

      // Further clean up the text
      yamlContent = yamlContent
        .split('\n')
        .map(line => line.replace(/^```\s*ya?ml\s*$/, '').replace(/^```\s*$/, ''))
        .join('\n')
        .trim();

      const response = load(yamlContent) as GeminiResponse;
      
      if (!response.success || !response.data) {
        throw new Error('Invalid response format');
      }

      return response;
    } catch (error) {
      console.error('[Gemini] Failed to parse response:', error);
      throw error;
    }
  }

  async canXBeDone(
    docRefs: GeminiFileData[],
    x: string,
    technology: string,
    prompt?: string
  ): Promise<GeminiResponse> {
    const contents = this.formatPrompt(
      `Can I "${x}" in ${technology}? Show example if possible.`,
      docRefs,
      { technology },
      prompt
    );

    const result = await this.query(contents);
    return this.parseResponse(result);
  }

  async howToDoX(
    docRefs: GeminiFileData[],
    x: string,
    technology: string,
    prompt?: string
  ): Promise<GeminiResponse> {
    const contents = this.formatPrompt(
      `How do I "${x}" in ${technology}? Show multiple examples and alternative approaches if available.`,
      docRefs,
      { technology },
      prompt
    );

    const result = await this.query(contents);
    return this.parseResponse(result);
  }

  async hintsForProblem(
    docRefs: GeminiFileData[],
    problem: string,
    context: string,
    environment: Record<string, unknown>,
    prompt?: string
  ): Promise<GeminiResponse> {
    const contents = this.formatPrompt(
      problem,
      docRefs,
      { context, environment },
      prompt
    );

    const result = await this.query(contents);
    return this.parseResponse(result);
  }

  async isThisGoodPractice(
    docRefs: GeminiFileData[],
    snippet: string,
    context: string,
    prompt?: string
  ): Promise<GeminiResponse> {
    const contents = this.formatPrompt(
      `Is this a good practice:\n${snippet}\nContext: ${context}`,
      docRefs,
      { context },
      prompt
    );

    const result = await this.query(contents);
    return this.parseResponse(result);
  }
}