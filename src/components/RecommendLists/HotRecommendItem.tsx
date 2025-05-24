import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import type { IHotRecommendType } from '@u/types'
import { formartCount } from '@u/format'
import { HotItemBox } from './style'

interface IProps {
	children?: React.ReactNode
	item: IHotRecommendType
}
const HotRecommendItem: React.FC<IProps> = (props) => {
	const { item } = props
	return (
		<li>
			<HotItemBox className="top">
				<div className="img-cover u-cover">
					<img className="img" src={item.picUrl} alt="" />
					<a className="opacity-bg msk" href=""></a>
					<div className="bottom">
						<a href="javascript:;" className="icon-play"></a>
						<span className="icon-headset"></span>
						<span className="nb">{formartCount(item.playCount)}万</span>
					</div>
				</div>
			</HotItemBox>
			<p className="desc">
				<Link className="tit" to="/">
					<i className="u-icn u-icn-53"></i>
					{item.name}
				</Link>
			</p>
		</li>
	)
}
export default memo(HotRecommendItem)
