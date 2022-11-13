import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby';



const ArtistsPage = ({data: {allWpArtist: {edges}}}) => {
  return (
    <Layout pageTitle="Artists of Van Steenbrugge Agency">
     {edges.map((item)=>{
      const artist = item.node.artistMeta;
      return <p key={item.node.id}>{artist.firstName} {artist.lastName}</p>
     })}
    </Layout>
  )
}


export const artistQuery = graphql`
query  {
  allWpArtist {
    edges {
      node {
        id
        artistMeta {
          firstName
          lastName
          artistName
        }
      }
    }
  }
}
`




export default ArtistsPage