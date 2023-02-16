import * as React from 'react'
import Layout from '../components/layout'
import {TalkPlayerA, TalkPlayerB} from '../components/videoplayer'



const ResearchPage = () => {
  return (
    <Layout pageTitle="Yeah I was like... really into functional programming for a while">

     <h3> Research at Indiana University</h3>
     <p> In my time at IU, I was appropriately influenced
     by the stong research group in the are of Programming Languages. I grew
     enamored with functional programming and the Scheme language, as well
     as dependent types and logic programming. I worked on two research projects
     during my senior year, which tied these latter two interests together</p>

     <p> The first project I worked on was done with advising from Jeremy Siek.
     We added the feature of implicit arguments to the minimal
     dependently-typed language Pie, which I was
     learning about in a course I was taking from Dan Friedman. Pie is a
     language created by Dan and then-postdoc David Thrane Christiansen, which
     is described wonderfully in the book The Little Typer. When writing
     in dependendently-typed languages, function calls become tiresome because
     polymorphic functions (and most interesting functions we write are
     polymorphic) require many boiler-plate arguments to be instantiated. For
     example, to use a function that appends two vectors that hold type A and
     have lengths k and j, in addition to passing the two vectors, one must pass
     A, k, and j. Implicit arguments provide ease to calling such functions,
     and allow the user to tell the interpreter when arguments should be
     (fairly) trivially discovered simply from the other arguments provided,
     and/or the context in which the function is called.
     </p>

     <p> Using the relational language miniKanren to infer values that satisfied
     type constraints at function application, Jeremy and I added implicit
     arguments to Pie. Below is the short talk that I gave at a 'PL
     Wonks' meeting, talking about this work. My talk begins at 15:16.</p>
     <TalkPlayerB> </TalkPlayerB>

     <p> The other research project I worked on began in the spring of my
     senior year and bled into the summer, a summer where I spent many days
     holed up with Dan Friedman at his home office, working on revising his &
     David's book, and working on our project. Our goal, in essence, was
     straightforward: Faithfully implement the paper-and-pencil type system of
     Pie as a relation, and ensure that the resulting relation behaved as
     expected. Because of the size of the type system, however, as well as
     a few certain rules which were essential but computationally problematic,
     we wound up needing to perform a more specialized kind of search, and
     this led us to design a new conditional framework for the language
     miniKanren. For those interested, here is our paper which describes the
     details, and below that is the talk I gave at the Scheme and Functional
     Programming Workshop, hosted by ICFP, in 2018.</p>

     <a href="http://schemeworkshop.org/2018/Boskin_Ma_Christiansen_Friedman.pdf" target="_blank">
     SFPW Paper
     </a>

     <TalkPlayerA> </TalkPlayerA>

     <h3> Research at Northeastern University </h3>

     <p>  Despite my short time at NU, I was able to work on a cool research idea,
     working with fellow PhD student Andrew Walter, and faculty members Pete
     Manolios and Seth Cooper. Together, we designed and implemented a 'game'
     where users reasoned about short programs, particularly ones constisting
     of a single iterative loop performing arithmetic on numbers,
     with the goal of using the aggregate of submitted statements to prove
     correctness properties about those programs. There had been prior work by
     researchers (DeRossi et. al; CHI 2018) creating such a game, and in that
     game the decision was made to hide the programs themselves and simplify
     the task by only showing trace logs of all the numbers at each iteration
     of the loop. Our game, however, showed the code, with our hypothesis being
     that by showing code we would receive higher-quality statements from users,
     and would thus be able able to deduce correctness properties faster. Below
     is the paper which we published at HCOMP, the Conference on Human
     Computation and Crowdsourcing in 2019.</p>

     <a href="https://www.ccs.neu.edu/home/pete/pub/hcomp-2019.pdf" target="_blank">
     HCOMP Paper
     </a>


    </Layout>
  )
}

export const Head = () => <title>Research</title>

export default ResearchPage
