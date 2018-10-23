const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    localIdentName: '[local]__[hash:base64:5]',
    minimize: true
  }
};

const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: false,
    sourceMap: true,
    minimize: true
  }
};

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    sourceMap: true,
    plugins: () => [
      autoprefixer({
        browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
      })
    ]
  }
};

module.exports = {
  entry: {
    vendor: [
      // Required to support async/await
      '@babel/polyfill'
    ],
    main: ['./src/main.js']
  },
  mode: 'development',
  target: 'web',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',
    overlay: true,
    port: 8080,
    stats: {
      colors: true
    }
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              [
                '@babel/preset-env',
                { targets: { browsers: 'last 2 versions' } } // or whatever your project requires
              ],
              '@babel/preset-typescript',
              '@babel/preset-react'
            ],
            plugins: [
              // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              'react-hot-loader/babel'
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: ['style-loader', CSSLoader, postCSSLoader, 'sass-loader']
      },
      {
        test: /\.module\.scss$/,
        use: ['style-loader', CSSModuleLoader, postCSSLoader, 'sass-loader']
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      watch: './src/**/*'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      inject: true,
      template: './src/index.html'
    })
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  performance: {
    hints: false
  }
};
