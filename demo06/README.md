# webpack4 webpack配置文件的区分与合并

我们`webpack`的配置在不同环境下会有很多差别，比如开发环境需要热更新，生产环境需要压缩代码等。为了方便，我们可以把它们按环境加以区分，方法如下：


### 第一步：创建 webpack 配置文件

根目录下新建 3 个`webpack`配置文件:

- webpack.dev.config.js：开发环境`[developent]`配置文件，存放开发时需要的配置
- webpack.pro.config.js：生产环境`[production]`配置文件，存放生产环境需要的配置
- webpack.common.config.js：公用配置文件，存放正式环境和开发环境同时需要的配置


### 第二步：配置脚本命令

打开`package.json`文件，配置不同环境下的命令：

```
"scripts": {
   "dev": "webpack-dev-server --config webpack.dev.config.js",   //开发环境
   "build": "webpack --config webpack.pro.config.js"  //生产环境
 }
```


### 第三步：安装依赖

本例中用到了以下依赖：

- 安装webpack：`webpack` 、`webpack-cli`
- 开发环境配置：开发服务配置 - `webpack-dev-server`
- 公共环境配置：自动生成 html 文件 - `html-webpack-plugin`，清理 dist 目录 - `clean-webpack-plugin`

`webpack.common.config.js`的文件需要合并到其他两个配置文件中，可以用`webpack-merge`依赖来帮我们完成合并。

以上，

```
yarn init -y
yarn add webpack webpack-cli webpack-dev-server html-webpack-plugin clean-webpack-plugin webpack-merge -D
```


### 第四步：配置 webpack 的配置文件

###### 配置 webpack.common.config.js：

```
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/pageA.js',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [

    //自动生成 html
    new HtmlWebpackPlugin({
      template: './src/pageA.html',
      filename: 'index.html'
    }),

    //清空 dist 目录
    new CleanWebpackPlugin()
  ]
}
```

###### 配置 webpack.dev.config.js 文件：

```
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
```

###### 配置 webpack.pro.config.js :

```
let merge = require('webpack-merge')
let common = require('./webpack.common.config')

module.exports = merge(common, {
  mode: 'production'

  //TODO MORE ...
})
```


### 运行命令

- 开发环境：```npm run dev```
- 生产环境：```npm run build```

不同环境下的`webpack`配置文件思路大概就是这样了，可以根据需求在不同的配置文件下完成对项目的配置。
