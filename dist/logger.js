import chalk from 'chalk';
const banner = `
  ${chalk.cyan.bold('██████╗ ███████╗███████╗████████╗ █████╗ ██████╗ ████████╗██╗     ██╗   ██╗')}
  ${chalk.cyan.bold('██╔══██╗██╔════╝██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝██║     ╚██╗ ██╔╝')}
  ${chalk.cyan.bold('██████╔╝█████╗  ███████╗   ██║   ███████║██████╔╝   ██║   ██║      ╚████╔╝ ')}
  ${chalk.cyan.bold('██╔══██╗██╔══╝  ╚════██║   ██║   ██╔══██║██╔══██╗   ██║   ██║       ╚██╔╝  ')}
  ${chalk.cyan.bold('██║  ██║███████╗███████║   ██║   ██║  ██║██║  ██║   ██║   ███████╗   ██║   ')}
  ${chalk.cyan.bold('╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝   ╚═╝   ')}
`;
export const logger = {
    mode: 'normal',
    setMode(mode) {
        this.mode = mode;
    },
    banner() {
        if (this.mode === 'quiet')
            return;
        console.log(banner);
        console.log(chalk.gray(`  v1.3.1 - The Professional Automatic Reload Tool\n`));
    },
    info(message) {
        if (this.mode === 'quiet')
            return;
        console.log(`${chalk.blue('ℹ')} ${chalk.white(message)}`);
    },
    success(message) {
        if (this.mode === 'quiet')
            return;
        console.log(`${chalk.green('✔')} ${chalk.white(message)}`);
    },
    warn(message) {
        if (this.mode === 'quiet')
            return;
        console.log(`${chalk.yellow('⚠')} ${chalk.yellow(message)}`);
    },
    error(message) {
        // Errors are always shown unless in extreme cases, but here we still honor quiet for consistency if needed, 
        // or we can decide errors always show. Usually errors should always show.
        console.log(`${chalk.red('✖')} ${chalk.red(message)}`);
    },
    debug(message) {
        if (this.mode !== 'verbose')
            return;
        console.log(`${chalk.magenta('debug')} ${chalk.gray(message)}`);
    },
    restart(message) {
        if (this.mode === 'quiet')
            return;
        console.log(`${chalk.cyan('↺')} ${chalk.cyan(message)}`);
    }
};
