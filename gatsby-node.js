const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                permalink
                popularpost
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      let slug = post.node.fields.slug;
      if (post.node.frontmatter.permalink)
      {
        slug = post.node.frontmatter.permalink;
      }

      createPage({
        path: slug,
        component: blogPost,
        context: {
          slug: slug,
          previous,
          next,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      let kebabTag = _.kebabCase(tag);
      console.log(kebabTag);
      createPage({
        path: `/tags/${kebabTag}/`,
        component: tagTemplate,
        context: {
          kebabTag,
        },
      })
    });

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    let value = createFilePath({ node, getNode })
    if (node.frontmatter.permalink)
    {
      value = node.frontmatter.permalink;
    }
    
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
