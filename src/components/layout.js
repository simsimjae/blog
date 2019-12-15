/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import styles from '../styles/index.scss';
import Header from './header';
import Sidebar from './Sidebar';

const Wrapper = styled.div`
  display: flex;
  .contents {
    margin: 0 30px;
  }
  .right_area {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .head {
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Sidebar />
      <div className="right_area">
        <div className="head">
          <Header siteTitle={data.site.siteMetadata.title} />
        </div>
        <div className="contents">
          <main>{children}</main>
        </div>
      </div>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
