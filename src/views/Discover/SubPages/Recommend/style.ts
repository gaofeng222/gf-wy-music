import styled from 'styled-components'
import bannerBg from '@a/images/banner-login.png'

interface BannerPropers {
	bgimage: string
}

export const BannerBoxContainer = styled.div<BannerPropers>`
	/* background: url(${(props) =>
		props.bgimage}) no-repeat center center/6000px; */
	background-image: url(${(props) => props.bgimage});
	background-repeat: no-repeat;
	background-position: center center;
	background-size: 6000px;
	position: relative;
	height: 270px;
	transition: background-image 1s;
	min-height: 270px;
	.banner {
		height: 270px;
		width: 982px;
		margin: 0 auto;
		background-color: red;
		display: flex;
		position: relative;
	}
`
export const BannerLeft = styled.div`
	position: relative;
	width: 730px;
	.banner-item {
		overflow: hidden;
		height: 270px;
		.image {
			width: 100%;
		}
	}
`
export const BannerRight = styled.div`
	position: absolute;
	top: 0;
	z-index: 20;
	right: -1px;
	width: 254px;
	height: 270px;
	background: url(${bannerBg}) no-repeat 0 0;
	p {
		margin: 15px auto;
		text-align: center;
		color: #8d8d8d;
		font-size: 12px;
	}
`
export const LoginButton = styled.a.attrs({
	href: 'https://music.163.com/download',
	target: '_blank'
})`
	display: block;
	width: 215px;
	height: 56px;
	margin: 180px 0 0 19px;
	text-indent: -9999px;
`
