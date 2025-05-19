import React, { memo } from 'react'
interface IProps {
	children?: React.ReactNode
}
const Page404: React.FC<IProps> = () => {
	return (
		<div>
			<div>Page404</div>
		</div>
	)
}
export default memo(Page404)
