import styled from 'styled-components'
import LogoBg from '../../assets/images/app-bg.png'
export const HeaderWrapper = styled.div`
	z-index: 1000;
	height: 70px;
	box-sizing: border-box;
	background: #242424;
	border-bottom: 1px solid #000;
`

export const HeaderNav = styled.div`
	width: 1100px;
	height: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	a {
		color: #fff;
		height: 100%;
		line-height: 69px;
	}
`
export const HeaderNavLeft = styled.h1`
	width: 176px;
	height: 69px;
	background: url(${LogoBg}) no-repeat 0 -2px;
	a {
		width: 157px;
		padding-right: 20px;
		text-indent: -9999px;
		float: left;
	}
`

export const HeaderNavRight = styled.div`
	height: 100%;
	display: flex;
	.nav-items {
		display: flex;
		a {
			padding: 0 20px;
			display: inline-block;
			&.active,
			&:hover {
				background: #000;
			}
		}
	}
	.nav-search {
		width: 158px;
		height: 32px;
		margin-top: 19px;
		border-radius: 32px;
		overflow: hidden;
		input:placeholder-shown {
			font-size: 12px;
		}
	}
`
export const Button = styled.button<{ $primary?: boolean }>`
	/* Adapt the colors based on primary prop */
	background: ${(props) => (props.$primary ? '#BF4F74' : 'white')};
	color: ${(props) => (props.$primary ? 'white' : '#BF4F74')};
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid #bf4f74;
	border-radius: 3px;
`
