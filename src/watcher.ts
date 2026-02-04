import chokidar from 'chokidar';
import { logger } from './logger.js';

export interface WatcherOptions {
  watchPaths: string[];
  ignored: string[];
  onRestart: () => void;
  debounceInterval?: number;
  usePolling?: boolean;
}

export class Watcher {
  private watcher: ReturnType<typeof chokidar.watch> | null = null;
  private debounceTimer: NodeJS.Timeout | null = null;
  private isRestarting = false;

  constructor(private options: WatcherOptions) {}

  start(): void {
    const { watchPaths, ignored, debounceInterval = 200, usePolling = false } = this.options;

    this.watcher = chokidar.watch(watchPaths, {
      ignored,
      ignoreInitial: true,
      persistent: true,
      usePolling
    });

    this.watcher.on('all', (event: string, path: string) => {
      if (this.isRestarting) return;

      if (this.debounceTimer) {
        clearTimeout(this.debounceTimer);
      }

      this.debounceTimer = setTimeout(() => {
        this.options.onRestart();
      }, debounceInterval);
    });

    logger.success(`Watching paths: ${watchPaths.join(', ')}`);
    if (usePolling) {
      logger.info('Polling mode enabled');
    }
    if (ignored.length > 0) {
      logger.info(`Ignoring: ${ignored.join(', ')}`);
    }
  }

  stop(): void {
    if (this.watcher) {
      this.watcher.close();
      this.watcher = null;
    }
  }
}
