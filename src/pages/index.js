// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage} from 'gatsby-plugin-image'
import { picture } from '../components/picture.module.css'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome!">
    <p> Thanks for coming to my website! I have
    some hobbies, and have had a few career paths, and I talk about/show them here. I
    hope you enjoy!
    </p>
    <p>Here's a pretty nice picture of me, the only headshot I've ever had taken.
    It's a few years oldl, so looking at him now I kinda have no idea what he's thinking, but he
    looks a lot like me so hopefully that gives you an idea. </p>
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
