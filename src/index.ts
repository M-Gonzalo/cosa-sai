#!/usr/bin/env bun
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {  ListToolsRequestSchema, CallToolRequestSchema, Tool } from '@modelcontextprotocol/sdk/types.js';
import { GoogleAIFileManager } from '@google/generative-ai/server';
import { z } from 'zod';
import { readdirSync, readFileSync } from 'fs';
import { join, resolve } from 'path';
import { GeminiAPI } from './gemini';
import { GeminiDocsDB } from './db';
import { Logger } from './logger';
import type { CanXBeDoneParams, HowToDoXParams, HintsForProblemParams, IsThisGoodPracticeParams, GeminiFileData } from './types';

// Tool names as constants to ensure consistency
const TOOL_NAMES = {
  CAN_X_BE_DONE: 'can_x_be_done',
  HOW_TO_DO_X: 'how_to_do_x',
  HINTS_FOR_PROBLEM: 'hints_for_problem',
  IS_THIS_GOOD_PRACTICE: 'is_this_good_practice'
} as const;

const canXBeDoneSchema = z.object({
  docs: z.string().describe('Path to documentation directory'),
  prompt: z.string().describe('Path to prompt file'),
  x: z.string().describe('The task to check'),
  technology: z.string().describe('The technology (programming language/framework/tool)'),
});

const howToDoXSchema = z.object({
  docs: z.string().describe('Path to documentation directory'),
  prompt: z.string().describe('Path to prompt file'),
  x: z.string().describe('The task to implement'),
  technology: z.string().describe('The technology (programming language/framework/tool)'),
});

const hintsForProblemSchema = z.object({
  docs: z.string().describe('Path to documentation directory'),
  prompt: z.string().describe('Path to prompt file'),
  problem: z.string().describe('The problem description'),
  context: z.string().describe('The context of the problem'),
  environment: z.record(z.unknown()).describe('Environment information'),
});

const isThisGoodPracticeSchema = z.object({
  docs: z.string().describe('Path to documentation directory'),
  prompt: z.string().describe('Path to prompt file'),
  snippet: z.string().describe('The code snippet to check'),
  context: z.string().describe('The context in which the code is used'),
});

// Define Tool objects following the MCP specification
const TOOLS: Tool[] = [
  {
    name: TOOL_NAMES.CAN_X_BE_DONE,
    description: 'Check if a specific task can be done in a given language/framework/tool',
    inputSchema: {
      type: 'object',
      properties: {
        docs: { type: 'string', description: 'Path to documentation directory' },
        prompt: { type: 'string', description: 'Path to prompt file' },
        x: { type: 'string', description: 'The task to check' },
        technology: { type: 'string', description: 'The technology (programming language/framework/tool)' },
      },
      required: ['docs', 'x', 'technology'],
    },
  },
  {
    name: TOOL_NAMES.HOW_TO_DO_X,
    description: 'Get examples and alternative approaches for a specific task',
    inputSchema: {
      type: 'object',
      properties: {
        docs: { type: 'string', description: 'Path to documentation directory' },
        prompt: { type: 'string', description: 'Path to prompt file' },
        x: { type: 'string', description: 'The task to implement' },
        technology: { type: 'string', description: 'The technology (programming language/framework/tool)' },
      },
      required: ['docs', 'x', 'technology'],
    },
  },
  {
    name: TOOL_NAMES.HINTS_FOR_PROBLEM,
    description: 'Get hints for solving a specific problem',
    inputSchema: {
      type: 'object',
      properties: {
        docs: { type: 'string', description: 'Path to documentation directory' },
        prompt: { type: 'string', description: 'Path to prompt file' },
        problem: { type: 'string', description: 'The problem description' },
        context: { type: 'string', description: 'The context of the problem' },
        environment: { type: 'object', description: 'Environment information' },
      },
      required: ['docs', 'problem', 'context'],
    },
  },
  {
    name: TOOL_NAMES.IS_THIS_GOOD_PRACTICE,
    description: 'Check if a code snippet follows good practices',
    inputSchema: {
      type: 'object',
      properties: {
        docs: { type: 'string', description: 'Path to documentation directory' },
        prompt: { type: 'string', description: 'Path to prompt file' },
        snippet: { type: 'string', description: 'The code snippet to check' },
        context: { type: 'string', description: 'The context in which the code is used' },
      },
      required: ['docs', 'snippet', 'context'],
    },
  }
];

