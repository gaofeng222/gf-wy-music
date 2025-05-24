import React, { memo, useEffect } from 'react'
import { useAppDispatch } from '@/hooks'
import TopBanner from './TopBanner'
import { fetchBanner, fetchHotRecommend } from '@s/modules/recommend'
import { RecommendWrapper, RecommendRight, RecommendLeft } from './style'
import CommonHead from '@c/CommonHead'
import RecommendLists from '@c/RecommendLists'
import data from './data.json'
interface IProps {
	children?: React.ReactNode
}
export type IDataType = (typeof data.keywordsList)[0]

const Recommend: React.FC<IProps> = () => {
	const dispatch = useAppDispatch()

	// 发起请求轮播数据
	useEffect(() => {
		dispatch(fetchBanner())

		// 获取热门推荐的数据
		dispatch(fetchHotRecommend())
	}, [dispatch])

	return (
		<>
			<TopBanner />
			<RecommendWrapper className="content">
				<RecommendLeft className="content-left">
					<CommonHead title="推荐歌单" keywords={data.keywordsList} />
					<RecommendLists />
				</RecommendLeft>
				<RecommendRight className="content-right">2</RecommendRight>
			</RecommendWrapper>
		</>
	)
}
export default memo(Recommend)
