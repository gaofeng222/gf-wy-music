import styled from 'styled-components'
import iconBg from '@a/images/icon-bg.png'

export const CommonHeadWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 2px solid #c10d0c;
	.left {
		display: flex;
		align-items: center;
		.title {
			height: 33px;
			padding: 0 10px 0 34px;
			background-position: -225px -156px;

			a {
				font-size: 20px;
				font-weight: normal;
				line-height: 28px;
			}
		}
		.keyword-list {
			margin-left: 10px;
			display: flex;
			a {
				&:hover {
					color: #c10d0c;
					cursor: pointer;
					text-decoration: underline;
				}
				& ~ a {
					&::before {
						content: '|';
						color: #ccc;
						margin: 0 10px; // 间距调整
					}
				}
			}
		}
	}
	.right {
		display: flex;
		align-items: center;

		.more {
			font-size: 12px;
			color: #666;
			&:hover {
				text-decoration: underline;
				cursor: pointer;
			}
		}
		.arrow-right {
			display: inline-block;
			width: 12px;
			height: 12px;
			background: url(${iconBg}) no-repeat 0 9999px;
			background-position: 0 -240px;
			margin-left: 5px;
			vertical-align: middle;
		}
	}
`
