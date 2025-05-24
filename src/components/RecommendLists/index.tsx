import React, { memo } from 'react'
import { useAppSelector } from '@/hooks'
import { shallowEqual } from 'react-redux'
import { RecommendWrapper, RecommendWrapperUl } from './style'
import HotRecommendItem from './HotRecommendItem'
interface IProps {
	children?: React.ReactNode
}
const RecommendLists: React.FC<IProps> = () => {
	const { hotRecommend } = useAppSelector(
		(state) => ({
			hotRecommend: state.recommend.hotRecommend
		}),
		shallowEqual
	)
	return (
		<RecommendWrapper>
			<RecommendWrapperUl className="m-cvrlst">
				{hotRecommend.map((item) => (
					<HotRecommendItem item={item} />
				))}
			</RecommendWrapperUl>
		</RecommendWrapper>
	)
}
export default memo(RecommendLists)
