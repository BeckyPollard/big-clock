const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    assetModuleFilename: 'assets/images/[hash][ext]',
    filename: 'scripts/[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [],
  },
});
