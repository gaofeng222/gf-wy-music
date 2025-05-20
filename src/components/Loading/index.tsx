import React, { memo } from 'react'
interface IProps {
	children?: React.ReactNode
}
const Loading: React.FC<IProps> = () => {
	return (
		<div>
			<div>Loading...</div>
		</div>
	)
}
export default memo(Loading)
