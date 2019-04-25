# babel 转化 es6 语法 

虽然现代的浏览器已经兼容了大多数`ES6`的语法了，但是一些低版本的浏览器还不行，需要我们借助`babel`将`ES6+`的语法转成这些低版本可以识别的`es5`语法

## 安装依赖

```
yarn add babel-loader @babel/core @babel/preset-env -D
```

## 使用

打开 `webpack.config.js` 进行配置：

```
module.exports = {
  // ...
  module: {
  
  // js babel转码配置
  rules: [{
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env'
        ]
      }
    }
  }]
}
```

即可！
