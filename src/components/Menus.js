import React from "react";
import styled from "styled-components";
import { Link, useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const MenuList = styled.ul`
	padding: 20px 10px;
	display: flex;
	flex-wrap: wrap;
	margin-top: -50px;
	.item {
		width: 50%;
		margin-top: 50px;
		a {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
	.text {
		display: block;
		margin-top: 10px;
		font-size: 16px;
	}

	@media screen and (max-width: 1080px) {
		& {
			display: block;
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			margin: 0;
			overflow: hidden;
			overflow-x: auto;
			white-space: nowrap;
			-ms-overflow-style: none;
			&::-webkit-scrollbar {
				display: none !important;
			}
			.item {
				display: inline-block;
				margin-top: 5px;
				&:first-child {
					margin-left: 0px;
				}
				width: auto;
			}
			.item + .item {
				margin: 0 0 0 30px;
			}
		}
	}
`;

const MenuItem = styled.li`
	.menu_icon {
		display: block;
		width: 35px;
		height: 35px;
		border-radius: ${props => (props.round ? "50%" : "0")};
		margin-top: -2px;
		&.node {
			height: 38px;
			margin-top: -5px;
		}
	}
`;

const Menus = () => {
	const { allFile } = useStaticQuery(
		graphql`
			query {
				allFile(filter: { relativePath: { glob: "icons/menus/*.png" } }, sort: { fields: birthTime, order: ASC }) {
					edges {
						node {
							childImageSharp {
								fluid(maxWidth: 35) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		`
	);
	const MenuDatas = [
		{
			name: "리액트",
			path: "react",
			icon: allFile.edges[0].node.childImageSharp.fluid
		},
		{
			name: "TIL",
			path: "TIL",
			icon: allFile.edges[1].node.childImageSharp.fluid
		},
		{
			name: "세미나",
			path: "seminar",
			icon: allFile.edges[2].node.childImageSharp.fluid
		},
		{
			name: "CSS",
			path: "css",
			icon: allFile.edges[3].node.childImageSharp.fluid,
			round: true
		},
		{
			name: "알고리즘",
			path: "algorithm",
			icon: allFile.edges[4].node.childImageSharp.fluid,
			round: true
		},
		{
			name: "Node",
			path: "node",
			icon: allFile.edges[5].node.childImageSharp.fluid
		}
	];
	return (
		<MenuList>
			{MenuDatas.map((item, index) => {
				return (
					<MenuItem className={`item ${item.path}`} key={index} round={item.round}>
						<Link to={`/posts/${item.path}`}>
							<Image fluid={item.icon} alt={`${item.path} icon`} className={`menu_icon ${item.path}`} />
							<span className="text">{item.name}</span>
						</Link>
					</MenuItem>
				);
			})}
		</MenuList>
	);
};

export default Menus;
