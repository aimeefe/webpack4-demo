# webpack4 使用第三方 JavaScript 库

[webpack 初始配置参考](https://github.com/aimeefe/webpack4-demo/tree/master/demo06)


项目中我们经常遇到使用第三方库的情况，比如`lodash`，`jquery`等，使用方式一般有三种：

- CDN 引入
- NPM 安装
- 本地引用

现在以`jquery`为例，来说一下是具体怎么使用的：

### 第一种：CDN 引入

###### 第一步：在`html`中通过`script`标签引入`jquery`

```
<script src="https://cdn.bootcss.com/jquery/3.4.0/jquery.min.js"></script>
```

###### 第二步：打开`webpack.common.config.js`配置文件，进行如下配置：

```
module.exports = {
  //...
  
  //外部扩展 - 不打包外部依赖 jquery
  externals: {
    jquery: 'jQuery'
  }
}
```

`externals` 可以配置哪些是外部依赖，编译的时候会从输出的`boudle`中排除这些依赖，以免造成文件过大。

###### 使用

```
$(function () { 
  alert('hello JQ !')
})
```

### 第二种 NPM 安装

###### 第一步：安装`jquery`

```
yarn add jquery
```

###### 使用：在文件中通过`import`等方式导入`jquery`

```
import $ from 'jQuery'

$(function () {
  alert('hello JQ !')
})
```

###### 如果不想在文件中通过`import`等方式导入`jquery`，可以在`webpack.common.config.js`文件中通过`webpack.ProvidePlugin()`注入模块，如下：

```
let Webpack = require('webpack')

module.exports = {
  // ...
  
  plugins: [
    //模块注入
    new Webpack.ProvidePlugin({
      '$': 'jQuery' //把jquery变成 $ 注入到模块
    })
  ]
}
```

###### 使用

```
$(function () {
  alert('hello JQ !')
})
```

### 第三种 本地引用

###### 第一步：在项目目录中，创建`jquery`文件，打开`webpack.common.config.js`设置别名、注入模块

```
module.exports = {
  // ...
  
  // 解析模块
  resolve: {
  
    //配置别名 - $精准匹配
    alias: {
     'jQuery$': path.resolve(__dirname, "src/lib/jquery/jquery.min.js")
    }
  },
  
  plugins: [
  
    //模块注入
    new Webpack.ProvidePlugin({
      '$': 'jQuery' //把jquery变成 $ 注入到模块
    })
  ]
}
```

###### 使用

```
$(function () {
  alert('hello JQ !')
})
```


 





