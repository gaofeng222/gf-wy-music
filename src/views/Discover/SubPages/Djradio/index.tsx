import React, { memo } from 'react'
interface IProps {
	children?: React.ReactNode
}
const Djradio: React.FC<IProps> = () => {
	return (
		<div>
			<div>Djradio</div>
		</div>
	)
}
export default memo(Djradio)
