const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data, error } = await graphql(`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
  if (error) throw error;

  const categories = new Set();
  // markdown to page
  data.allMarkdownRemark.edges.forEach(({ node }) => {
    const filePath = node.frontmatter.path;
    const lastIdx = filePath.lastIndexOf("/");
    const category = filePath.slice(0, lastIdx);

    categories.add(category);

    //  example
    //  category : posts/react
    //  page : posts/react/1

    createPage({
      path: node.frontmatter.path,
      component: path.resolve(__dirname, "src/components/templates/page-template.js"),
      context: {}
    });
  });

  // Make PostCard List
  categories.forEach(category => {
    createPage({
      path: category,
      component: path.resolve(__dirname, "src/components/templates/postcard-list-template.js"),
      context: {
        postsGlob: category.concat("/*")
      }
    });
  });
};
