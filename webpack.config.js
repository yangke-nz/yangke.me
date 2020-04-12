const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options:{
          minimize: false,
        }
      },
      {
          test: /\.ttf$/,
          use: 'url-loader?limit=10000&mimetype=application/octet-stream&name=/fonts/[name].[ext]'
      },
      {
          test: /\.(woff|woff2)$/,
          use: 'url-loader?limit=10000&mimetype=application/font-woff&name=/fonts/[name].[ext]'
      },
      {
          test: /\.eot$/, 
          use: 'file-loader?name=/fonts/[name].[ext]'
      },
      {
          test: /\.svg$/, 
          use: 'url-loader?limit=10000&mimetype=image/svg+xml&name=/fonts/[name].[ext]'
      },
      {
          test: /\.(png|jp(e*)g|gif)$/,  
          use: [{
              loader: 'url-loader',
              options: { 
                  limit: 100*1000,
                  name: 'images/[name].[ext]'
              } 
          }]
      }
    ]
  },
  plugins: [
      new webpack.ProvidePlugin({
          jQuery: 'jquery',
          $: 'jquery',
          jquery: 'jquery'}),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template:  'src/index.html'
      })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    writeToDisk: true,
    open: true,
  }
};