# webpack4 图片处理及优化

`webpack`中，图片作为模块也是需要被处理才能在项目中正确使用的，在`webpack`中，经常会用以下两种方式来使用图片：

- 通过 src 引入

```
<img src="./assets/images/icon.png" width="30"/>
```
- 通过 url 引入

```
background: url('../images/bg.jpg') no-repeat left top;
```
针对以上两种形式，`webpack`中处理如下:

### 安装依赖

```
yarn add file-loader html-withimg-loader url-loader -D
```

- file-loader：将文件发送到输出文件夹，并返回（相对）URL

- url-loader：像`file loader`一样工作，但如果文件小于限制，可以转成`base64`
  - 注意：`url-loader`依赖于`file-loader`，在使用前要确保`file-loader`被安装，否则将无法工作！

- image-webpack-loader：优化图片（压缩等）

### 使用

配置`webpack.common.config.js`文件：

```
module.exports = {
  // ...
  module: {
    rules: [
    
      // 通过 src 引入处理
      {
        test: /\.html$/,
        use: 'html-withimg-loader'
      },
      
      // 通过 url 引入处理
      {
        test: /\.(png|svg|jpg|gif|jpeg|ico)$/,
        use: [{
            loader: 'url-loader',
            options: {
              limit: 10000, // 小于 10kb 的图片会被转成 base64
              name: '[name].[hash:5].[ext]', //图片名称
              outputPath: 'images' //图片将被放在 dist 目录下 images 文件夹下
            }
          },

          //优化图片
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  }
}
```



