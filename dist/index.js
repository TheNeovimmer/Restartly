#!/usr/bin/env node
import { Command } from 'commander';
import { logger } from './logger.js';
import { Runner } from './runner.js';
import { Watcher } from './watcher.js';
import path from 'path';
const program = new Command();
program
    .name('restartly')
    .description('A high-performance nodemon alternative')
    .version('1.0.0')
    .argument('[script]', 'Script to run')
    .option('-w, --watch <paths...>', 'Paths to watch', ['.'])
    .option('-i, --ignore <patterns...>', 'Patterns to ignore', ['node_modules', '.git', 'dist'])
    .option('-x, --exec <command>', 'Custom execution command')
    .option('-d, --debounce <ms>', 'Debounce interval in milliseconds', '200')
    .action((script, options) => {
    logger.banner();
    let command = '';
    let args = [];
    if (options.exec) {
        const parts = options.exec.split(' ');
        command = parts[0];
        args = parts.slice(1);
        if (script)
            args.push(script);
    }
    else if (script) {
        const ext = path.extname(script);
        if (ext === '.js' || ext === '.mjs' || ext === '.cjs' || ext === '.ts') {
            command = 'node';
            args = [script];
        }
        else {
            command = script;
        }
    }
    else {
        logger.error('Please provide a script to run or use --exec');
        process.exit(1);
    }
    const runner = new Runner(command, args);
    const watcher = new Watcher({
        watchPaths: options.watch,
        ignored: options.ignore,
        debounceInterval: parseInt(options.debounce, 10),
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
