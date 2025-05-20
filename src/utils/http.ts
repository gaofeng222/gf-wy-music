// 封装公共的请求方法

import { AxiosRequestConfig } from 'axios'
import service from './axios'

class http {
	static get = <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
		return service.get(url, config)
	}

	static post = <T>(
		url: string,
		data?: object,
		config?: AxiosRequestConfig
	): Promise<T> => {
		return service.post(url, data, config)
	}

	static put = <T>(
		url: string,
		data?: object,
		config?: AxiosRequestConfig
	): Promise<T> => {
		return service.put(url, data, config)
	}

	static del = <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
		return service.delete(url, config)
	}
}

export default http
