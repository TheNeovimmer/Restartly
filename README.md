<div align="center">

# ↺ Restartly Ultra

### **The Premium Automatic Reload Tool for Modern Developers**

[![npm version](https://img.shields.io/npm/v/restartly.svg?style=for-the-badge&color=00cfd5)](https://www.npmjs.com/package/restartly)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-magenta.svg?style=for-the-badge)](http://makeapullrequest.com)

**High-performance. Developer-friendly. Stylish.**  
_Built for speed, styled for impact, and designed to keep you in the flow._

[Website](https://restartly.vercel.app) • [Documentation](https://restartly.vercel.app/docs) • [GitHub](https://github.com/theneovimmer/restartly)

---

</div>

## 🚀 Why Restartly?

Most reload tools are functional but generic. **Restartly** is a next-generation utility designed to make your development process feel as premium as your code.

- ⚡ **Turbo Speed**: Instant process reloads with sub-millisecond overhead.
- ✨ **Premium UI**: A beautiful, high-contrast terminal experience with custom ASCII art.
- 🔍 **Auto-Detection**: Zero-config mode that finds your entry point automatically.
- ⚙️ **Powerfully Simple**: Unified configuration via `restartly.json`.
- 🛡️ **Reliable Runner**: Advanced child process management with clean cleanup.
- 📦 **Modern Stack**: Built from the ground up with TypeScript and ESM.

---

## 🛠️ Installation

Get started in seconds. Install globally or as a dev dependency.

```bash
# Install globally
npm install -g restartly

# Or install in your project
npm install --save-dev restartly
```

---

## ⚡ Quick Start

Restartly is smarter than your average reloader.

### Zero Config (Auto-Detect)

If you have an `index.js`, `server.js`, or `app.js`, just run:

```bash
restartly
```

### Manual Mode

Specify your entry point explicitly:

```bash
restartly app.ts
```

### Custom Execution

Need to run something else? Restartly handles it:

```bash
restartly --exec "python3 api.py"
```

---

## ⚙️ Configuration

Store your settings in a `restartly.json` file at the root of your project for a seamless experience.

```json
{
  "script": "src/main.ts",
  "watch": ["src", "config"],
  "ignore": ["**/*.test.ts", "dist"],
  "debounce": 300,
  "exec": "tsx"
}
```

### CLI Options

| Option       | Shorthand | Description                          | Default              |
| :----------- | :-------- | :----------------------------------- | :------------------- |
| `--watch`    | `-w`      | Paths to monitor for changes         | `.`                  |
| `--ignore`   | `-i`      | Patterns to ignore (globs supported) | `node_modules, .git` |
| `--exec`     | `-x`      | Custom execution command             | `node`               |
| `--debounce` | `-d`      | Delay before reload (ms)             | `200`                |
| `--config`   | `-c`      | Path to custom config file           | `restartly.json`     |

---

## 🎨 Premium Experience

Restartly isn't just a tool; it's a visual upgrade for your terminal. Experience a high-performance runner that actually looks good while you work.

<div align="center">
  <br />
  <img src="https://raw.githubusercontent.com/theneovimmer/restartly/main/website/public/favicon.png" width="100" alt="Restartly Logo" />
  <br />
</div>

---

## 🤝 Contributing

We love contributions! Whether it's a bug fix, a new feature, or an improvement to the documentation, feel free to open a Pull Request.

1. Fork the Repository
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

<div align="center">

Built with ❤️ by [TheNeovimmer](https://github.com/theneovimmer)

</div>
