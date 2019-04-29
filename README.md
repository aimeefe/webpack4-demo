# webpack4 demo

### 快速入门

- [打包 JS 文件](https://github.com/aimeefe/wepack4-demo/tree/master/demo01)

### 管理输出

- [自动生成 html 文件](https://github.com/aimeefe/wepack4-demo/tree/master/demo02)
- [清理 dist 目录](https://github.com/aimeefe/wepack4-demo/tree/master/demo04)

### 开发辅助
- [webpack-dev-server 开发服务](https://github.com/aimeefe/wepack4-demo/tree/master/demo05)
- ESlint 校验代码规范


### 管理资源

- [样式处理 - css、less、scss、Autoprefixer](https://github.com/aimeefe/wepack4-demo/tree/master/demo03)
- [babel 转化 es6 语法](https://github.com/aimeefe/wepack4-demo/tree/master/demo07)
- [图片处理及优化](https://github.com/aimeefe/wepack4-demo/tree/master/demo09)
- [使用第三方 JavaScript 库](https://github.com/aimeefe/wepack4-demo/tree/master/demo08)

### 环境
- 定义环境变量
- [区分不同环境的 webpack 配置文件](https://github.com/aimeefe/wepack4-demo/tree/master/demo06)
### 基本概念
### 常用loader

`webpack`只能理解`JavaScript`和`JSON`文件。`loader`让`webpack`能够去处理其他类型的文件，并将它们转换为有效模块，以供应用程序使用，以及被添加到依赖图中。

###### 资源相关

- [style-loader](https://webpack.docschina.org/loaders/style-loader)：将模块的导出作为样式添加到`DOM`中
- [css-loader](https://webpack.docschina.org/loaders/css-loader)：解析`CSS`文件后，使用`import`加载，并且返回`CSS`代码
- [less-loader](https://webpack.docschina.org/loaders/less-loader)：加载和转译`LESS`文件
- [sass-loader](https://webpack.docschina.org/loaders/sass-loader)：加载和转译`SASS/SCSS`文件
- [postcss-loader](https://webpack.docschina.org/loaders/postcss-loader)：使用`PostCSS`加载和转译`CSS`文件

- [babel-loader](https://webpack.docschina.org/loaders/babel-loader)：加载`ES6+`代码，然后使用`Babel`转译为`ES5`
- [file-loader](https://webpack.docschina.org/loaders/file-loader)：将文件发送到输出文件夹，并返回（相对）URL

- [url-loader](https://webpack.docschina.org/loaders/url-loader)：像`file loader`一样工作，但如果文件小于限制，可以转成`base64`
- [image-webpack-loader](https://www.npmjs.com/package/image-webpack-loader)：优化图片

### 常用插件

###### 模板相关
- [html-webpack-plugin](https://webpack.docschina.org/plugins/html-webpack-plugin)：简单创建`HTML`文件，用于服务器访问
- clean-webpack-plugin：清理编译目录

