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

```
yarn init -y
yarn add webpack webpack-cli webpack-merge -D
```

- `webpack.common.config.js`的公共文件需要合并到其他两个配置文件中，可以用`webpack-merge`来帮我们完成合并。


### 第四步：配置 webpack 的配置文件

###### 配置 webpack.common.config.js：

```
// ...

module.exports = {
 // TODO 一些公共配置
}
```

###### 配置 webpack.dev.config.js 文件：

```
// ...
let merge = require('webpack-merge')
let common = require('./webpack.common.config')

// 合并两个 webpack 配置文件 module.exports = merge(A, B)
module.exports = merge(common, {
  mode: 'development',

  // TODO 一些开发环境需要的配置
})
```

###### 配置 webpack.pro.config.js :

```
// ...
let merge = require('webpack-merge')
let common = require('./webpack.common.config')

module.exports = merge(common, {
  mode: 'production'

  //TODO 一些生产环境需要的配置
})
```


### 运行命令

- 开发环境：```npm run dev```
- 生产环境：```npm run build```

不同环境下的`webpack`配置文件思路大概就是这样了，可以根据需求在不同的配置文件下完成对项目的配置。
