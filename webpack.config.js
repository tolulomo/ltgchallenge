const runTaskType = process.env.npm_lifecycle_event;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fse = require('fs-extra');
const path = require('path')

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer'),
  require("postcss-sass-color-functions")
];

let pages = fse.readdirSync('./app').filter(file => file.endsWith('.html')).map(pages => 
  new HtmlWebpackPlugin({
    filename: pages,
    template: `./app/${pages}`
  })
);

let cssConfig = {
  test: /\.css$/i,
  //css-loader should not manage images so we'll be using css-loader?url=false instead of css-loader
  use: ['css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
}

const config = {
  entry: './app/assets/scripts/App.js',
  plugins: pages,
  module: {
    rules: [
      cssConfig
    ]
  }
}

// Testing Enviroment Configuration
if(runTaskType == "devServer"){
  cssConfig.use.unshift('style-loader');
  config.output = {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  };
  config.devServer = {
    // Support hot reload for html files
    before: (app, server) => {
      server._watch('./app/**/*.html')
    },

    // Locate app (source-code) directory
    contentBase: path.join(__dirname, 'app'),
    hot: true,
    port: 3300,
    host: '0.0.0.0' //This will allow devices on the same network to access this webpack
  };
  config.mode = "development";
}

// Production Environment Configuration
if(runTaskType == "build"){
  config.module.rules.push({
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  })
  cssConfig.use.unshift(MiniCssExtractPlugin.loader);
  postCSSPlugins.push(require('cssnano'));
  config.output = {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'docs')
  };
  config.mode = "production";

  // Seperate our JS code from vendor JS code (e.g. loadash, lazysizes, etc)
  config.optimization = {
    splitChunks: {chunks: "all"}  
  };

  // Clear existing files before bundling, extract css files and add hashes, and create a class function to copy images
  config.plugins.push(new CleanWebpackPlugin(), new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}));
}

module.exports = config;