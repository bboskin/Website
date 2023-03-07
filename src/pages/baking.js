import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { picture } from '../components/picture.module.css'
// Step 2: Define your component
const BakingPage = () => {
  return (
    <Layout pageTitle="Baking? Why?">
      <p> My mom was a baker only before I was born,
      but the legends of that era of her life, and her
      bringing home bags of day-olds lived on throughout my entire
      childhood. When I was deciding to leave grad school I was
      looking for the opposite of theoretical computer science. The idea
      to bake came to me with the excitement of something that would
      turn my life upside-down, which it did. The hours,
      the tangibility of the results of my labor, combined with the
      crazy kooks I worked with, showed me a life very different than
      the one I had known as an academic.
      </p>

      <p> At my first baking job, in Somerville, MA, I got
      really into making laminated pastries, i.e. croissants, pain au chocolate,
      etc. The process is tedious and tiresome, and requires devotion to absurd
      concepts: a pliable block of butter; a honeycomb of buttery dough;
      microscopic layers. I was going through my first break up with a
      live-in partner then. Sometimes we need something to be devoted to.
      </p>

      <p>
      Here's a picture of some of my co-workers and I from that first job at
      Forge Baking Company.
      </p>
      <StaticImage className={picture}
        src="../images/forge_fam.jpeg"
        alt="Syd, you fucked up"
        width="500"
      />

      <p>
      ....and here are some beautiful, raw croissants I made one day at work!
      </p>
      <StaticImage className={picture}
        src="../images/croissants.jpeg"
        alt="overproofed"
        width="400"
      />
      <p> Finally, I've refined an at-home croissant recipe which
      I've made a few times, adapting from the Forge recipe (don't tell Jen!).
      There are no instructions. And, to really make things difficult,
      it's just a Racket script with a function that gives you a recipe
      if you tell it how many batons you want to make. I recommend
      mixing one baton at a time if you are using a standard home KitchenAid.
      If someone ever reaches out to me saying they want a full recipe with
      instructions then I will make one. Here you go, have fun! </p>
      <a href='../files/croissants.rkt' download>Click to download "recipe"!</a>

    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Baking</title>

// Step 3: Export your component
export default BakingPage
