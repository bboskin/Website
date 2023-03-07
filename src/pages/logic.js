import * as React from 'react'
import Layout from '../components/layout'
import {TalkPlayerA, TalkPlayerB} from '../components/videoplayer'



const ResearchPage = () => {
  return (
    <Layout pageTitle="Computer Science Research Projects">

     <h3> Research at Indiana University</h3>
     <p> In my time at IU, I was appropriately influenced
     by the research group in the area of Programming Languages. I grew
     enamored with functional programming and the Scheme language (more specifically with Racket), as well
     as dependent types and logic programming. I worked on two research projects
     during my senior year, both of which tied these latter two interests together.
     </p>

     <h4> Implicit Arguments for Pie </h4>
     <p> The first project was done with advising from Jeremy Siek.
     We added the feature of implicit arguments to the minimal
     dependently-typed language Pie, which I was
     learning about in a course I was taking from Dan Friedman. Pie is a
     language created by Dan and then-postdoc David Thrane Christiansen, which
     is described in the wonderful 'little' book, The Little Typer.
     Below is the short talk that I gave at a 'PL Wonks' meeting,
     talking about this work. My talk begins at 15:16.</p>
     <TalkPlayerB> </TalkPlayerB>

     <h4> Implementing Pie's typesystem and evaluation as a relation </h4>
     <p> The other research project began in the spring of my
     senior year and bled into the summer, a now-for-me legendary summer where I spent many days
     holed up with Dan Friedman at his home office, working on revising his &
     David's book, as well as working on our project, as the two were intertwined.
     Our goal, in essence, was
     straightforward, but the problem we posed to ourselves turned out to be
     more sophisticated than we expected, and the summer ended up offering
     a nice research story. For those interested, here is our paper which describes the
     details, and below that is the talk I gave at the Scheme and Functional
     Programming Workshop, hosted by ICFP, in 2018.</p>

     <a href="http://schemeworkshop.org/2018/Boskin_Ma_Christiansen_Friedman.pdf"
        target="_blank">
     SFPW Paper
     </a>

     <TalkPlayerA> </TalkPlayerA>

     <p> The two projects I have described above both leveraged the tool miniKanren,
     a minimal yet powerful prolog-like logic programming language. Learn more
     about it <a href="https://minikanren.org" target="_blank">here</a>.

     </p>

     <h3> Research at Northeastern University </h3>

     <p>  Despite my short time at NU, I was able to work on a cool research idea,
     working with fellow PhD student Andrew Walter, and faculty members Pete
     Manolios and Seth Cooper. Together, we designed and implemented a 'game'
     where users reasoned about short iterative programs, with the goal of
     crowdsourcing player-discovered invariants, and using them to prove
     correctness properties about the programs in the game.
     Below is the paper which we published at HCOMP, the Conference on
     Human Computation and Crowdsourcing, in 2019.</p>

     <a href="https://www.ccs.neu.edu/home/pete/pub/hcomp-2019.pdf"
        target="_blank">
     HCOMP Paper
     </a>

    <h3> Research during the Pandemic </h3>
    <p> We didn't get a paper out of it, but this project means just as much to
    me as my more 'official' ones. I love finite-state automata, and early in
    2020 began a system to
    simulate running them as a passion project. I got the thing working,
    and was able to convert grammars (REs, CFGs) into machines (DFAs, NFAs,
    PDAs), and had minimization, and machine operations like intersection and
    union and it felt like a cool project, but beyond my own playing I had
    nothing really to do with it. </p>
    <p> Enter Jack Bastian, my long-time high school friend, who had gotten into
    data science. He sent me a paper that he had found where a team leveraged
    a DFA to generate map-reduce style programs or, 'features', which were then
    used to train a model to predict categories of values in the dataset.
    He handled the ML stuff and I generated the features, and it was fun to repeat
    the work of others -- that's science, right? <a href="https://github.com/bboskin/Log-Data-Feature-Gen"
       target="_blank">Here's</a> our fairly chaotic GitHub
    repo if you want to check it out.
    </p>
    </Layout>
  )
}

export const Head = () => <title>Research</title>

export default ResearchPage
