const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BabelLoader = require('babel-loader');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './client/index.html',
        title: 'Just Another Text Editor',
      }),
      new InjectManifest({
        swSrc: './client/src-sw.js',
        swDest: 'src-sw.js',
      }),
      new WebpackPwaManifest({
        name: 'Just Another Text Editor',
        short_name: 'J.A.T.E.',
        description: 'A text editor application that functions offline.',
        background_color: '#ffffff',
        theme_color: '#31a9e1',
        start_url: '/',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: path.resolve('client/src/assets/icons/icon_192x192.png'),
            sizes: [192],
            destination: path.join('assets', 'icons'),
          },
          {
            src: path.resolve('client/src/assets/icons/icon_512x512.png'),
            sizes: [512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(js|jsx)$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
      ],
    },
  };
};
