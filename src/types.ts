// Base file record types
export interface FileRecord {
  file_path: string;
  file_id: string;
  file_uri: string;
}

// Gemini API types for file handling
export interface GeminiFileData {
  fileUri: string;
}

export interface GeminiContentPart {
  text?: string;
  fileData?: GeminiFileData;
}

export interface GeminiContent {
  parts: GeminiContentPart[];
}

// Response types for different queries
export interface GeminiResponse {
  success: boolean;
  data: CanXBeResponse | HowToDoResponse | HintsProblemResponse | GoodPracticeResponse;
}

export interface CanXBeResponse {
  yes?: {
    example: string;
    betterApproach?: string;
  };
  no?: {
    reason: string;
    alternative: string;
  };
}

export interface HowToDoResponse {
  examples: Array<{
    content: string;
    description: string;
  }>;
  alternativeApproaches: Array<{
    description: string;
    content: string;
  }>;
}

export interface HintsProblemResponse {
  cantSayForSure?: {
    topics: string[];
  };
  try?: Array<{
    possibleReason: string;
    possibleSolution: string;
  }>;
  seeAlso?: string[];
}

export interface GoodPracticeResponse {
  isGoodPractice: {
    yes?: {
      cosmeticImprovements?: string[];
    };
    no?: {
      betterAlternatives: string[];
    };
  };
}

// Tool parameter types
export interface ToolParams {
  docs: string;
  prompt: string;
}

export interface CanXBeDoneParams extends ToolParams {
  x: string;
  technology: string;
}

export interface HowToDoXParams extends ToolParams {
  x: string;
  technology: string;
}

export interface HintsForProblemParams extends ToolParams {
  problem: string;
  context: string;
  environment: Record<string, unknown>;
}

export interface IsThisGoodPracticeParams extends ToolParams {
  snippet: string;
  context: string;
}