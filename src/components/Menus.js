import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const MenuList = styled.ul`
  padding: 20px 10px;
  display: flex;
  flex-wrap: wrap;
  margin-top: -30px;
  .item {
    width: 50%;
    margin-top: 30px;
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
        margin: 0 0 0 25px;
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
                fixed(width: 35, height: 35) {
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
