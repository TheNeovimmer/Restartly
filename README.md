<div align="center">

# Restartly ↺

### A High-Performance, Premium `nodemon` Alternative

[![npm version](https://img.shields.io/npm/v/restartly.svg?style=flat-square&color=00cfd5)](https://www.npmjs.com/package/restartly)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

**Restartly** is built for developers who crave a better terminal experience. It's fast, beautiful, and handles process restarts with precision.

[Features](#-features) • [Installation](#-installation) • [Quick Start](#-quick-start) • [CLI Options](#-cli-options)

</div>

---

## ✨ Features

- 🚀 **Lightning Fast**: Powered by `chokidar` for near-instant file monitoring.
- 🎨 **Premium UI**: Sleek ASCII banner and vibrant terminal feedback.
- ⚡ **Smart Restart**: Built-in debouncing to prevent flickering during rapid saves.
- 🛠 **Flexible**: Fine-grained control over watch paths, ignore patterns, and exec commands.
- 📦 **Modern Stack**: Written in TypeScript, compiled to ESM.

## 📦 Installation

Install globally via npm:

```bash
npm install -g restartly
```

Or run it instantly with npx:

```bash
npx restartly app.js
```

## 🚀 Quick Start

### Basic Usage

Start watching your Node.js application:

```bash
restartly app.js
```

### Advanced Watch configuration

Watch specific directories and ignore test files:

```bash
restartly app.js --watch src config --ignore "**/*.test.js" "docs/*"
```

### Custom Runtime

Run anything, not just Node:

```bash
restartly --exec "python3 main.py"
```

## 🛠 CLI Options

| Option       | Flag             | Description              | Default                        |
| :----------- | :--------------- | :----------------------- | :----------------------------- |
| **Script**   | `[script]`       | The script to run        | -                              |
| **Watch**    | `-w, --watch`    | Paths to watch           | `.`                            |
| **Ignore**   | `-i, --ignore`   | Patterns to ignore       | `node_modules`, `.git`, `dist` |
| **Exec**     | `-x, --exec`     | Custom execution command | -                              |
| **Debounce** | `-d, --debounce` | Debounce interval (ms)   | `200`                          |

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

<div align="center">
  Built with ❤️ by <a href="https://github.com/theneovimmer">TheNeovimmer</a>
</div>
