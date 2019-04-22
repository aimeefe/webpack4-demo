let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',

	//开发服务器配置
	devServer: {
		port: 3000,  //指定开启的端口
		progress: true,  //进度条
		contentBase: 'dist', //指定目录运行服务
		open: true  //自动打开浏览器页面
	},
	entry: './src/pageA.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	// webpack 插件配置
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html', //模板
			filename: 'index.html',  //打包后的 html 名称

			//压缩配置
			minify: {
				removeAttributeQuotes: true, //删除双引号
				collapseWhitespace: true, //折叠成一行
			},
			hash: true //生成 hash
		})
	]
}