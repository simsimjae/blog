import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const MenuList = styled.ul`
  font-size: 28px;
  margin: 20px 0;
  .item {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & + .item {
      margin-top: 15px;
    }
  }
  .menu_icon {
    margin-top: -2px;
  }
  .text {
    display: block;
    margin-left: 5px;
    font-size: 20px;
  }
`;

const Menus = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { relativePath: { glob: "icons/*.png" } }) {
          edges {
            node {
              childImageSharp {
                fixed(width: 24, height: 24) {
                  ...GatsbyImageSharpFixed
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
      name: '리액트',
      path: 'react',
      icon: allFile.edges[0].node.childImageSharp.fixed
    },
    {
      name: '세미나',
      path: 'seminar',
      icon: allFile.edges[1].node.childImageSharp.fixed
    }
  ];
  return (
    <MenuList>
      {MenuDatas.map((item, index) => {
        return (
          <li className="item" key={index}>
            <Link to={`/posts/${item.path}`}>
              <Image fixed={item.icon} alt={`${item.path} icon`} className="menu_icon" />
              <span className="text">{item.name}</span>
            </Link>
          </li>
        );
      })}
    </MenuList>
  );
};

export default Menus;
