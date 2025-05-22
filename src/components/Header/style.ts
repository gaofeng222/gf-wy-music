import styled from 'styled-components'
import LogoBg from '../../assets/images/app-bg.png'
export const HeaderWrapper = styled.div`
	z-index: 1000;
	height: 70px;
	box-sizing: border-box;
	background: #242424;
	border-bottom: 1px solid #000;
	.divider {
		height: 5px;
		background: var(--sysNavbgColor);
	}
`

export const HeaderNav = styled.div`
	width: 1100px;
	height: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
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
		.item {
			a {
				padding: 0 15px;
				display: inline-block;
				&.active,
				&:hover {
					background: #000;
				}
				&.active {
					position: relative;
					.sub-item {
						position: absolute;
						left: 50%;
						top: 64px;
						width: 12px;
						height: 7px;
						margin-left: -6px;
						overflow: hidden;
						background-image: url(${LogoBg});
						background-repeat: no-repeat;
						background-position: -226px 0;
					}
				}
			}
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
export const CreatorButton = styled.button`
	width: 90px;
	height: 32px;
	box-sizing: border-box;
	border: 1px solid #4f4f4f;
	line-height: 32px;
	color: #ccc;
	border-radius: 20px;
	&:hover {
		color: #fff;
		border: 1px solid #ccc;
	}
`
export const LoginButton = styled.button`
	height: 32px;
	padding: 0 10px;
	color: #ccc;
	&:hover {
		color: #fff;
		text-decoration: underline;
	}
`
export const NavSearchBox = styled.div`
	display: flex;
	align-items: center;
	gap: 0 20px;
	margin-left: 40px;
	.input-box {
		width: 158px;
		border-radius: 32px;
		overflow: hidden;
	}
	input:placeholder-shown {
		font-size: 12px;
	}
`
