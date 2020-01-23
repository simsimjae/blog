import React from "react";
import styled from "styled-components";
import ReactUtterences from "react-utterances";

const PostWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 750px;
	width: 70%;
	margin: 50px auto 200px;
	line-height: 1.3;
	overflow-x: hidden;
	box-sizing: border-box;
	font-family: Roboto, "Nanum Gothic", sans-serif;
	.post {
		margin-bottom: 100px;
	}
	.post_title {
		font-size: 3.6rem;
		color: black;
		text-align: center;
		margin-bottom: 20px;
		font-weight: normal;
		word-break: keep-all;
		word-wrap: break-word;
	}
	.post_date {
		color: #b2b2b2;
		text-align: center;
		margin: 30px 0;
		font-size: 1.6rem;
		letter-spacing: 2px;
	}
	p {
		font-size: 2.1rem;
		margin: 50px 0;
		color: #555;
		opacity: 0.9;
		line-height: 1.8;
		word-break: break-all;
		letter-spacing: 0.3px;
	}
	a {
		font-weight: bold;
		color: #ff5b59;
	}
	h1,
	h2,
	h3 {
		color: #222;
		font-weight: bold;
		&:first-child {
			margin-top: 50px;
		}
	}
	img {
		display: block;
		width: 100%;
		object-fit: cover;
		margin: 30px 0;
	}
	h1 {
		font-size: 3rem;
		margin: 80px 0 40px;
		position: relative;
	}
	h2 {
		font-size: 2.4rem;
		margin: 60px 0 20px;
	}
	h3 {
		font-size: 2.2rem;
		margin: 40px 0 20px;
	}
	ol,
	ul {
		li {
			p {
				margin: 20px 0;
			}
		}
	}
	ol {
		font-size: 2rem;
		padding-left: 50px;
		list-style: decimal;
		margin: 20px 0;
		color: #444;
		li:before {
			content: "";
		}
	}
	ul {
		font-size: 2rem;
		color: #444;
		padding-left: 50px;
		list-style: initial;
		margin: 20px 0;
	}
	li {
		& + li {
			margin-top: 20px;
		}
	}
	strong {
		font-weight: bold;
		color: black;
	}
	blockquote {
		position: relative;
		padding: 1px 20px;
		padding-left: 60px;
		background: #f9f9f9;
		border-radius: 5px;
		box-sizing: border-box;

		p {
			color: #222;
			font-size: 2rem;
			line-height: 1.8;
			margin: 20px 10px;
		}
		&:before {
			top: 20px;
			left: 20px;
			color: #999;
			font-size: 32px;
			content: "\f10d";
			position: absolute;
			text-align: center;
			font-style: normal;
			font-family: "FontAwesome";
		}
	}
	@media screen and (max-width: 1500px) {
		& {
			padding: 20px;
			margin: 0 auto;
		}
	}
	@media screen and (max-width: 1080px) {
		& {
			padding: 32px;
		}
	}
	@media screen and (max-width: 782px) {
		padding: 16px;
		width: 100%;
		min-width: 100%;
		margin: 0;
		box-sizing: border-box;
		word-break: break-all;
		word-wrap: break-word;
		& {
			.post_title {
				&:first-child {
					margin-top: 20px;
				}
				font-size: 2.6rem;
			}
			.post_date {
				margin: 0;
			}
			p {
				line-height: 1.65;
				font-size: 1.6rem;
				margin: 3rem 0;
			}
			img {
				margin: 10px 0;
			}
			h1 {
				font-size: 2.4rem;
				margin: 50px 0 20px;
				position: relative;
			}
			h2 {
				font-size: 2rem;
				margin: 50px 0 20px;
			}
			h3 {
				font-size: 1.8rem;
				margin: 30px 0 20px;
			}
			ol {
				padding-left: 20px;
				margin: 20px 0;
				font-size: 1.6rem;
			}
			ul {
				padding-left: 20px;
				font-size: 1.6rem;
				margin: 20px 0;
			}
			li {
				& + li {
					margin-top: 10px;
				}
			}
			blockquote {
				padding-top: 20px;
				padding-bottom: 20px;
				&:before {
					top: 10px;
				}
				p {
					font-size: 1.6rem;
					line-height: 1.5;
					margin-top: 0;
					margin-bottom: 0;
				}
			}
		}
	}
`;

const Post = ({ html, frontmatter }) => {
	const repo = "simsimjae/simsimjae.github.io";
	return (
		<PostWrapper>
			<h1 className="post_title">{frontmatter.title}</h1>
			<p className="post_date">{frontmatter.date}</p>
			<div className="post" dangerouslySetInnerHTML={{ __html: html }} />
			<ReactUtterences repo={repo} type="url" theme="" />
		</PostWrapper>
	);
};

export default Post;
