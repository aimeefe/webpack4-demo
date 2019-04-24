# 自动生成 html 文件

## 安装

#### 安装 webpack

`yarn add webpack webpack-cli -D`

#### 安装 webpack-html-plugin

`yarn add webpack-html-plugin -D`

`webpack-html-plugin` 可以帮助我们生成`html`文件，并且自动引入编译好的`js`，可以简化`html`文件的创建。

## 使用

####基础配置

打开 `wwbpack.config.js`配置文件，进行如下配置：

```
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	// ...

	//插件管理
	plugins: [

		new HtmlWebpackPlugin({
			template: './src/index.html',  //模板
			filename: 'index.html'  //生成的 html 文件名称
		})
	]

	// ...
}
```

###### 运行

`npx webpack`

编译完成，这时候会在根目录下生成一个`dist`目录，里面自动生成了`html`文件，并且引入了已经编译好的`boudle.js`文件。

#### 优化配置

可以针对生成好的`html`文件做一些优化配置，让这个文件更轻量，配置如下：

```
//插件配置
  plugins: [
    new HtmlWebpackPlugin({

			//...

			//优化配置
			minify: {
				collapseWhitespace: true, //折叠空行
				removeAttributeQuotes: true  //删除双引号
			}
    })
  ]

```

这时候再次运行，就会发现生成的`html`文件体积变小了

#### 其他配置

- title: 用于生成的`HTML`文档的标题
- inject: 默认值`true`
	- true 或 body: 将脚本放在`body`底部。
	- head: 将脚本放在`head`元素中。
- favicon: 将给定的`favicon`路径添加到输出`HTML`
- meta: 允许注入`meta-tags`
- hash: 为所有`HTML`包含的`JS`脚本和`CSS`文件附加唯一的编译哈希，对缓存清除很有用。
