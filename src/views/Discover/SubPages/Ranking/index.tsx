import React, { memo } from 'react'
interface IProps {
	children?: React.ReactNode
}

const Ranking: React.FC<IProps> = () => {
	return (
		<div>
			<div>Ranking</div>
		</div>
	)
}
export default memo(Ranking)
