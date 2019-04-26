# webpack-dev-server 开发服务配置 & proxy 代理配置

`webpack`中可以使用`watch`来监测文件的改动，解决了每次修改都需要手动编译的麻烦，使用方法如下：


打开`package.json`文件，配置`npm scripts`：

```
"scripts": {
  "watch": "npx webpack --watch"
 }
```
运行：

```npm run watch```

这种方法虽然可以监测到文件的改动并自己编译，但是每次都需要我们手动来刷新页面才能看到文件的改变，那么有没有不刷新页面就能看到文件的改动呢？`webpack-dev-server`就可以实时监测并自动刷新页面！

# webpack-dev-server

`webpack-dev-server` 为我们提供了一个简单的`web`服务器，并且能够实时重新加载。

在开始之前，先要做下基本配置：[自动生成 html](https://github.com/aimeefe/wepack4-demo/tree/master/demo02)

## 安装依赖

```
yarn add webpack-dev-server -D
```
## 使用

### 基本使用

打开`webpack.config.js`文件，做如下配置：

```
//...

module.exports = {
  //...
  
  //开发服务器配置
  devServer: {

    //指定 dist 目录运行服务
    contentBase: path.join(__dirname, 'dist'),

    //端口配置
    port: 3000,

     //自动打开浏览器
    open: true,
  },
  
  //...
}
```

运行：

```
npx webpack-dev-server
```

这样就可以生成一个开发服务器，并且会自动帮我们打开一个本地服务地址`http://localhost:3000/`，我们可以把`npx webpack-dev-server`设置到`npm scripts`里，方便使用，如下：

打开`package.josn`文件，做如下配置：

```
{
  //...
  
  "scripts": {
    "start": "npx webpack-dev-server"
  }
}
```
运行： 

```
npm run start
```
即可开启本地服务。

### proxy 设置代理

在日常开发中，经常会遇到前端请求后端接口跨域的情况，我们可以通过`proxy`设置代理来解决这个问题，设置方法如下：

配置`webpack.config.js`文件：

```
//开发服务器配置
  devServer: {
    //...
    //设置代理【可以解决请求接口跨域的问题】
    proxy: {

      //访问 `/api`开头的请求，会自动跳转到 `target`的地址
      "/api": {
        target: "http://so.news.cn",

        //如果不希望`api`被传递过去，可以通过`pathRewrite`重写
        pathRewrite: {
          // "^/api": "/v2/api"
          "^/api": "getNews?keyword=dd&curPage=1&sortField=0&searchFields=1&lang=cn"
        }
      }
    },
  },
```

比如，当前端发起以`/api`开头的请求时，会自动代理到`proxy`配置的地址中，这样可以避免产生跨域的问题。
 




