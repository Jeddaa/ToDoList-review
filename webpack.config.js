const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.js?$/,
      //   exclude: ['node_modules/'],
      //   use: ['babel-loader'],
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/index.html',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
};
