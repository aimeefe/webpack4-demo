let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: './src/pageA.js',
	output: {
		filename: 'boudle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {

		// js babel转码配置
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						'@babel/preset-env'
					]
				}
			}
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/pageA.html',
			filename: 'index.html'
		}),
		new cleanWebpackPlugin()
	]
}