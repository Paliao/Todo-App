const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

moduele.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: './app.js'
  },
  devServer: {
    port: 8000,
    contentBase: './public',
  },
  resolve: {
    extensions:['', '.js', '.jsx'],
    alias: {
      modules: __dirname + '/node_modules'
    }
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ],
  modules: {
    loaders: [{
      test: /.js[x]?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
        plugin: ['transform-object-rest-spread']
      }
    }, { 
        test: /\.css$/,
        loader: ExtractTextPlugin.exctract('style-loader', 'css-loader')
      }, {
        test:/\.woff|.woff2|.tff|.eot|.svg*.*$/,
        loader: 'file'
    }]
  }
}