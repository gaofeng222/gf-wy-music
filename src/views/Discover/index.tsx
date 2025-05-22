import Loading from '@/components/Loading'
import React, { memo, Suspense } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import subMenu from './menuData.json'
import { SubMenuContainer } from './style'
interface IProps {
	children?: React.ReactNode
}
const Discover: React.FC<IProps> = () => {
	const showSubMenu = (item: any) => {
		return (
			<NavLink
				to={`/discover/${item.to}`}
				className={({ isActive }) => {
					return isActive ? 'active' : ''
				}}
			>
				<em>{item.title}</em>
			</NavLink>
		)
	}
	return (
		<>
			<SubMenuContainer>
				<ul className="sub-menu-box">
					{subMenu.map((item) => {
						return <li key={item.title}>{showSubMenu(item)}</li>
					})}
				</ul>
			</SubMenuContainer>
			<div>
				<Suspense fallback={<Loading />}>
					<Outlet />
				</Suspense>
			</div>
		</>
	)
}
export default memo(Discover)
