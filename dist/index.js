#!/usr/bin/env node
import { Command } from 'commander';
import { logger } from './logger.js';
import { Runner } from './runner.js';
import { Watcher } from './watcher.js';
import path from 'path';
import fs from 'fs';
import { config as loadDotenv } from 'dotenv';
import readline from 'readline';
const program = new Command();
const DEFAULT_ENTRY_POINTS = ['index.js', 'server.js', 'app.js', 'main.js', 'index.ts', 'server.ts'];
const FRAMEWORK_COMMANDS = {
    'next': 'next dev',
    'nest': 'nest start --watch',
    'express': 'node index.js',
    'fastify': 'node server.js',
    'vite': 'vite',
    'nuxt': 'nuxt dev',
    'hono': 'hono-dev',
    'remix': 'remix dev',
    'astro': 'astro dev',
    'svelte': 'vite',
    'strapi': 'strapi develop',
    'adonis': 'node ace serve',
    'fastify-cli': 'fastify start server.js'
};
program
    .name('restartly')
    .description('A professional-grade automatic reload tool for Node.js and Bun')
    .version('1.3.0')
    .argument('[script]', 'Script to run')
    .option('-w, --watch <paths...>', 'Paths to watch')
    .option('-i, --ignore <patterns...>', 'Patterns to ignore')
    .option('-x, --exec <command>', 'Custom execution command')
    .option('-d, --debounce <ms>', 'Debounce interval in milliseconds', '200')
    .option('-l, --delay <ms>', 'Delay before restarting in milliseconds', '0')
    .option('-s, --signal <signal>', 'Signal to send for process termination', 'SIGTERM')
    .option('-p, --polling', 'Use polling for file watching (legacy systems)')
    .option('-v, --verbose', 'Enable verbose logging')
    .option('-q, --quiet', 'Enable quiet mode')
    .option('-e, --env <path>', 'Path to .env file', '.env')
    .option('-c, --config <path>', 'Path to config file', 'restartly.json')
    .action((script, options) => {
    // Set logging mode
    if (options.quiet)
        logger.setMode('quiet');
    else if (options.verbose)
        logger.setMode('verbose');
    logger.banner();
    const cwd = process.cwd();
    // 1. Detect Runtime (Bun vs Node)
    const isBun = fs.existsSync(path.resolve(cwd, 'bun.lockb')) || fs.existsSync(path.resolve(cwd, 'bun.lock'));
    const defaultNodeCommand = isBun ? 'bun run' : 'node';
    if (isBun)
        logger.info('Detected Bun project. Using "bun" runtime.');
    // 2. Load Environment Variables
    const envPath = path.resolve(cwd, options.env);
    if (fs.existsSync(envPath)) {
        loadDotenv({ path: envPath });
        logger.info(`Loaded env from: ${options.env}`);
    }
    // 3. Load config file if exists
    let config = {};
    const configPath = path.resolve(cwd, options.config);
    if (fs.existsSync(configPath)) {
        try {
            config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
            logger.debug(`Loaded config from: ${options.config}`);
        }
        catch (e) {
            logger.error('Failed to parse config file: ' + options.config);
        }
    }
    // 4. Merge options (CLI takes precedence)
    const watchPaths = options.watch || config.watch || ['.'];
    const ignorePatterns = options.ignore || config.ignore || ['node_modules', '.git', 'dist', 'coverage', '.next', '.nuxt', 'build'];
    const execCommand = options.exec || config.exec;
    const debounceInterval = parseInt(options.debounce || config.debounce || '200', 10);
    const delay = parseInt(options.delay || config.delay || '0', 10);
    const signal = options.signal || config.signal || 'SIGTERM';
    const usePolling = options.polling || config.polling || false;
    // 5. Smart Framework & Script Detection
    let finalScript = script || config.script;
    let finalExec = execCommand;
    if (!finalScript && !finalExec) {
        const pkgPath = path.resolve(cwd, 'package.json');
        if (fs.existsSync(pkgPath)) {
            try {
                const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
                const deps = { ...pkg.dependencies, ...pkg.devDependencies };
                // 1. Check scripts FIRST (User config > Defaults)
                if (pkg.scripts) {
                    if (pkg.scripts.dev) {
                        const cmd = isBun ? 'bun dev' : 'npm run dev';
                        logger.info(`Detected "dev" script in package.json. Suggested command: ${cmd}`);
                        finalExec = cmd;
                    }
                    else if (pkg.scripts.start) {
                        const cmd = isBun ? 'bun start' : 'npm start';
                        logger.info(`Detected "start" script in package.json. Suggested command: ${cmd}`);
                        finalExec = cmd;
                    }
                }
                // 2. Check known frameworks (only if no script found)
                if (!finalExec) {
                    for (const [fw, cmd] of Object.entries(FRAMEWORK_COMMANDS)) {
                        if (deps[fw] || deps[`@${fw}/core`] || deps[`@${fw}/cli`]) {
                            logger.info(`Detected ${fw} project. Suggested command: ${cmd}`);
                            finalExec = cmd;
                            break;
                        }
                    }
                }
            }
            catch (e) {
                logger.debug('Failed to read package.json for auto-detection');
            }
        }
    }
    // 6. Default Script Detection (if still nothing)
    if (!finalScript && !finalExec) {
        for (const entry of DEFAULT_ENTRY_POINTS) {
            if (fs.existsSync(path.resolve(cwd, entry))) {
                finalScript = entry;
                logger.info(`Auto-detected entry point: ${entry}`);
                break;
            }
        }
    }
    let command = '';
    let args = [];
    if (finalExec) {
        const parts = finalExec.split(' ');
        command = parts[0];
        args = parts.slice(1);
        if (finalScript)
            args.push(finalScript);
    }
    else if (finalScript) {
        const ext = path.extname(finalScript);
        if (['.js', '.mjs', '.cjs', '.ts', '.mts', '.cts'].includes(ext)) {
            command = defaultNodeCommand;
            if (ext.includes('ts') && !isBun) {
                logger.warn(`Running ${ext} file with node. You might need --exec "tsx" or "ts-node"`);
            }
            args = [finalScript];
        }
        else {
            command = finalScript;
        }
    }
    else {
        logger.error('Please provide a script, use --exec, or have a default entry point (index.js, etc.)');
        process.exit(1);
    }
    // 6. Initialize Runner and Watcher
    const runner = new Runner(command, args, { signal, delay });
    const watcher = new Watcher({
        watchPaths: Array.isArray(watchPaths) ? watchPaths : [watchPaths],
        ignored: ignorePatterns,
        debounceInterval: debounceInterval,
        usePolling: usePolling,
        onRestart: () => runner.restart()
    });
    // 7. Interactive commands (rs)
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
    rl.on('line', (line) => {
        if (line.trim() === 'rs') {
            logger.info('Manual restart requested...');
            runner.restart();
        }
    });
    process.stdin.resume();
    // Start everything
    runner.start();
    watcher.start();
    logger.info('Type "rs" to restart manually at any time.');
    // Handle termination
    const cleanup = () => {
        logger.warn('\nShutting down...');
        rl.close();
        watcher.stop();
        runner.stop();
        process.exit(0);
    };
    process.on('SIGINT', cleanup);
    process.on('SIGTERM', cleanup);
});
program.parse(process.argv);
