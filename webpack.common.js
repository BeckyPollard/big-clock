const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.tsx',
    vendor: ['react', 'react-dom'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      favicon: './src/assets/images/favicon.ico',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          'html-loader', //require assets linked in html
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.(svg|png|jp?eg|gif|ico|mp3)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/fonts',
          },
        },
      },
      {
        test: /\.(mp3)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/audio',
          },
        },
      },
    ],
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
};
