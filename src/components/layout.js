import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import styles from '../styles/index.scss';
import Sidebar from './Sidebar';

const Wrapper = styled.div`
  display: flex;
  .contents {
    margin: 24px;
  }
  .right_area {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 350px;
    @media screen and (max-width: 1200px) {
      & {
        margin: 100px auto;
      }
    }
  }
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <div className="right_area">
        <div className="contents">
          <main>{children}</main>
        </div>
      </div>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
