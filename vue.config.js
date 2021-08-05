module.exports = {
	// publicPath: '/',
	// outputDir: 'dist',
	// assetsDir: 'static',
	// lintOnSave: true,
	// productionSourceMap: process.env.NODE_ENV === 'development',
	devServer: {
		// port: port,
		open: true,
		proxy: { //配置跨域
			'/bryant': {
				target: 'http://apis.juhe.cn', //这里后台的地址模拟的;应该填写你们真实的后台接口 http://121.121.67.254:8185/
				changOrigin: true, //允许跨域
				pathRewrite: {
					/* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
					  实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
					 */
					'^/bryant': '/'
				}
			},
			// '/youfuApi': {
			//   target: 'https://saas.4youfu.com',  //这里后台的地址模拟的;应该填写你们真实的后台接口 http://121.121.67.254:8185/
			//   changOrigin: true,  //允许跨域
			//   pathRewrite: {
			//     /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
			//       实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
			//      */
			//     '^/youfuApi': '/'
			//   }
			// },
			// "/api": {
			//     target: 'http://218.17.160.158:6088', // 这个地址结尾我原本加了一个‘/’,然后一直报404，去掉就好了
			//     changeOrigin: true,
			//     pathRewrite: {
			//         '^/api': '/api'
			//     }
			// }
		}
	}
}
