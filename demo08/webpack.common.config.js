let path = require('path')
let Webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
	entry: './src/pageA.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {


		rules: [
			//babel 转码 es6
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env'
						]
					}
				},
				//只对项目根目录下的 src 目录中的文件采用 babel-loader
				include: path.resolve(__dirname, 'src')
			},

			// css
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},

	//外部扩展 - 不打包外部依赖 jquery
	// externals: {
	// 	jquery: 'jQuery'
	// },
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/pageA.html',
			filename: 'index.html'
		}),
		new CleanWebpackPlugin(),

		//模块注入
		// new Webpack.ProvidePlugin({
		// 	'$': 'jQuery' //把jquery变成 $ 注入到模块
		// })
	]
}