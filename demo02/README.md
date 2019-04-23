# webpack4 配置开发服务（webpack-dev-server）& 自动生成 HTML

## 安装依赖

```
yarn init -y

yarn add webpack webpack-cli webpack-dev-server html-webpack-plugin -D
```

- 插件 [webpack-dev-server](https://webpack.docschina.org/guides/development/#%E4%BD%BF%E7%94%A8-webpack-dev-server)：web server & live reloading(实时重新加载) 
- 插件 [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin#configuration)：HTML文件的创建

## 本地服务配置

打开 webpack.config.js 文件，进行如下配置：

```
let path = require('path')

module.exports = {
  //...

  //开发服务器配置
  devServer: {
    port: 3000,  //指定开启的端口
    progress: true,  //进度条
    contentBase: 'dist', //指定目录运行服务
    open: true  //自动打开浏览器页面
  },

  //...
}

```
## HTML 配置

开发的时候，我们想要编译后的目录自动生成且已引入编译好`js`的`html`文件，而不是麻烦的手动创建和引入，这种方式可以通过插件`html-webpack-plugin`实现，如下：

```
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ...

  // webpack 插件配置
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', //模板
      filename: 'index.html',  //打包后的 html 名称

      //压缩配置
      minify: {
        removeAttributeQuotes: true, //删除双引号
        collapseWhitespace: true, //折叠成一行
      },
      hash: true //生成 hash
    })
  ]

  // ...
}
```

## 启动项目

以上，已经完成了开发服务和自动生成打包后`html`的配置，现在可以通过端口或`ip`来启动项目了，在启动项目之前，先来配置下`package.json`文件，如下：

打开`package.json`文件，进行如下配置：

```
{
  // ...

  "scripts": {
    "dev": "webpack-dev-server",
    "build": "webpack --config webpack.config.js"
  }

  // ...
}

```

现在开始运行命令：

```npm run dev```

项目启动！

## 总结

### 开发服务 webpack-dev-server

插件`webpack-dev-server`可以帮我们开启一个本地服务，使得我们可以在开发环境下通过`localhost`或`ip`来直接访问我们的项目，而且每次文件有改动的时候，它会自动帮我们编译生成最新的文件，极高的提升我们的开发效率。

我们可以在`webpack.config.js`配置文件中，通过在`devServer`对象中设置相应的属性来实现其端口号、运行目录等一系列的配置。

### html插件 html-webpack-plugin

插件`html-webpack-plugin`可以帮我们自动在编译目录中生成`html`文件，并且会自动引入对应的`js`文件。

我们在发布到生产环境前，需要对编译好的`html`做一些优化处理，这个插件可以帮我们处理像压缩体积、避免缓存等优化。
