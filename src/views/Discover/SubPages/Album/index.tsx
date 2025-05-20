import React, { memo } from 'react'
interface IProps {
	children?: React.ReactNode
}
const Album: React.FC<IProps> = () => {
	return (
		<div>
			<div>Album</div>
		</div>
	)
}
export default memo(Album)
