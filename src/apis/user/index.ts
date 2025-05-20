import http from '@u/http'
import type { IBannerType } from '@u/types'

export const getBanner = () => {
	return http.get<IBannerType[]>('/banner')
}
