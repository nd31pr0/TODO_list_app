const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point of the application
  entry: './src/js/index.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean the output directory before emit
  },

  // Loaders and rules
  module: {
    rules: [
      // CSS: Use style-loader and css-loader to process CSS files
      {
        test: /\.js$/,
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // Plugins
  plugins: [
    // HtmlWebpackPlugin to generate the output HTML file from the template
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  // Development server configuration (optional, if you decide to use webpack-dev-server)
  devServer: {
    static: './dist',
    open: true,
  },

  // Mode
  // Set to 'development' or 'production' depending on your needs
  mode: 'development',
};
