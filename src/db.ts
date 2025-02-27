import { Database } from 'bun:sqlite';
import type { FileRecord } from './types';
import { join, resolve } from 'path';
import { Logger } from './logger';

export class GeminiDocsDB {
  private db: Database;
  private dbPath: string;

  constructor() {
    try {
      this.dbPath = resolve(join(import.meta.dir, '..', 'gemini_docs.sqlite'));
      this.db = new Database(this.dbPath, { create: true });
      this.init();
    } catch (error) {
      console.error('[DB] Failed to initialize database:', error);
      Logger.log(`[DBDebug] Failed to initialize database: ${error}`);
      throw error;
    }
  }

  private readonly TABLE_SQL = `
    CREATE TABLE gemini_files (
      file_id TEXT PRIMARY KEY,
      file_path TEXT NOT NULL,
      file_uri TEXT NOT NULL,
      created_at INTEGER NOT NULL DEFAULT (unixepoch()),
      UNIQUE(file_path)
    )
  `;

  private migrateSchema() {
    Logger.log('[DBDebug] Schema migration not implemented - using existing schema');
  }

  private init() {
    try {
      const stmt = this.db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='gemini_files'");
      if (stmt.get()) {
        Logger.log('[DBDebug] Found existing table, migrating schema...');
        this.migrateSchema();
      } else {
        Logger.log('[DBDebug] Creating new database with latest schema...');
        this.db.run(this.TABLE_SQL);
      }
      Logger.log('[DBDebug] Database schema initialized/verified');
    } catch (error) {
      console.error('[DB] Error during initialization:', error);
      Logger.log(`[DBDebug] Error during initialization: ${error}`);
      throw error;
    }
  }

  async saveFileId(
    filePath: string, 
    fileId: string, 
    fileUri: string
  ): Promise<void> {
    try {
      const stmt = this.db.prepare(
        'INSERT OR REPLACE INTO gemini_files (file_id, file_path, file_uri) VALUES (?, ?, ?)'
      );
      stmt.run(fileId, filePath, fileUri);
      Logger.log(`[DBDebug] Saved/Updated file record:
        ID: ${fileId}
        Path: ${filePath}
        URI: ${fileUri}`);
    } catch (error) {
      Logger.log(`[DBDebug] Error saving file record:
        Error: ${error}`);
      console.error('[DB] Error saving file:', error);
      throw error;
    }
  }

  async getFile(fileHash: string): Promise<{
    fileUri: string;
  } | null> {
    try {
      const stmt = this.db.prepare(
        'SELECT file_uri FROM gemini_files WHERE file_id = ? LIMIT 1'
      );
      const result = stmt.get(fileHash) as {
        file_uri: string;
      } | null;
      
      if (result) {
        Logger.log(`[DBDebug] Retrieved file record for hash ${fileHash}:
          Hash: ${fileHash}
          URI: ${result.file_uri}`);
      }
      return result
        ? {
            fileUri: result.file_uri
          }
        : null;
    } catch (error) {
      Logger.log(`[DBDebug] Error retrieving file record for ${fileHash}: ${error}`);
      console.error('[DB] Error getting file:', error);
      throw error;
    }
  }

  async getAllFiles(): Promise<FileRecord[]> {
    try {
      const stmt = this.db.prepare(
        'SELECT file_path, file_id, file_uri FROM gemini_files ORDER BY file_id, file_path'
      );
      Logger.log('[DBDebug] Retrieved all file records from database');
      return stmt.all() as FileRecord[];
    } catch (error) {
      console.error('[DB] Error getting files:', error);
      Logger.log(`[DBDebug] Error retrieving all file records: ${error}`);
      throw error;
    }
  }

  close(): void {
    this.db.close();
  }
}