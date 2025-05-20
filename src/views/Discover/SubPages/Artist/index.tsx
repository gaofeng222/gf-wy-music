import React, { memo } from 'react'
interface IProps {
	children?: React.ReactNode
}
const Artist: React.FC<IProps> = () => {
	return (
		<div>
			<div>Artist</div>
		</div>
	)
}
export default memo(Artist)
