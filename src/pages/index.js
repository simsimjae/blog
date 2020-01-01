import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostCardList from "../components/PostCard-List";
import { PostCardDatas } from "../components/templates/postcard-list-template";

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="Home" />
      {/* <PostCardList posts={} images={} /> */}
    </Layout>
  );
};

export default IndexPage;
