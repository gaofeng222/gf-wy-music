// ts封装aixos
import axios from 'axios'
import type {
	AxiosInstance,
	AxiosError,
	AxiosResponse,
	InternalAxiosRequestConfig
} from 'axios'

const service: AxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
	// 对请求数据做点什么

	(config: InternalAxiosRequestConfig) => {
		return config
	},
	(error: AxiosError) => {
		console.log('请求出错', error)
		return Promise.reject(error)
	}
)
// 响应拦截器
service.interceptors.response.use(
	(res: AxiosResponse) => {
		console.log('🚀 ~ res:', res)
		const { code, message, banners } = res.data
		if (code === 200) {
			return banners
		} else {
			// TODO: 这里可以封装一个统一的提示弹窗，提示错误信息
			return Promise.reject(new Error(message ? message : ''))
		}
	},
	(error: AxiosError) => {
		console.log('响应出错', error)
		const status = error.response?.status
		let message = ''
		switch (status) {
			case 401:
				message = '登录过期，请重新登录'
				break
			case 403:
				message = '权限不足，请联系管理员'
				break
			case 404:
				message = '请求地址不存在'
				break
			case 500:
				message = '服务器内部错误'
				break
			default:
				message = '网络连接异常，请稍后再试'
		}
		// TODO: 这里可以封装一个统一的提示弹窗，提示错误信息
		return Promise.reject(new Error(message))
	}
)

export default service
