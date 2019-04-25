let path = require('path')
let merge = require('webpack-merge')
let common = require('./webpack.common.config')

// 合并两个 webpack 配置文件 module.exports = merge(A, B)
module.exports = merge(common, {
	mode: 'development',

	// 开发服务配置
	devServer: {
		port: 3000,
		open: true,
		contentBase: path.join(__dirname, 'dist')
	}
})