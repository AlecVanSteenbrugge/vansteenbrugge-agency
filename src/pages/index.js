import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Welcome to Van Steenbrugge Agency!">
      <p>Lorem ipsum</p>
      <StaticImage
        alt="Pillars of Creation- jws!"
        src="../images/PoCJWS.png"
      />
      </Layout>
    </main>
  )
}

export default IndexPage