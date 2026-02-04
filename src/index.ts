#!/usr/bin/env node
import { Command } from 'commander';
import { logger } from './logger.js';
import { Runner } from './runner.js';
import { Watcher } from './watcher.js';
import path from 'path';
import fs from 'fs';

const program = new Command();

const DEFAULT_ENTRY_POINTS = ['index.js', 'server.js', 'app.js', 'main.js', 'index.ts', 'server.ts'];

program
  .name('restartly')
  .description('A high-performance, premium automatic reload tool')
  .version('1.1.0')
  .argument('[script]', 'Script to run')
  .option('-w, --watch <paths...>', 'Paths to watch')
  .option('-i, --ignore <patterns...>', 'Patterns to ignore')
  .option('-x, --exec <command>', 'Custom execution command')
  .option('-d, --debounce <ms>', 'Debounce interval in milliseconds', '200')
  .option('-c, --config <path>', 'Path to config file', 'restartly.json')
  .action((script, options) => {
    logger.banner();

    // 1. Load config file if exists
    let config: any = {};
    const configPath = path.resolve(process.cwd(), options.config);
    if (fs.existsSync(configPath)) {
      try {
        config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      } catch (e) {
        logger.error('Failed to parse config file: ' + options.config);
      }
    }

    // 2. Merge options (CLI takes precedence)
    const watchPaths = options.watch || config.watch || ['.'];
    const ignorePatterns = options.ignore || config.ignore || ['node_modules', '.git', 'dist'];
    const execCommand = options.exec || config.exec;
    const debounceInterval = parseInt(options.debounce || config.debounce || '200', 10);

    // 3. Auto-detect script if not provided
    let finalScript = script || config.script;
    if (!finalScript && !execCommand) {
      for (const entry of DEFAULT_ENTRY_POINTS) {
        if (fs.existsSync(path.resolve(process.cwd(), entry))) {
          finalScript = entry;
          logger.info(`Auto-detected entry point: ${entry}`);
          break;
        }
      }
    }

    let command = '';
    let args: string[] = [];

    if (execCommand) {
      const parts = execCommand.split(' ');
      command = parts[0];
      args = parts.slice(1);
      if (finalScript) args.push(finalScript);
    } else if (finalScript) {
      const ext = path.extname(finalScript);
      if (ext === '.js' || ext === '.mjs' || ext === '.cjs' || ext === '.ts') {
        command = 'node';
        args = [finalScript];
      } else {
        command = finalScript;
      }
    } else {
      logger.error('Please provide a script to run, use --exec, or have a default entry point (index.js, etc.)');
      process.exit(1);
    }

    const runner = new Runner(command, args);
    const watcher = new Watcher({
      watchPaths: Array.isArray(watchPaths) ? watchPaths : [watchPaths],
      ignored: ignorePatterns,
      debounceInterval: debounceInterval,
      onRestart: () => runner.restart()
    });

    // Start everything
    runner.start();
    watcher.start();

    // Handle termination
    const cleanup = () => {
      logger.warn('\nShutting down...');
      watcher.stop();
      runner.stop();
      process.exit(0);
    };

    process.on('SIGINT', cleanup);
    process.on('SIGTERM', cleanup);
  });

program.parse(process.argv);
