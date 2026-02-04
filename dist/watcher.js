import chokidar from 'chokidar';
import { logger } from './logger.js';
export class Watcher {
    options;
    watcher = null;
    debounceTimer = null;
    isRestarting = false;
    constructor(options) {
        this.options = options;
    }
    start() {
        const { watchPaths, ignored, debounceInterval = 200 } = this.options;
        this.watcher = chokidar.watch(watchPaths, {
            ignored,
            ignoreInitial: true,
            persistent: true
        });
        this.watcher.on('all', (event, path) => {
            if (this.isRestarting)
                return;
            if (this.debounceTimer) {
                clearTimeout(this.debounceTimer);
            }
            this.debounceTimer = setTimeout(() => {
                this.options.onRestart();
            }, debounceInterval);
        });
        logger.success(`Watching paths: ${watchPaths.join(', ')}`);
        if (ignored.length > 0) {
            logger.info(`Ignoring: ${ignored.join(', ')}`);
        }
    }
    stop() {
        if (this.watcher) {
            this.watcher.close();
            this.watcher = null;
        }
    }
}
