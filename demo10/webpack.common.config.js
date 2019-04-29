let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: './src/pageA.js',
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [

		//自动生成 html
		new HtmlWebpackPlugin({
			template: './src/pageA.html',
			filename: 'index.html'
		}),

		//清空 dist 目录
		new CleanWebpackPlugin()
	]
}