import React, { memo } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import navLists from './data.json'
import classNames from 'classnames'
import {
	HeaderWrapper,
	HeaderNav,
	HeaderNavRight,
	HeaderNavLeft,
	CreatorButton,
	LoginButton,
	NavSearchBox
} from './style'
interface IProps {
	children?: React.ReactNode
}
const Header: React.FC<IProps> = () => {
	const [currentIndex, setCurrentIndex] = React.useState<number>(0)

	const showItem = (item: any, index: number) => {
		if (item.type === 'path') {
			return (
				<NavLink
					to={item.to}
					className={({ isActive }) => {
						if (isActive) {
							setCurrentIndex(index)
						}
						return isActive ? 'active' : ''
					}}
				>
					{item.title}
					{index === currentIndex ? <span className="sub-item"></span> : null}
				</NavLink>
			)
		} else {
			return (
				<a target="_blank" href={item.to}>
					{item.title}
				</a>
			)
		}
	}

	const handleTab = (index: number) => {
		setCurrentIndex(index)
	}

	return (
		<HeaderWrapper>
			<HeaderNav>
				<HeaderNavLeft>
					<Link to="/">网易云音乐</Link>
				</HeaderNavLeft>
				<HeaderNavRight>
					<div className="nav-items">
						{navLists.map((item, index) => {
							return (
								<div className={classNames('item')}>
									{showItem(item, index)}
								</div>
							)
						})}
					</div>
					<NavSearchBox>
						<div className="input-box">
							<Input
								prefix={<SearchOutlined />}
								placeholder="音频/视频/电台/用户"
							/>
						</div>
						<CreatorButton>创作者中心</CreatorButton>
						<LoginButton>登录</LoginButton>
					</NavSearchBox>
				</HeaderNavRight>
			</HeaderNav>
			<div className="divider"></div>
		</HeaderWrapper>
	)
}
export default memo(Header)
