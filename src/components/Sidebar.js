import React from 'react';
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import Menus from './Menus';

const Sidebar = styled.div`
  width: 250px;
  background: black;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 50px 0;
  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }
  .profile {
    border-radius: 50%;
  }
  .profile_links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    .tistory {
      img {
        width: 26px !important;
        height: 26px !important;
        object-position: -1px -1px !important;
      }
    }
  }
  .profile_link {
    & + .profile_link {
      margin-left: 20px;
    }
  }
  .gatsby-image-wrapper {
    border-radius: 50%;
  }

  @media screen and (max-width: 1200px) {
    & {
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100px;
      display: flex;
      .wrap {
        flex-direction: row;
      }
    }
  }
`;

const sidebar = () => {
  const { file, allFile } = useStaticQuery(
    graphql`
      query {
        file(name: { eq: "profile" }) {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        allFile(filter: { relativePath: { glob: "icons/profiles/*.png" } }) {
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
  console.log(file, allFile);

  return (
    <Sidebar>
      <div className="wrap">
        <Link to="/">
          <Image className="profile" fixed={file.childImageSharp.fixed} />
        </Link>
        <ul className="profile_links">
          <li className="profile_link github">
            <a href="https://github.com/JaeCheolSim" target="_blank" rel="noopener noreferrer">
              <Image fixed={allFile.edges[0].node.childImageSharp.fixed} />
            </a>
          </li>
          <li className="profile_link naver">
            <a href="https://mail.naver.com/write/popup?srvid=note&to=simsimjae@naver.com" target="_blank" rel="noopener noreferrer">
              <Image fixed={allFile.edges[1].node.childImageSharp.fixed} />
            </a>
          </li>
          <li className="profile_link tistory">
            <a href="https://simsimjae.tistory.com" target="_blank" rel="noopener noreferrer">
              <Image fixed={allFile.edges[2].node.childImageSharp.fixed} />
            </a>
          </li>
        </ul>
      </div>
      <Menus />
    </Sidebar>
  );
};
export default sidebar;