class GeminiDocsServer {
  private server: Server;
  private gemini: GeminiAPI;
  private db: GeminiDocsDB;
  private fileManager: GoogleAIFileManager;

  constructor() {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY environment variable is required');
    }

    const toolsEnabled = TOOLS.reduce((acc, tool) => {
      acc[tool.name] = true;
      return acc;
    }, {} as Record<string, boolean>);

    this.server = new Server(
      {
        name: 'gemini-docs',
        version: '0.1.0',
      },
      {
        capabilities: {
          tools: toolsEnabled,
        },
      }
    );

    try {
      this.db = new GeminiDocsDB();
      this.fileManager = new GoogleAIFileManager(process.env.GEMINI_API_KEY);
      this.gemini = new GeminiAPI();
    } catch (error) {
      console.error('[Server] Failed to initialize:', error);
      Logger.log(`[Server] Failed to initialize: ${error}`);
      throw error;
    }

    this.setupTools();
    this.setupErrorHandler();
  }

  private setupErrorHandler() {
    this.server.onerror = (error) => {
      console.error('[MCP Error]', error);
    };
  }

  private generateFileId(content: string): string {
    const hash = Bun.hash(content).toString(16);
    return hash;
  }

  private async uploadFileWithRetry(
    fullPath: string,
    displayName: string,
    maxRetries: number = 3,
    retryDelay: number = 1000
  ): Promise<{ uri: string }> {
    let lastError: Error;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const result = await this.fileManager.uploadFile(fullPath, {
          mimeType: 'text/markdown',
          displayName
        });
        return { uri: result.file.uri };
      } catch (error: any) {
        lastError = error;
        if (attempt < maxRetries) {
          Logger.log(`[FileURIDebug] Upload attempt ${attempt} failed for ${fullPath}, retrying in ${retryDelay}ms...`);
          await new Promise(resolve => setTimeout(resolve, retryDelay * attempt));
        }
      }
    }
    throw lastError!;
  }

  private async processFileBatch(
    absPath: string,
    files: string[],
    batchSize: number = 10,
    stats: { cached: number; uploaded: number; } = { cached: 0, uploaded: 0 }
  ): Promise<GeminiFileData[]> {
    const docRefs: GeminiFileData[] = [];
    const batches = [];

    const logProgress = () => {
      Logger.log(`[FileURIDebug] Progress Report:
        Total files: ${files.length}
        Processed: ${stats.cached + stats.uploaded}
        Cached: ${stats.cached}
        Uploaded: ${stats.uploaded}
      `);
    };

    // Split files into batches
    for (let i = 0; i < files.length; i += batchSize) {
      batches.push(files.slice(i, i + batchSize));
    }

    Logger.log(`[FileURIDebug] Processing ${files.length} files in ${batches.length} batches of ${batchSize}`);

    // Process batches sequentially to avoid overwhelming the API
    for (const batch of batches) {
      Logger.log(`[FileURIDebug] Processing batch of ${batch.length} files...`);
      const batchResults = await Promise.all(
        batch.map(async (file) => {
          const fullPath = join(absPath, file);
          
          try {
            // Calculate content hash first
            const content = readFileSync(fullPath, 'utf-8');
            const fileHash = this.generateFileId(content);
            
            // Check if we have this content's URI
            const existingFile = await this.db.getFile(fileHash);
            
            if (existingFile) {
              Logger.log(`[FileURIDebug] Found existing content (hash: ${fileHash}) for ${fullPath}`);
              stats.cached++;
              logProgress();
              return {
                fileUri: existingFile.fileUri
              };
            }

            // Upload new file to Gemini
            Logger.log(`[FileURIDebug] Uploading file ${fullPath} (${file})`);

            const uploadResult = await this.uploadFileWithRetry(fullPath, file);

            // Store the Gemini file URI
            await this.db.saveFileId(fullPath, fileHash, uploadResult.uri);
            Logger.log(`[FileURIDebug] Successfully uploaded and saved ${fullPath}`);
            stats.uploaded++;
            logProgress();
            return { fileUri: uploadResult.uri };
          } catch (error) {
            Logger.log(`[FileURIDebug] Error processing file ${fullPath}: ${error}`);
            throw error;
          }
        })
      );
      docRefs.push(...batchResults);
    }
    return docRefs;
  }

  private async readDocs(dirPath: string): Promise<GeminiFileData[]> {
    try {
      const absPath = resolve(dirPath);
      const files = readdirSync(absPath, { recursive: true }) as string[];
      const mdFiles = files.filter(file => file.endsWith('.md'));
      Logger.log(`[FileURIDebug] Found ${mdFiles.length} markdown files to process`);
      
      // Track cached vs uploaded files
      const stats = { cached: 0, uploaded: 0 };
      const docRefs = await this.processFileBatch(absPath, mdFiles, 10, stats);
      
      Logger.log(`[FileURIDebug] Processing completed:
        ${stats.cached} files loaded from cache
        ${stats.uploaded} files uploaded to Gemini`);
      return docRefs;
    } catch (error) {
      console.error('[Server] Error reading docs');
      Logger.log(`[FileURIDebug] Error reading docs: ${error}`);
      throw error;
    }
  }

  private setupTools() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: TOOLS,
    }));

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;
      
      switch (name) {
        case TOOL_NAMES.CAN_X_BE_DONE: {
          const params = canXBeDoneSchema.parse(args) as CanXBeDoneParams;
          const docs = await this.readDocs(params.docs);
          const response = await this.gemini.canXBeDone(
            docs,
            params.x,
            params.technology,
            params.prompt
          );
          return { content: [{ type: 'text', text: JSON.stringify(response, null, 2) }] };
        }
        case TOOL_NAMES.HOW_TO_DO_X: {
          const params = howToDoXSchema.parse(args) as HowToDoXParams;
          const docs = await this.readDocs(params.docs);
          const response = await this.gemini.howToDoX(
            docs,
            params.x,
            params.technology,
            params.prompt
          );
          return { content: [{ type: 'text', text: JSON.stringify(response, null, 2) }] };
        }
        case TOOL_NAMES.HINTS_FOR_PROBLEM: {
          const params = hintsForProblemSchema.parse(args) as HintsForProblemParams;
          const docs = await this.readDocs(params.docs);
          const response = await this.gemini.hintsForProblem(
            docs,
            params.problem,
            params.context,
            params.environment,
            params.prompt
          );
          return { content: [{ type: 'text', text: JSON.stringify(response, null, 2) }] };
        }
        case TOOL_NAMES.IS_THIS_GOOD_PRACTICE: {
          const params = isThisGoodPracticeSchema.parse(args) as IsThisGoodPracticeParams;
          const docs = await this.readDocs(params.docs);
          const response = await this.gemini.isThisGoodPractice(
            docs,
            params.snippet,
            params.context,
            params.prompt
          );
          return { content: [{ type: 'text', text: JSON.stringify(response, null, 2) }] };
        }
        default:
          throw new Error(`Unknown tool: ${name}`);
      }
    });
  }

  async start() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
  }

  async stop() {
    await this.server.close();
    this.db.close();
    Logger.close();
  }
}

// Handle graceful shutdown
const server = new GeminiDocsServer();

// Parse command line arguments
const args = process.argv.slice(2);
if (args.includes('--verbose')) {
  Logger.enable();
}

process.on('SIGINT', async () => {
  await server.stop();
  process.exit(0);
});

server.start().catch(error => {
  console.error('Failed to start server:', error);
  process.exit(1);
});