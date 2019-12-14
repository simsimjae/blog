import React from 'react';
import { Link } from 'gatsby';

const navbar = () => {
  return (
    <h1 className="logo">
      <Link to="/">
        <span>SIMSIMJAE</span>
      </Link>
    </h1>
  );
};

export default navbar;
