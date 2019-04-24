let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  //开发服务器配置
  devServer: {

    //指定 dist 目录运行服务
    contentBase: path.join(__dirname, 'dist'),

    //端口配置
    port: 3000,

     //自动打开浏览器
    open: true,

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
  entry: './src/pageA.js',
  output: {
    filename: 'boudle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [

    //自动生成 html
    new HtmlWebpackPlugin({
      template: './src/pageA.html',
      filename: 'index.html'
    })
  ]
}