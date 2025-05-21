import React, { memo } from 'react'
interface IProps {
	children?: React.ReactNode
}
const Footer: React.FC<IProps> = () => {
	return (
		<div>
			<div>Footer</div>
		</div>
	)
}
export default memo(Footer)
