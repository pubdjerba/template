const kebabCase = require('lodash/kebabCase');

exports.createPages = async ({ actions, graphql }) => {
  const categoryTemplate = require.resolve('./src/templates/category.js');
 

  const result = await graphql(`
    query {
     
        allStrapiActivite(filter: {status: {eq: true}}) {
          edges {
            node {
              title
              titleShort
              slug
              price
              promotion
              cover_1 {
                id
              }
              cover_2 {
                id
              }
              cover_3 {
                id
              }
              categories {
                name
              }
            }
          }
        }
      }
      
  `);

  
  if (result.errors) {
    reporter.panic('error loading categories', result.errors);
    return;
  }

  const activites = result.data.allStrapiActivite.edges;

  const categoriesSet = new Set();
  

 activites.forEach((activite) => {
    const {categories } = activite.node;

   
    
   
      categories.forEach(({name}) => {
        categoriesSet.add(name);
        
      });

     //console.log(JSON.stringify({categoriesSet},null,2))
      const categoriesList = Array.from(categoriesSet);

      categoriesList.forEach((name) => {
        actions.createPage({
          path: `/categories/${kebabCase(name)}/`,
          component: categoryTemplate,
          context: {
            name,
          },
        });
      });
     

  });

 
};