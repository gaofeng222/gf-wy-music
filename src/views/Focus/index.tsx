import React, { memo } from 'react'
interface IProps {
	children?: React.ReactNode
}
const Focus: React.FC<IProps> = () => {
	return (
		<div>
			<div>Focus</div>
		</div>
	)
}
export default memo(Focus)
