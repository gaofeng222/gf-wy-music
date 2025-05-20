import React, { memo } from 'react'
interface IProps {
	children?: React.ReactNode
}

const Recommend: React.FC<IProps> = () => {
	return (
		<div>
			<div>Recommend</div>
		</div>
	)
}
export default memo(Recommend)
