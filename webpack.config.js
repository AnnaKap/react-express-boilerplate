
const path = require('path');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development'
module.exports = {
    mode:  'development',
    entry: [
        '@babel/polyfill', // enables async-await
      './client/index.js',
        
      ],
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: path.join(__dirname, 'public'),
      publicPath: '/',
      filename: 'bundle.js',
  },
    devServer: {
        // hot: true,
        historyApiFallback: true
    }
  };