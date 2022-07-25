import React from 'react';
import ActiviteList from "../components/activite-list"
import { graphql } from 'gatsby';

export default function CategoryTemplate({pageContext, data}) {
 const {name} = pageContext
 const activites = data.allStrapiActivite.edges

  console.log(activites, name)
  
  return(
    <div>
          <ActiviteList activites = {activites}  />
    </div>
  )
        
    }


    export const pageQuery = graphql`
    query ($name: String) {
        allStrapiActivite(filter: {categories: {elemMatch: {name: {in: [$name]}}}}) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }`
      
      