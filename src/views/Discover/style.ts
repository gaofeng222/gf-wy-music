import styled from 'styled-components'

export const SubMenuContainer = styled.div`
	margin: 0 auto;
	height: 34px;
	background-color: var(--sysNavbgColor);
	.sub-menu-box {
		width: 1100px;
		height: inherit;
		margin: 0 auto;
		display: flex;
		padding-left: 188px;
		align-items: center;
		li {
			float: left;
			width: 96px;
			text-align: center;
			a {
				color: #fff;
				em {
					display: inline-block;
					height: 20px;
					padding: 0 13px;
					border-radius: 20px;
					line-height: 20px;
				}
				&.active,
				&:hover {
					em {
						background: var(--sysHighLight);
					}
				}
			}
		}
	}
`
