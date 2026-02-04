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
    banner() {
        console.log(banner);
        console.log(chalk.gray(`  v1.1.0 - The Premium Automatic Reload Tool\n`));
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
