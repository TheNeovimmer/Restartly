# Restartly ↺

A high-performance, developer-friendly `nodemon` alternative with a premium terminal experience.

![Restartly Banner](https://img.shields.io/badge/Restartly-v1.0.0-cyan)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

- 🚀 **High Performance**: Built with `chokidar` for efficient file watching.
- 🎨 **Beautiful UI**: Custom ASCII banner and colorful terminal feedback using `chalk` and `picocolors`.
- ⚡ **Debounced Restarts**: Avoid multiple restarts during rapid file saves.
- 🛠 **Configurable**: Easily specify watch paths, ignore patterns, and custom execution commands.
- 📦 **TS/ESM Ready**: Modern codebase written in TypeScript with ESM support.

## Installation

```bash
npm install -g restartly
```

## Usage

### Basic usage

```bash
restartly app.js
```

### Watching specific paths

```bash
restartly app.js --watch src config
```

### Ignoring patterns

```bash
restartly app.js --ignore "coverage/*" "logs/*"
```

### Custom execution command

```bash
restartly --exec "python3 main.py"
```

### Custom debounce interval

```bash
restartly app.js --debounce 500
```

## CLI Options

| Option       | Shorthand | Description              | Default                    |
| ------------ | --------- | ------------------------ | -------------------------- |
| `--watch`    | `-w`      | Paths to watch           | `.`                        |
| `--ignore`   | `-i`      | Patterns to ignore       | `node_modules, .git, dist` |
| `--exec`     | `-x`      | Custom execution command | -                          |
| `--debounce` | `-d`      | Debounce interval (ms)   | `200`                      |
| `--version`  | `-v`      | Show version             | -                          |
| `--help`     | `-h`      | Show help                | -                          |

## License

MIT © [TheNeovimmer](https://github.com/theneovimmer)
