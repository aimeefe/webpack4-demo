let path = require('path')
let merge = require('webpack-merge')
let common = require('./webpack.common.config')

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		port: 3000,
		open: true,
		contentBase: path.join(__dirname, 'dist')
	}
})