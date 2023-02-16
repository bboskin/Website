import * as React from 'react'
import Layout from '../components/layout'
import {TalkPlayerA, TalkPlayerB} from '../components/videoplayer'



const ResearchPage = () => {
  return (
    <Layout pageTitle="Yeah I was like... really into functional programming for a while">
     <p>TODO talk about Dan </p>

     <p> TODO links to Scheme paper, repo, video </p>

     <p> Here's a talk I gave in 2018 at the Scheme and Functional programming
     Workshop: </p>
     <TalkPlayerA> </TalkPlayerA>
     <p> And here's a short talk that I gave while an undergrad at IU talking
     about work I did with Jeremy Siek. My talk begins at 15:16.</p>
     <TalkPlayerB> </TalkPlayerB>
     <p> TODO talk about Pete and Northeastern </p>

     <p> TODO link to HCOMP paper </p>


    </Layout>
  )
}

export const Head = () => <title>Research</title>

export default ResearchPage
