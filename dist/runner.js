import { spawn } from 'child_process';
import { logger } from './logger.js';
export class Runner {
    command;
    args;
    options;
    process = null;
    delayTimer = null;
    constructor(command, args, options = {}) {
        this.command = command;
        this.args = args;
        this.options = options;
    }
    start() {
        if (this.process) {
            this.stop();
        }
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = null;
        }
        const { delay = 0 } = this.options;
        const spawnProcess = () => {
            logger.info(`Starting: ${this.command} ${this.args.join(' ')}`);
            this.process = spawn(this.command, this.args, {
                stdio: 'inherit',
                shell: true
            });
            this.process.on('close', (code) => {
                if (code !== null && code !== 0 && code !== 130) {
                    logger.error(`Process exited with code ${code}`);
                }
            });
            this.process.on('error', (err) => {
                logger.error(`Failed to start process: ${err.message}`);
            });
        };
        if (delay > 0) {
            this.delayTimer = setTimeout(spawnProcess, delay);
        }
        else {
            spawnProcess();
        }
    }
    stop() {
        if (this.process) {
            const signal = (this.options.signal || 'SIGTERM');
            this.process.kill(signal);
            this.process = null;
        }
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = null;
        }
    }
    restart() {
        this.stop();
        logger.restart('Restarting due to changes...');
        this.start();
    }
}
