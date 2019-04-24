import axios from 'axios'


//此次成功的请求到了数据， 说明在请求`api/login`的时候，被代理到了`http://so.news.cn/getNews?keyword=dd&curPage=1&sortField=0&searchFields=1&lang=cn` 这个地址， 可以用 webpack 代理这个方法来解决开发中遇到的跨域问题。
axios.get('/api/login').then(r => {
	console.log(r);
})
