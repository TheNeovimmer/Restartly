import chalk from 'chalk';
import pc from 'picocolors';

const banner = `
  ${chalk.cyan.bold('██████╗ ███████╗███████╗████████╗ █████╗ ██████╗ ████████╗██╗     ██╗   ██╗')}
  ${chalk.cyan.bold('██╔══██╗██╔════╝██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝██║     ╚██╗ ██╔╝')}
  ${chalk.cyan.bold('██████╔╝█████╗  ███████╗   ██║   ███████║██████╔╝   ██║   ██║      ╚████╔╝ ')}
  ${chalk.cyan.bold('██╔══██╗██╔══╝  ╚════██║   ██║   ██╔══██║██╔══██╗   ██║   ██║       ╚██╔╝  ')}
  ${chalk.cyan.bold('██║  ██║███████╗███████║   ██║   ██║  ██║██║  ██║   ██║   ███████╗   ██║   ')}
  ${chalk.cyan.bold('╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝   ╚═╝   ')}
`;

export const logger = {
  banner(): void {
    console.log(banner);
    console.log(chalk.gray(`  v1.1.0 - The Premium Automatic Reload Tool\n`));
  },

  info(message: string): void {
    console.log(`${chalk.blue('ℹ')} ${chalk.white(message)}`);
  },

  success(message: string): void {
    console.log(`${chalk.green('✔')} ${chalk.white(message)}`);
  },

  warn(message: string): void {
    console.log(`${chalk.yellow('⚠')} ${chalk.yellow(message)}`);
  },

  error(message: string): void {
    console.log(`${chalk.red('✖')} ${chalk.red(message)}`);
  },

  restart(message: string): void {
    console.log(`${chalk.magenta('↺')} ${chalk.magenta(message)}`);
  }
};
