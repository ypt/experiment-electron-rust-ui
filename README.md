# experiment-electron-rust-ui

An experiment with an Electron UI + a Rust backend communicating via IPC

## Prerequisites
- [Node](https://github.com/nvm-sh/nvm)
- [Rust](https://www.rust-lang.org/tools/install)

## Build and run
Build the Rust core library
```bash
$ cd core
$ cargo build
```

Build and run the Electron UI
```
$ cd ../desktop-ui
$ nvm use
$ npm install
$ npm start
```

## Resources
### Electron + Webpack + React
- https://blog.scottlogic.com/2017/06/06/typescript-electron-webpack.html
- https://github.com/electron-userland/electron-webpack

### Electron + Rust core
- https://github.com/xi-editor/xi-editor
- https://github.com/acheronfail/xi-electron
- https://github.com/atom-archive/xray
- https://keminglabs.com/blog/building-a-fast-electron-app-with-rust/