import React from 'react';
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import Menus from './Menus';

const Sidebar = styled.div`
  width: 350px;
  background: black;
  color: white;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 50px 0;
  z-index: 1;

  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }
  .profile {
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .profile_links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    .gatsby-image-wrapper {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      .tistory & {
        transform: scale(1.1, 1.1);
      }
    }
  }
  .profile_link {
    & + .profile_link {
      margin-left: 20px;
    }
  }

  @media screen and (max-width: 1500px) {
    & {
      width: 250px;
    }
  }
  @media screen and (max-width: 1080px) {
    & {
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100px;
      display: flex;
      padding: 0 3%;
      .wrap {
        justify-content: space-evenly;
        align-items: center;
        margin: 0;
        margin-right: 30px;
      }
      .profile {
        width: 60px;
        height: 60px;
      }
      .profile_links {
        margin-top: 0;
        .gatsby-image-wrapper {
          width: 16px;
          height: 16px;
        }
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
            fluid(maxWidth: 60) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        allFile(filter: { relativePath: { glob: "icons/profiles/*.png" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 24) {
                  ...GatsbyImageSharpFluid
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
          <Image className="profile" fluid={file.childImageSharp.fluid} />
        </Link>
        <ul className="profile_links">
          <li className="profile_link github">
            <a href="https://github.com/simsimjae" target="_blank" rel="noopener noreferrer">
              <Image fluid={allFile.edges[0].node.childImageSharp.fluid} />
            </a>
          </li>
          <li className="profile_link naver">
            <a href="https://mail.naver.com/write/popup?srvid=note&to=simsimjae@naver.com" target="_blank" rel="noopener noreferrer">
              <Image fluid={allFile.edges[1].node.childImageSharp.fluid} />
            </a>
          </li>
          <li className="profile_link tistory">
            <a href="https://simsimjae.tistory.com" target="_blank" rel="noopener noreferrer">
              <Image fluid={allFile.edges[2].node.childImageSharp.fluid} />
            </a>
          </li>
        </ul>
      </div>
      <Menus />
    </Sidebar>
  );
};
export default sidebar;
