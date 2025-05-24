import React, { memo } from 'react'
import { CommonHeadWrapper } from './style'
import { Link } from 'react-router-dom'
import type { IDataType } from '@v/Discover/SubPages/Recommend'
interface IProps {
	children?: React.ReactNode
	title: string
	keywords?: IDataType[]
}

const CommonHead: React.FC<IProps> = (props) => {
	const { title } = props

	const generateKeywordLists = () => {
		const { keywords } = props
		if (!keywords) return null
		return (
			<div className="keyword-list">
				{keywords.map((item, index) => (
					<Link to={`/discover/playlist/?cat=${item.title}`} key={index}>
						{item.title}
					</Link>
				))}
			</div>
		)
	}

	return (
		<CommonHeadWrapper>
			<div className="left">
				<h2 className="title v-hd2">
					<Link to="/home">{title}</Link>
				</h2>
				{generateKeywordLists()}
			</div>
			<div className="right">
				<span className="more">更多</span>
				<i className="arrow-right"></i>
			</div>
		</CommonHeadWrapper>
	)
}
export default memo(CommonHead)
