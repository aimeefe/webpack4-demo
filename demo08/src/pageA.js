/**
 * 第一种方式 - 导入
 * step1 安装模块  - yarn add jquery
 * step2 需要在文件中引入使用 - import $ from 'jquery'
 */
// import $ from 'jquery'

// $(function () {
// 	alert(1)
// })



/**
 * 第二种方式 - 注入模块
 * step1 安装模块 - yarn add jquery
 * step2 在 webpack.common.config.js 中 通过 Webpack.ProvidePlugin 注入模块
 * step3 在文件中直接使用，不需要通过 import 等方式引入
 */
// $(function () {
// 	alert(2)
// })


/**
 * 第三种方式 - cdn
 * step1 在 html 文件中引入 jQuery cdn
 * step2 在文件中直接使用， 不需要通过import 等方式引入
 */

$(function () {
	alert(3)
})