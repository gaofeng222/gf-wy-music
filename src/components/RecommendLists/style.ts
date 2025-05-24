import styled from 'styled-components'

export const RecommendWrapper = styled.div`
	.m-cvrlst {
		li {
			width: 140px;
			height: 204px;
			padding-left: 42px;
			box-sizing: content-box;
			.top {
				width: 140px;
				height: 140px;
				position: relative;
				.img {
					width: 100%;
				}
				.opacity-bg {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-position: 0 0;
				}
			}
		}
		.desc {
			margin: 8px 0 3px;
			font-size: 14px;
			.tit {
				display: inline-block;
				max-width: 100%;
				_width: 100%;
				vertical-align: middle;
				&:hover {
					color: #000;
					text-decoration: underline;
				}
			}
		}
	}
`
export const RecommendWrapperUl = styled.ul`
	margin: 20px 0 0 -42px;
	li {
		float: left;
		width: 140px;
		height: 188px;
		overflow: hidden;
		padding: 0 0 30px 50px;
		line-height: 1.4;
	}
`
export const HotItemBox = styled.div`
	.img-cover {
		position: relative;
		.bottom {
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 27px;
			background: rgba(0, 0, 0, 0.5);
			color: #ccc;
			line-height: 27px;
			font-size: 12px;
			.icon-headset {
				width: 14px;
				height: 11px;
				display: inline-block;
				background-position: 0 -24px;
				margin: 8px 5px 9px 10px;
				vertical-align: top;
			}
			.nb {
				vertical-align: top;
			}
			.icon-play {
				position: absolute;
				right: 10px;
				bottom: 4px;
				width: 16px;
				height: 17px;
				background-position: 0 0;
				cursor: pointer;
			}
		}
	}
`
