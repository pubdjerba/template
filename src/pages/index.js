import * as React from "react"
import { graphql,  Link,  useStaticQuery } from 'gatsby'
import ActiviteList from "../components/activite-list"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {

const data = useStaticQuery(graphql`
query {
  allStrapiActivite {
    edges {
      node {
        title
        titleShort
        price
        slug
        id
        
        promotion
       cover_1 {
         id
       }
      }
    }
  }
}

`);
const activites = data.allStrapiActivite.edges

return(
  <Layout>
  <Seo title="Home" />

  <div><h2>Categorie:</h2>
  <ul>
    <li><Link to={"/categories/aventures"}>Aventure</Link></li>
    <li><Link to={"/categories/decouvertes"}>découvertes</Link></li>
    <li><Link to={"/categories/en-famille"}>en-famille</Link></li> 
    <li><Link to={"/categories/sports-nautiques"}>Sports nautique</Link></li> 
    <li><Link to={"/categories/meilleurs-choix"}>meilleurs choix</Link></li>
  </ul>
  
  </div>
<hr/>
    <ActiviteList activites = {activites}  />
   
  </Layout>


);
}
  
export default IndexPage