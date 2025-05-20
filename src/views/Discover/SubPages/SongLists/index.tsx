import React, { memo } from 'react'
interface IProps {
	children?: React.ReactNode
}

const SongLists: React.FC<IProps> = () => {
	return (
		<div>
			<div>SongLists</div>
		</div>
	)
}
export default memo(SongLists)
