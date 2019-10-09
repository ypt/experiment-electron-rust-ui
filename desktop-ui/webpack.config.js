const path = require('path')

const commonConfig = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          typeCheck: true,
          emitErrors: true
        }
      },
      {
        test: /\.tsx?$/,
        loader: ['babel-loader', 'ts-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
  },
  node: {
    __dirname: false
  },
}

const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = [
  Object.assign(
    {
      entry: { preload_process: './src/preload_process/main.ts' }
    },
    commonConfig),
  Object.assign(
    {
      target: 'electron-main',
      entry: { main_process: './src/main_process/main.ts' }
    },
    commonConfig),
  Object.assign(
    {
      target: 'electron-renderer',
      entry: { render_process: './src/render_process/main.ts' },
      plugins: [new HtmlWebpackPlugin()]
    },
    commonConfig)
]