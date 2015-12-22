var path = require('path'),
    clientPath = path.join(__dirname, 'client'),
    appPath = path.join(clientPath, 'app'),
    appFile = 'app.js',
    distPath = path.join(__dirname, 'dist'),
    distFile = 'bundle.js'
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    pkg = require('./package.json');

module.exports = {
  devtool: 'sourcemap',
  entry: path.join(appPath, appFile),
  output: {
    path: distPath,
    filename: distFile
  },
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.css$/, loader: 'style!css' },
       { test: /\.scss$/, loader: 'style!css!sass' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(clientPath, 'index.html'),
        pkg: pkg,
        inject: 'body'
    })
  ],
  devServer: {
    proxy: {
      '/api*': {
        target: 'http://demo0067252.mockable.io/test',
        secure: false
      }
    }
  }
};
