import { spawn, ChildProcess } from 'child_process';
import { logger } from './logger.js';

export class Runner {
  private process: ChildProcess | null = null;

  constructor(private command: string, private args: string[]) {}

  start(): void {
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

  stop(): void {
    if (this.process) {
      this.process.kill('SIGTERM');
      this.process = null;
    }
  }

  restart(): void {
    logger.restart('Restarting due to changes...');
    this.start();
  }
}
