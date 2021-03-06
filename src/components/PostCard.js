import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Image from "gatsby-image";

const Card = styled.div`
	line-height: 1.3;
	box-shadow: 3px 3px 15px 1px rgba(0, 0, 0, 0.15);
	overflow: hidden;
	border-radius: 10px;
	box-sizing: border-box;
	position: relative;
	width: calc((100% - 2% * 4) / 3);
	margin: 2% 0 0 2%;

	@media screen and (max-width: 1700px) {
		width: calc((100% - 2% * 4) / 3);
		margin: 2% 0 0 2%;
	}
	@media screen and (max-width: 1500px) {
		width: calc((100% - 4% * 3) / 2);
		margin: 4% 0 0 4%;
	}
	@media screen and (max-width: 1200px) {
		width: calc((100% - 2% * 3) / 2);
		margin: 2% 0 0 2%;
	}
	@media screen and (max-width: 1080px) {
		width: calc((100% - 3% * 3) / 2);
		margin: 3% 0 0 3%;
	}
	@media screen and (max-width: 700px) {
		width: calc(100% - 5% * 2);
		margin: 5% 0 0 5%;
	}
	&:hover {
		.thumbnail-wrapper:before {
			content: "";
			background: black;
			opacity: 0.2;
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 999;
		}
	}
	a {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
	}
	.thumbnail-wrapper {
		width: 100%;
		height: 0;
		padding-bottom: 56.25%;
		position: relative;
		display: block;
		.gatsby-image-wrapper {
			position: absolute !important;
			left: 0;
			top: 0;
			height: 100%;
			width: 100%;
		}
	}
	.contents-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 15px 20px;
		box-sizing: border-box;
		flex: 1;
	}
	.thumbnail {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
		border-top-right-radius: 8px;
		border-top-left-radius: 8px;
	}
	.title {
		font-size: 2.2rem;
		font-weight: 400;
		letter-spacing: 0.5px;
		color: #444;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		word-break: break-all;
		word-wrap: break-word;
	}
	.desc {
		font-size: 16px;
		height: 70px;
		color: #aaa;
		line-height: 1.5;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.date {
		color: #777;
		opacity: 0.5;
		font-size: 12px;
		text-align: right;
		margin: 5% 0;
		word-break: break-all;
	}
	.banner {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}
`;

const PostCard = ({ data, fluidImage, gif }) => {
	// 기본 카드 배너 이미지, webp 또는 gif로 받음.
	const { path, title, date, hero } = data.frontmatter;
	const { excerpt } = data;

	return (
		<Card>
			<Link to={path}>
				<div className="thumbnail-wrapper">
					{(() => {
						let image;
						if (hero) {
							// 마크다운에 배너 이미지를 설정한 경우(png) : 1순위
							image = <Image fluid={hero.childImageSharp.fluid} alt="마크다운 카드 배너" imgStyle={{ objectFit: "contain" }} />;
						} else if (fluidImage) {
							// 기본 카드 배너 이미지(png) : 2순위
							image = <Image fluid={fluidImage} alt="포스트 기본 png 배너" />;
						} else if (gif) {
							// 기본 카드 배너 이미지(gif) : 3순위
							image = <img className="banner" src={gif} alt="포스트 기본 gif 배너" />;
						}
						return image;
					})()}
				</div>
				<div className="contents-wrapper">
					<p className="title">{title}</p>
					<p className="date">{date}</p>
					<p className="desc">{excerpt}</p>
				</div>
			</Link>
		</Card>
	);
};

export default PostCard;
