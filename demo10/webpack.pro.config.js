let merge = require('webpack-merge')
let Webpack = require('webpack')
let common = require('./webpack.common.config')

module.exports = merge(common, {
	/**
	 * mode: 模式，告知 webpack 使用相应环境的内置优化。
	 * development: 开发模式
	 * production: 生产模式
	 * 设置 mode 时， process.env.NODE_ENV 的值会跟 mode 的值同步，并自动提供一些对应环境的配置
	 */
	mode: 'production'
})