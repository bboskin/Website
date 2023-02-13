// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage} from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome!">
      <p>Thanks for checking out the site. Here's a photo of me as a bright-eyed 22 year old.</p>
      <StaticImage
        alt="Oops."
        src="../images/headshot.jpg"
      />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage
