const path = require('path')

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  // require('postcss-hexrgba'),
  require('autoprefixer'),
  require("postcss-sass-color-functions")
]

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  },
  devServer: {
    // Support hot reload for html files
    before: (app, server) => {
      server._watch('./app/**/*.html')
    },

    // Locate app (source-code) directory
    contentBase: path.join(__dirname, 'app'),
    hot: true,
    port: 3300,
    host: '0.0.0.0' //This will allow devices on the same network to access this webpack
  },
  mode: 'development',
  // watch: true,
  module: {
    rules: [
      {
        test: /\.css$/i,
        //css-loader
        use: ['style-loader', 'css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
      }
    ]
  }
}