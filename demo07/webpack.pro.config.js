let path = require('path')
let merge = require('webpack-merge')
let common = require('./webpack.common.config')

module.exports = merge(common, {
	mode: 'production'
})