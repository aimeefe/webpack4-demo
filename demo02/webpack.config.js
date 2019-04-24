let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')  //自动生成 html 并注入脚本

module.exports = {
	mode: 'development',
	entry: './src/pageA.js',
	output: {
		filename: 'boudle.js',
		path: path.resolve(__dirname, 'dist')
	},

	//插件管理
	plugins: [

		new HtmlWebpackPlugin({
			template: './src/index.html',  //模板
			filename: 'index.html',  //生成的 html 文件名称

			//优化配置
			minify: {
				collapseWhitespace: true, //折叠空行
				removeAttributeQuotes: true  //删除双引号
			},

			hash: true,  //为脚本加 hash ，防止文件缓存
			inject: 'head',  //脚本放头部
		})
	]
}