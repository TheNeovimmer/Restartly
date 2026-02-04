import { spawn } from 'child_process';
import { logger } from './logger.js';
export class Runner {
    command;
    args;
    process = null;
    constructor(command, args) {
        this.command = command;
        this.args = args;
    }
    start() {
        if (this.process) {
            this.stop();
        }
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
    }
    stop() {
        if (this.process) {
            this.process.kill('SIGTERM');
            this.process = null;
        }
    }
    restart() {
        logger.restart('Restarting due to changes...');
        this.start();
    }
}
