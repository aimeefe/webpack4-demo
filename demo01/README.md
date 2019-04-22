# wepack4-demo 打包 js

#知识点

##入口[entry]
`webpack`通过`entry`指定文件一个或多个入口起点，进入入口起点后可以找出与其直接或间接依赖的文件。

###单入口

```
entry: './index.js'
```

###多入口

```
entry: {
  pageA: './pageA.js',
  pageB: './pageB.js'
}

或者

entry: ['./fileA.js', './fileB.js']
```

##出口[output]

`webpack`通过`output`来指定打包后输出文件的路径与文件名，它是一个对象，包含以下属性：
- filename：文件名，如果配置了多入口，则文件名可以通过占位符[name]来保持名称的唯一性及实现多出口的配置，写法：`filename: '[name].js',`
- path：路径，要是绝对路径


#使用

##安装 webpack

```
yarn init -y

yarn add webpack webpack-cli -D

```

##单文件配置

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

##多文件配置
###打包成单个文件

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

###打包成多个文件

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

##编译

```
npx webpack
```

##查看结果

创建`html`文件，通过`script`标签引入打包后的`js`文件进行查看（后面会说到如何动态生成`html`文件）