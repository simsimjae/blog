import React from 'react';
import Layout from '../layout';
import PostList from '../Post-List';

const categoryTemplate = props => {
  const { path } = props;
  return (
    <Layout>
      <PostList path={path} />
    </Layout>
  );
};

export default categoryTemplate;
