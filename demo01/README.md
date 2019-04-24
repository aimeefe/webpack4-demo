# webpack4 打包 JS 文件

## 安装 webpack

```
yarn init -y

yarn add webpack webpack-cli -D

```
## 配置 webpack.config.js

### 单文件配置

```
//webpack.config.js 文件
let path = require('path'); //内置模块

module.exports = {
	// ...
	entry: './src/fileA.js', //入口
	output: {
		filename: 'fileA.js', //打包后的文件名
		path: path.resolve(__dirname, 'dist') //路径 - 必须是绝对路径
	}
}
```

### 多文件配置
#### 打包成单个文件

```
//webpack.config.js 文件
let path = require('path'); //内置模块

module.exports = {
  // ...
	entry: ['./src/fileA.js', './src/fileB.js'],
	output: {
		filename: 'boundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}
```

#### 打包成多个文件

```
//webpack.config.js 文件
let path = require('path'); //内置模块

module.exports = {
	//...
	entry: {
		fileA: './src/fileA.js',
		fileB: './src/fileB.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
}
```

## 编译

```
npx webpack
```

## 查看结果

创建`html`文件，通过`script`标签引入打包后的`js`文件进行查看（后面会说到如何动态生成`html`文件）


## 总结

`webpack`打包`js`文件时，入口和出口的配置是必不可少的，具体用法如下：

### 入口[entry]

`webpack`通过`entry`指定文件一个或多个入口起点，进入入口起点后可以找出与其直接或间接依赖的文件。

#### 单入口配置

```
entry: './index.js'
```

#### 多入口配置

```
entry: {
  pageA: './pageA.js',
  pageB: './pageB.js'
}

或者

entry: ['./fileA.js', './fileB.js']
```

### 出口[output]

`webpack`通过`output`来指定打包后输出文件的路径与文件名，它是一个对象，常用以下属性：
- filename：文件名，如果配置了多入口，则文件名可以通过占位符[name]来保持名称的唯一性及实现多出口的配置，如下：

  - 单出口文件名：filename: 'boundle.js'
  - 多出口文件名：filename: [name].js
  
  我们还可以给`filename`加上`hash`值来解决使用修改文件后的缓存问题，如：`filename: [name][hash].js`，还可以限制`hash`的长度，如：`filename: [name][hash:8].js`
  
- path：路径，要是绝对路径
