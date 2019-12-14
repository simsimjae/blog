import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Navbar from './navbar';

const Header = ({ siteTitle }) => {
  return <Navbar />;
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
