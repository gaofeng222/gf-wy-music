import React, { memo, useEffect } from 'react'
import { useAppDispatch } from '@/hooks'
import TopBanner from './TopBanner'
import { fetchBanner } from '@s/modules/recommend'
import { RecommendWrapper, RecommendRight, RecommendLeft } from './style'

interface IProps {
	children?: React.ReactNode
}

const Recommend: React.FC<IProps> = () => {
	const dispatch = useAppDispatch()

	// 发起请求轮播数据
	useEffect(() => {
		dispatch(fetchBanner())
	}, [])

	return (
		<>
			<TopBanner />
			<RecommendWrapper className="content">
				<RecommendLeft className="content-left">1</RecommendLeft>
				<RecommendRight className="content-right">2</RecommendRight>
			</RecommendWrapper>
		</>
	)
}
export default memo(Recommend)
