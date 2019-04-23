let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin'); //抽离CSS
let OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin'); //压缩css

module.exports = {
	mode: 'development',

	//开发服务器配置
	devServer: {
		port: 3000, //指定开启的端口
		progress: true, //进度条
		contentBase: 'dist', //指定目录运行服务
		open: true //自动打开浏览器页面
	},
	entry: './src/pageA.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	//模块配置
	module: {
		rules: [{
			test: /\.(css|scss)$/,
			use: [

				//将style-loader 改为 MiniCssExtractPlugin.loader，表示该类型的文件会被抽离成一个独立 css 文件，link 到 html 中。
				MiniCssExtractPlugin.loader,
				'css-loader',
				{
					loader: 'postcss-loader',
					options: {
						plugins: [
							require('autoprefixer')({
								browsers: ['last 5 versions']
							})
						]
					}
				},
				'sass-loader'
			]
		}, ]
	},

	// webpack 插件配置
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html', //模板
			filename: 'index.html', //打包后的 html 名称

			//压缩配置
			minify: {
				removeAttributeQuotes: true, //删除双引号
				collapseWhitespace: true, //折叠成一行
			},
			hash: true //生成 hash
		}),

		//抽离css
		new MiniCssExtractPlugin({
			filename: 'css/[name][hash].css' //抽离出的css文件存放在css目录下
			// filename: '[name].css' //抽离出的css文件名称
		})
	],

	//优化项配置
	optimization: {
		minimizer: [
			new OptimizeCssPlugin() //压缩css
		]
	}
}