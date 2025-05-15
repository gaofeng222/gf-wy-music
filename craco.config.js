/* craco.config.js */
const path = require('path')
module.exports = {
	// 配置别名
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@a': path.resolve(__dirname, 'src/assets'),
			'@c': path.resolve(__dirname, 'src/components'),
			'@v': path.resolve(__dirname, 'src/views')
		},
		// 省略文件扩展名s
		configure: {
			resolve: {
				extensions: ['.js', '.jsx', '.json', '.css', 'tsx']
			}
		}
	},
	style: {
		// 配置scss
		sass: {
			loaderOptions: {
				// 修改全局变量
				additionalData: `@use "@a/styles/variables.scss" as *;`
				// prependData: `$content-width: 100%;` // 定义全局变量
			}
		},
		postcss: {
			//   plugins: [require('tailwindcss'), require('autoprefixer')]
		}
	}
}
