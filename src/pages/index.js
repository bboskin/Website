// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage} from 'gatsby-plugin-image'
import { picture } from '../components/picture.module.css'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome!">
    <p> Thanks for coming to my website! I have had a few career paths, and have
    picked up some hobbies along the way, and I talk about/show them here. I
    hope you enjoy! I am not the most slick web developer, as is probably evident.
    </p>
    <p>Here's the only headshot I've ever had taken.
    Looking at it now I kinda have no idea what he's thinking, but we (for now)
    look pretty similar so hopefully that gives you an idea. </p>
      <StaticImage className={picture}
        alt="Oops."
        src="../images/headshot.jpeg"
      />

    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage
