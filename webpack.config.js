var webpack           = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = module.exports = {

  entry: './src/js/main.js',

  output: {
    filename: './build/bundle.js',
    library: 'appChat'
  },

  module: {
      rules: [
        {
          test : /\.(png|jpg|svg)$/,
          use : "file-loader?name=[path][name].[ext]"
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract([
            {
              loader: 'css-loader',
              options: {
                minimize: 1,
                importLoaders: 1
              }
            },
            'postcss-loader'
          ])
        },
        {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=./src/fonts/[hash].[ext]'
        },
        {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=./src/fonts/[hash].[ext]'
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=./src/fonts/[hash].[ext]'
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader?name=./src/fonts/[hash].[ext]'
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=./src/fonts/[hash].[ext]'
        }
       
    ]
  },
    plugins: [
        new ExtractTextPlugin("build/bundle.css")
    ],

    devtool: "source-map",

    watch: true,

    watchOptions: {
      aggragateTimeout: 50
    }

};