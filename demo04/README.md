# webpack4 清理 dist 目录

## 初始配置

开始之前，先进行下初始配置 - [自动生成 html 文件](https://github.com/aimeefe/wepack4-demo/tree/master/demo02)

## 安装依赖

```
yarn add clean-webpack-plugin -D
```
编译时，`webpack`会放编译好的文件放在我们设置的`dist`目录下，时间久了或者改动大了`dist`目录会显得很杂乱，`clean-webpack-plugin`可以帮我们在每次构建前先把`dist`目录清理干净，然后再放入新的文件。

## 使用

打开`webpack.config.js`文件，进行如下配置：

```
// ...
let CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
  // ...
  
  plugins: [
    //清理 dist 目录
    new CleanWebpackPlugin(),
    
    // ...
  ]
}
```

现在运行命令 `npx webpack` ，检查`dist`目录，该目录下只会看到构建后生成的文件，而没有旧文件了。
