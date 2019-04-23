# webpack4 样式处理

## 初始配置传送门

在开始处理`css`之前，需要做一些初始配置，[传送门](https://github.com/aimeefe/wepack4-demo/tree/master/demo02)

## css 配置

### 安装

```yarn add css-loader style-loader - D```

- [loader](https://www.webpackjs.com/concepts/#loader)：`loader`可以将所有类型的文件转换为`webpack`能够处理的有效模块，执行顺序：从右到左，从下到上
- [css-loader](https://www.webpackjs.com/loaders/css-loader/):  解析`CSS`文件后，使用`import`加载，并且返回`CSS`代码
- [style-loader](https://www.webpackjs.com/loaders/style-loader/): 将模块的导出作为样式添加到`DOM`中


### 使用

打开`webpack.config.js`文件，进行以下配置:

```
// ...
module.exports = {
  // ...

  //模块配置
  module: {
    rules: [
      { test: /\.css/, use: ['style-loader', 'css-loader']}
    ]
  }

  // ...
}
```

## less 配置

### 安装

```yarn add less less-loader -D```

- [less-loader](https://webpack.docschina.org/loaders/less-loader/#src/components/Sidebar/Sidebar.jsx): 可以把`less`编译成`css`

### 使用

```
// ...
module.exports = {
  // ...

  //模块配置
  module: {
    rules: [
      {test: /\.(css|less)$/, use: ['style-loader', 'css-loader', 'less-loader']},
    ]
  }

  // ...
}
```

## scss 配置

### 安装

```yarn add node-sass sass-loader -D```

- [sass-loader](https://webpack.docschina.org/loaders/sass-loader/#src/components/Sidebar/Sidebar.jsx): 可以把`sass/scss`编译成`css`

### 使用

```
// ...
module.exports = {
  // ...

  //模块配置
  module: {
    rules: [
      {test: /\.(css|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader']}
    ]
  }

  // ...
}
```


## 给样式加浏览器前缀

我们在写样式的时候，遇到一些语法需要加浏览器前缀去兼容，每次写`-webkit-`之类的前缀很麻烦，`webpack`可以自动给样式加上这种前缀，如下：

### 安装

```yarn add postcss-loader autoprefixer -D```

### 使用

```
// ...

module.exports = {
  // ...

  //模块配置
  module: {
    rules: [{
      test: /\.(css|scss)$/,
      use: [
        'style-loader',
        'css-loader',
        {
	  loader: 'postcss-loader',
	  options: {
	    plugins: [
              require('autoprefixer')({browsers: ['last 5 versions']})
	    ]
	  }
        },
        'sass-loader'
      ]
    }]
  },

  // ...
}

```

## 抽离并压缩 css

### 安装

```yarn add mini-css-extract-plugin optimize-css-assets-webpack-plugin -D```

- [MiniCssExtractPlugin](https://webpack.docschina.org/plugins/mini-css-extract-plugin/#src/components/Sidebar/Sidebar.jsx)：将CSS提取为独立的文件的插件，对每个包含css的js文件都会创建一个CSS文件，支持按需加载css和sourceMap

- optimize-css-assets-webpack-plugin：压缩 `css` 文件

### 使用

配置`webpack.config.js`文件：

```
let MiniCssExtractPlugin = require('mini-css-extract-plugin'); //抽离CSS
let OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin'); //压缩css


module.exports = {
  // ...

  //模块配置
  module: {
    rules: [{
      test: /\.(css|scss)$/,
      use: [

      //将style-loader 改为 MiniCssExtractPlugin.loader，表示该类型的文件会被抽离成一个独立 css 文件，link 到 html 中。
      MiniCssExtractPlugin.loader,
        'css-loader',
        {
	  loader: 'postcss-loader',
	  options: {
	    plugins: [
	      require('autoprefixer')({browsers: ['last 5 versions']})
	    ]
	  }
        },
        'sass-loader'
      ]
    }]
  },

  // webpack 插件配置
  plugins: [

    //抽离css
    new MiniCssExtractPlugin({
      filename: 'css/[name][hash].css'  //抽离出的css文件存放在css目录下
      // filename: '[name].css' //抽离出的css文件名称
    })
  ],

  //优化项配置
  optimization: {
    minimizer: [
      new OptimizeCssPlugin()  //压缩css
    ]
  }
}
```
