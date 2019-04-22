let path = require('path'); //内置模块


/**
 * 单文件配置
 */
module.exports = {
	mode: 'development', //模式
	entry: './src/fileA.js', //入口
	output: {
		filename: 'fileA.js', //打包后的文件名
		path: path.resolve(__dirname, 'dist') //路径 - 必须是绝对路径
	}
}

/**
 * 多文件配置 - 打包成单个文件
 */
// module.exports = {
// 	mode: 'development',
// 	entry: ['./src/fileA.js', './src/fileB.js'],
// 	output: {
// 		filename: 'boundle.js',
// 		path: path.resolve(__dirname, 'dist')
// 	}
// }

/**
 * 多文件配置 - 打包成多个文件
 */
// module.exports = {
// 	mode: 'development',
// 	entry: {
// 		fileA: './src/fileA.js',
// 		fileB: './src/fileB.js'
// 	},
// 	output: {
// 		filename: '[name][hash].js',
// 		path: path.resolve(__dirname, 'dist')
// 	}
// }