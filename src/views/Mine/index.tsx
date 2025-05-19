import React, { memo } from 'react'
interface IProps {
	children?: React.ReactNode
}
const Mine: React.FC<IProps> = () => {
	return (
		<div>
			<div>Mine</div>
		</div>
	)
}
export default memo(Mine)
