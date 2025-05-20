import Loading from '@/components/Loading'
import React, { memo, Suspense } from 'react'
import { Outlet, Link } from 'react-router-dom'
interface IProps {
	children?: React.ReactNode
}
const Discover: React.FC<IProps> = () => {
	return (
		<div>
			<div>
				<Link to="/discover/recommend">推荐</Link>
				<Link to="/discover/rank">排行榜</Link>
				<Link to="/discover/songs">歌单</Link>
				<Link to="/discover/djradio">主播电台</Link>
				<Link to="/discover/songs">歌手</Link>
				<Link to="/discover/album">新碟上架</Link>
			</div>
			<Suspense fallback={<Loading />}>
				<Outlet />
			</Suspense>
		</div>
	)
}
export default memo(Discover)
