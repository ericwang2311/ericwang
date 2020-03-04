const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
		contentBase: './docs'
	},
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
  },
  mode: 'development',
  devtool: 'inline-source-map'
};