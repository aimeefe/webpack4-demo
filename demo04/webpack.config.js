let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
	mode: 'development',
	entry: './src/pageA.js',
	output: {
		filename: 'boundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [

		//清理 dist 目录 - 这样保证了在每次编译生成的目录都是新的目录，防止编译目录混乱
		new CleanWebpackPlugin(),

		//自动生成 html
		new HtmlWebpackPlugin({
			template: './src/pageA.html',  //模板
			filename: 'index.html' //生成的 html 文件名称
		})
	]
}