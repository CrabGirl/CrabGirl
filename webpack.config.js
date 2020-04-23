/* eslint-disable */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const plugins = [];

  if(env.production) {
    plugins.push(new CleanWebpackPlugin());
  }

  plugins.push(new HTMLWebpackPlugin({
    template: path.resolve(__dirname, "assets/index.html"),
    filename: "index.html",
    inject: "body"
  }));

  return {
    mode: env.production ? "production" : "development",
    entry: {
      freeplay: [path.resolve(__dirname, 'src', 'index.js')]
    },
    devtool: env.production || env.nodevtools ? false : "cheap-module-eval-source-map",
    devServer: {
      historyApiFallback: true,
      host: 'localhost',
      open: true,
      disableHostCheck: true,
      port: 3139
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg)$/,
          exclude: /node_modules/,
          use: ['file-loader']
        },
        {
          test: /\.(woff|eot|ttf|svg)$/,
          exclude: /node_modules/,
          use: {
            loader: 'file-loader',
            options: {
              name: "fonts/[name].[ext]",
            },
          },
        },
        {
          test: /\.js$/,
          use: ['babel-loader']
        },
        {
          test: /\.(css)$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    optimization: {
      minimize: (env.production ? true : false)
    },
    output: {
      filename: env.production ? "app.[chunkhash].js" : "app.js",
      path: path.join(__dirname, "public"),
      publicPath: '/'
    },
    plugins: plugins
  }
};