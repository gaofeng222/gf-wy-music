export interface Result<T = any> {
	data: T
	code: number
	message: string
}

//登录接口参数类型
export interface LoginParams {
	username: string
	password: string
}

//登录接口返回类型
export interface LoginResult {
	token: string
}

//用户信息
export interface UserInfoRes {
	id: number
	name: string
	avatar: string
	roles: Array<string>
}
export interface IBannerType {
	imageUrl: string
	targetId: number
	targetType: number
	titleColor: string
	typeTitle: string
	url?: any
	exclusive: boolean
	scm: string
	bannerBizType: string
}
