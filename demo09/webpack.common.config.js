let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/pageA.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },

      // 图片处理
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pageA.html',
      filename: 'index.html'
    }),

    new CleanWebpackPlugin()
  ]
}