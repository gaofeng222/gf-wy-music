import React, { memo, useEffect } from 'react'
import type { IBannerType } from '@u/types'
import { Carousel } from 'antd'
import {
	BannerBoxContainer,
	BannerLeft,
	BannerRight,
	LoginButton
} from './style'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { fetchBanner } from '@s/modules/recommend'
import { shallowEqual } from 'react-redux'
interface IProps {
	children?: React.ReactNode
}

const Recommend: React.FC<IProps> = () => {
	const [bgImage, setBgImage] = React.useState<string>('')
	const [currentIndex, setCurrentIndex] = React.useState<number>(0)
	const dispatch = useAppDispatch()

	const { banner } = useAppSelector(
		(state) => ({
			banner: state.recommend.banner
		}),
		shallowEqual
	)

	// 发起请求轮播数据
	useEffect(() => {
		dispatch(fetchBanner())
	}, [])

	useEffect(() => {
		setBgImage(banner[currentIndex]?.imageUrl + '?imageView&blur=40x20')
	}, [banner, currentIndex])

	const handleAfterChange = (index: number) => {
		setCurrentIndex(index)
	}

	return (
		<BannerBoxContainer bgimage={bgImage}>
			<div className="banner wrap-v2">
				<BannerLeft>
					<Carousel
						autoplay
						arrows={true}
						effect={'fade'}
						afterChange={handleAfterChange}
					>
						{banner.map((item) => (
							<div key={item.targetId} className="banner-item">
								<img
									className="image"
									src={item.imageUrl}
									alt={item.typeTitle}
								/>
							</div>
						))}
					</Carousel>
				</BannerLeft>
				<BannerRight>
					<LoginButton href="" className="btn"></LoginButton>
					<p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
				</BannerRight>
			</div>
		</BannerBoxContainer>
	)
}
export default memo(Recommend)
