const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    // HTML
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    // stylelint
    new StylelintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.css'
    })
  ],
  entry: [
    'react-hot-loader/patch',
    './src'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // ESLint
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitError: true
        }
      },
      // Babel
      {
        test: /\.(js|jsx)$/,
        include: /src/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // Images
      {
        test: /\.(png|jpe?g|gif)$/,
        include: /src/,
        exclude: /node_modules/,
        use: 'file-loader'
      },
      // CSS
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'singletonStyleTag'
            }
          },
          // CSS Modules
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]-[local]--[hash:base64:5]'
              },
              sourceMap: true
            }
          },
          // Post CSS Preset Env
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                postcssPresetEnv({
                  stage: 0,
                  browsers: 'last 4 versions'
                })
              ],
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  // Hot Loader
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    modules: [
      path.resolve(__dirname + '/src'),
      path.resolve(__dirname + '/node_modules')
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    compress: true,
    hot: true
  }
}
