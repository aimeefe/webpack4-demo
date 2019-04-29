let path = require('path')
let merge = require('webpack-merge')
let common = require('./webpack.common.config')

// 合并两个 webpack 配置文件 module.exports = merge(A, B)
module.exports = merge(common, {

	/**
	 * mode: 模式，告知 webpack 使用相应环境的内置优化。
	 * development: 开发模式
	 * production: 生产模式
	 * 设置 mode 时， process.env.NODE_ENV 的值会跟 mode 的值同步，并自动提供一些对应环境的配置
	 */
	mode: 'development',

	// 开发服务配置
	devServer: {
		port: 3000,
		open: true,
		contentBase: path.join(__dirname, 'dist')
	},


})