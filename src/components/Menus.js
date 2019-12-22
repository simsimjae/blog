import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const MenuList = styled.ul`
  font-size: 28px;
  padding: 20px 10px;
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 50%;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .menu_icon {
    margin-top: -2px;
  }
  .text {
    display: block;
    margin-top: 10px;
    font-size: 22px;
  }

  @media screen and (max-width: 1200px) {
    & {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      width: 80%;
      height: 100%;
      box-sizing: border-box;
      margin: 0;
      .item {
        &:first-child {
          margin-left: 40px;
        }
        width: auto;
      }
      .item + .item {
        margin: 0 0 0 40px;
      }
    }
  }
`;

const Menus = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { relativePath: { glob: "icons/menus/*.png" } }) {
          edges {
            node {
              childImageSharp {
                fixed(width: 30, height: 30) {
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
