import React from "react"
import { graphql } from "gatsby"
export default function Component({data}) {
  return <div>{data.strapiActivite.title}</div>
}

export const query = graphql`
  query($id: String) {
    strapiActivite (id: {eq: $id}) {
         title
          slug
          id
        }
      
  }
`