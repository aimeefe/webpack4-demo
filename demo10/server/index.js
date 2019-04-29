/**
 * 环境区分
 * 开发环境： development
 * 生产环境：production
 */
if (process.env.NODE_ENV === 'production') {
	console.log('现在是生产环境了，做点啥吧...');
} else {
	console.log('开发环境...');
}