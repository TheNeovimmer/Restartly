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
  mode: 'normal' as 'normal' | 'verbose' | 'quiet',

  setMode(mode: 'normal' | 'verbose' | 'quiet'): void {
    this.mode = mode;
  },

  banner(): void {
    if (this.mode === 'quiet') return;
    console.log(banner);
    console.log(chalk.gray(`  v1.3.0 - The Professional Automatic Reload Tool\n`));
  },

  info(message: string): void {
    if (this.mode === 'quiet') return;
    console.log(`${chalk.blue('ℹ')} ${chalk.white(message)}`);
  },

  success(message: string): void {
    if (this.mode === 'quiet') return;
    console.log(`${chalk.green('✔')} ${chalk.white(message)}`);
  },

  warn(message: string): void {
    if (this.mode === 'quiet') return;
    console.log(`${chalk.yellow('⚠')} ${chalk.yellow(message)}`);
  },

  error(message: string): void {
    // Errors are always shown unless in extreme cases, but here we still honor quiet for consistency if needed, 
    // or we can decide errors always show. Usually errors should always show.
    console.log(`${chalk.red('✖')} ${chalk.red(message)}`);
  },

  debug(message: string): void {
    if (this.mode !== 'verbose') return;
    console.log(`${chalk.magenta('debug')} ${chalk.gray(message)}`);
  },

  restart(message: string): void {
    if (this.mode === 'quiet') return;
    console.log(`${chalk.cyan('↺')} ${chalk.cyan(message)}`);
  }
};
