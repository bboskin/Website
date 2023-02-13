import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage} from 'gatsby-plugin-image'

// Step 2: Define your component
const BakingPage = () => {
  return (
    <Layout pageTitle="Yeah, I've baked a fair amount.">
      <p> My mom was a baker only before I was born,
      but the legends of her bringing home bags of day-olds lived
      on throughout my entire childhood. When I was deciding to leave
      grad school and was trying to answer the question: "What's the
      opposite of theoretical computer science research?" the idea
      of baking came to me as a way to truly turn my life upside-down,
      which it did. The hours, the tangibility of the results of my
      labor, combined with the crazy kooks I worked with, showed me a life
      very different than the one I had known as a student.
      </p>

      <p> TODO baker pic</p>

      <p> TODO croissant recipe as a racket function</p>

    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Baking</title>

// Step 3: Export your component
export default BakingPage
