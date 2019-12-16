import React from 'react';
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Sidebar = styled.div`
  min-width: 250px;
  min-height: 100vh;
  background: black;
  color: white;
  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  .menu_list {
    font-size: 28px;
    margin: 20px 0;
  }
  .menu_item {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .menu_icon {
    margin-top: -2px;
  }
  .menu_text {
    margin-left: 5px;
    font-size: 20px;
  }
  .logo {
    font-family: 'Nunito', 'Noto Sans KR', sans-serif;
    font-size: 25px;
  }
`;

const sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "react.png" }) {
        childImageSharp {
          fixed(width: 24, height: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Sidebar>
      <div className="wrap">
        <Link to="/">
          <h1 className="logo">SIMSIMJAE</h1>
        </Link>
      </div>
      <ul className="menu_list">
        <li className="menu_item">
          <Link to="/posts/react">
            <Image fixed={data.file.childImageSharp.fixed} alt="react icon" className="menu_icon" />
            <span className="menu_text">리액트</span>
          </Link>
        </li>
      </ul>
    </Sidebar>
  );
};
export default sidebar;
