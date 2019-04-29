# webpack4 定义环境变量

在项目中，开发环境和生产环境很多配置都是不一样的，比如请求接口的地址。

所以我们需要环境标识来帮助区分当前所处的环境，并做出相应的调整，以接口文件举例来说，用法类似这样：

```
//server.js 文件

if (process.env.NODE_ENV === 'production') {
  console.log('现在是生产环境了，做点啥吧...');
} else {
  console.log('开发环境...');
}
```

其中，用了`process.env.NODE_ENV`来帮助我们区分环境，但是这个值需要我们来配置并不是默认就存在了的，早期`webpack`可以通过`webpack.DefinePlugin()`来配置环境变量，像这样：

```
new Webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("production")
  }
})
```

而在`webpack4`中，简化了相关配置，我们只需设置`mode`，`process.env.NODE_ENV`就会自动同步`mode`配置的值，如下：

```
// webpack.dev.config.js
module.exports = merge(common, {
  //process.env.NODE_ENV === 'development'
  mode: 'development' 
})

// webpack.pro.config.js
module.exports = merge(common, {
  //process.env.NODE_ENV === 'production'
  mode: ''production
})
```

不光如此，`mode`来帮我们做了很多默认配置，像是`production`模式下自动压缩代码等等，具体文档都有写，传送门：[mode 模式](https://webpack.docschina.org/concepts/mode/#src/components/Sidebar/Sidebar.jsx)



