import http from '@u/http'
import type { IHotRecommendType } from '@u/types'

export const getHotRecommend = (limit: number = 8) => {
	return http.get<IHotRecommendType[]>('/personalized', {
		params: {
			limit
		}
	})
}
