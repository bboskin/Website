// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">

      <p>
      I was born in Oakland, CA, which is to say that's where the stork dropped
      me, or whatever. I grew up with two wonderful parents until they divorced
      when I was five, and then I grew up with two wonderful parents, but
      only one at a time. I have an older sister Natalie who I feel quite close
      to, but we could talk more and we tell that to each other all the time.
      I am told that I put walls up between myself and others, but the way
      I see it is that I live my life as an open book, one only needs to ask.
      If you're here reading on this site, I figure you're asking a little bit.
      </p>

      <p>
      I grew up wanting to be a baseball player and then wanting to be a
      scientist, and then when I graduated high school I went to
      Indiana University as a Trombone Performance major at the well-regarded
      Jacobs School of Music. Realizing that I had done this, I decided to
      leave the music school after two semesters and got involved in the
      Programming Languages research area in the Computer Science. (More details
      on the results of this on the 'Research' page.) I ended up finishing widt
      a B.S. in Computer Science, and with minors in Math, Music, and French.
      I'm glad that I did the French minor but in hindsight, I wish that I'd done
      a double-major in Math like Kent Orr told me that I should.
      </p>

      <p>
      After undergrad I moved to Boston to start a PhD, as a researcher in the
      Formal Methods group at Northeastern University, working under prof.
      Pete Manolios. Realizing that I had done this, I left the program after 1
      semester. (More details on the results of this on the 'Research' page.)
      To finish out my lease, I got a job at a Bakery in Somerville (more
      details on the results of this on the 'Baking' page), where I ended up
      happily staying for almost three years.
      </p>

      <p>
      Then I moved back to the Bay Area in the fall of 2021, and my life
      seemingly began. I worked several jobs in 2022, trying to figure out what
      felt right. Now it's 2023 (at the time of writing), we'll see what comes
      next!
      </p>

      <p> Here's a picture of me with my wonderful mother, Trudi, and my
      ex-girlfriend Lane, I'll let you guess who is who. I lived with Lane in
      Boston and we broke up but ended on good terms so it's totally not weird
      to have a picture of them here. These two people know me more intimately
      than anyone, so if you are unsatisfied with the information here,
      feel free to reach out to them. I won't help you but go for it.
      </p>

      <StaticImage
        src="../images/lanemomben.jpeg"
        alt="happy ppl"
        width = "500"
      />

      <p>
      What else is there to say? I am learning who I am, and how to be okay with that.
      </p>
    </Layout>
  )
}

export const Head = () => <title>About</title>

// Step 3: Export your component
export default AboutPage
