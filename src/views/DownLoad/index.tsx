import React from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
	name: string
	age: number
	height: number
	weight?: number
	children?: ReactNode
}

const DownLoad: FC<IProps> = (props) => {
	return (
		<div>
			<h2>下载</h2>
			<p>姓名：{props.name}</p>
			<p>年龄：{props.age}周岁</p>
			<p>身高：{props.height}cm</p>
			<p>体重：{props.weight}kg</p>
			{props.children}
		</div>
	)
}

// DownLoad.defaultProps = {
// 	name: '未知',
// 	age: 0,
// 	height: 0,
// 	weight: 0
// }
// DownLoad.displayName = '下载'

export default DownLoad
