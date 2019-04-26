/**
 * 第一种方式 - 导入
 * step1 安装模块  - yarn add jquery
 * step2 需要在文件中引入使用 - import $ from 'jquery'
 */
// import $ from 'jQuery'
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
 * 第三种方式 - CDN
 * step1 在 html 文件中引入 jQuery cdn
 * step2 在 webpack.common.js 中 通过 externals 设置 jquery 为外部依赖，避免 jquery 被打包进去
 * step3 在文件中直接使用， 不需要通过import 等方式引入
 */
$(function () {
	alert(3)
})


/**
 * 第四种 - 本地
 * step1 在项目目录下创建相关 js 库文件
 * step2 在 webpack.common.js中 通过 resolve.alias 配置别名， 并通过 Webpack.ProvidePlugin 注入模块
 * step3 在文件中直接使用， 不需要通过import 等方式引入
 */
// $(function () {
// 	alert(4)
// })