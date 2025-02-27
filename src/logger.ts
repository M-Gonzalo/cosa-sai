import { join } from 'path';
import type { FileSink } from 'bun';

export class Logger {
  private static writer: FileSink | null = null;
  private static enabled = false;

  static enable() {
    this.enabled = true;
    this.writer = Bun.file(join(import.meta.dir, '..', 'debug.log')).writer();
  }

  static log(message: string) {
    if (!this.enabled) return;

    const timestamp = new Date().toISOString();
    this.writer?.write(`[${timestamp}] ${message}\n`);
    this.writer?.flush();
  }

  static close() {
    if (this.writer) {
      this.writer.end();
      this.writer = null;
    }
  }
}