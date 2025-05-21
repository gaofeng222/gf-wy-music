import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import {
	HeaderWrapper,
	HeaderNav,
	HeaderNavRight,
	HeaderNavLeft,
	Button
} from './style'
interface IProps {
	children?: React.ReactNode
}
const Header: React.FC<IProps> = () => {
	return (
		<HeaderWrapper>
			<HeaderNav>
				<HeaderNavLeft>
					<Link to="/">网易云音乐</Link>
				</HeaderNavLeft>
				<HeaderNavRight>
					<div className="nav-items">
						<Link className="active" to="/discover">
							发现音乐
						</Link>
						<Link to="/mine">我的音乐</Link>
						<Link to="/focus">关注</Link>
						<Link to="/focus">商城</Link>
						<Link to="/focus">音乐人</Link>
						<Link to="/download">下载客户端</Link>
					</div>
					<div className="nav-search">
						<Input
							prefix={<SearchOutlined />}
							placeholder="音频/视频/电台/用户"
						/>
					</div>
				</HeaderNavRight>
			</HeaderNav>
		</HeaderWrapper>
	)
}
export default memo(Header)
