import chalk from 'chalk';
import pc from 'picocolors';
const banner = `
${pc.cyan('   _____                 _                 _   _       ')}
${pc.cyan('  |  __ \\               | |               | | | |      ')}
${pc.cyan('  | |__) |___  ___ _ __ | |_ __ _ _ __ ___| | | |_   _ ')}
${pc.cyan('  |  _  // _ \\/ __| __|| __/ _` | ___|_  / | | | | | |')}
${pc.cyan('  | | \\ \\  __/\\__ \\ |   | || (_| | |    / /| | | | |_| |')}
${pc.cyan('  |_|  \\_\\___||___/_|    \\__\\__,_|_|   /___|_|_|_|\\__, |')}
${pc.cyan('                                                   __/ |')}
${pc.cyan('                                                  |___/ ')}
`;
export const logger = {
    banner() {
        console.log(banner);
        console.log(chalk.gray(`  v1.0.0 - A high-performance nodemon alternative\n`));
    },
    info(message) {
        console.log(`${chalk.blue('ℹ')} ${chalk.white(message)}`);
    },
    success(message) {
        console.log(`${chalk.green('✔')} ${chalk.white(message)}`);
    },
    warn(message) {
        console.log(`${chalk.yellow('⚠')} ${chalk.yellow(message)}`);
    },
    error(message) {
        console.log(`${chalk.red('✖')} ${chalk.red(message)}`);
    },
    restart(message) {
        console.log(`${chalk.magenta('↺')} ${chalk.magenta(message)}`);
    }
};
