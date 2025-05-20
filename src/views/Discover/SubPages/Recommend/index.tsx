import React, { memo, useEffect } from 'react'
import { getBanner } from '@/apis/user'
import type { IBannerType } from '@u/types'
import Demo from '@/demo/demo02'
interface IProps {
	children?: React.ReactNode
}

const Recommend: React.FC<IProps> = () => {
	const [banner, setBanner] = React.useState<IBannerType[]>([])
	const [age, setAge] = React.useState<number>(18)

	useEffect(() => {
		getBanner().then((res) => {
			console.log('rse', res)
			setBanner(res)
		})
	}, [])

	return (
		<div>
			<div>Recommend</div>
			<Demo name="张三丰" age={age} />
			<button onClick={() => setAge(age + 1)}>点击</button>
		</div>
	)
}
export default memo(Recommend)
