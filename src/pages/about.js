// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { picture } from '../components/picture.module.css'
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">

      <p>
      I was born in Oakland, CA, and was born and raised in the Bay Area, going to
      Albany schools. I grew up with two wonderful parents until they divorced
      when I was five, and then I grew up with two wonderful parents just
      one at a time. I have an older sister Natalie who I feel quite close
      to and we all live here in the Bay Area now isn't that great!?
      </p>

      <p>
      I grew up wanting to be a baseball player and then wanting to be a
      scientist, and then when I graduated high school I went to
      Indiana University as a Trombone Performance major at the
      Jacobs School of Music. Realizing that I had done this, I decided to
      leave the music school after two semesters and got involved in the
      Programming Languages research area in the Computer Science department.
      (More details on the 'Research' page.) I ended up finishing with
      a B.S. in Computer Science, and with minors in Math, Music, and French.
      I'm glad that I did the French minor but in hindsight, I wish that I'd done
      a double-major in Math like Kent Orr told me I should.
      </p>

      <p>
      After my undergrad I moved to Boston to start a PhD, as a researcher in the
      Formal Methods group at Northeastern University, working under prof.
      Pete Manolios. Deciding that I needed to see what lay outside of academia
      before 'marrying' computer science, I left Northeastern after one
      semester. (More details on the 'Research' page.)
      I then got a job at a Bakery in Somerville (more
      details on the 'Baking' page), where I ended up
      happily staying for almost three years.
      </p>

      <p>
      In the fall of 2021 I moved back to the Bay Area, which is when my life
      seemingly began. The time I spent in Boston feels now like it was lived
      by a younger man, and moving home brought on
      a longer-term mindset for me. I worked several jobs in 2022, trying to figure out what
      felt right. Now it's 2023 (at the time of writing), we'll see what comes
      next!
      </p>

      <p> Thanks for checking out the website! Here's a picture of me with my
      wonderful mother, Trudi, and my
      ex-partner Lane, I'll let you guess who is who. We're all happy and smiley
      in the picture, so it seemed like a nice choice.
      </p>

      <StaticImage className={picture}
        src="../images/lanemomben.jpeg"
        alt="happy ppl"
        width = "400"
      />

      <p>
      What else is there to say? I am learning who I am,
      and how to be okay with him.
      </p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage
