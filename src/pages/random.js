import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const RandomPage = () => {
  return (
    <Layout pageTitle="Some Random Stuff">
     <p>Neither of us knows why you came here to my
     'random stuff' page, but we're about to find out.</p>

     <p> One of my long-time favorite artists to learn songs by is Bob Dylan,
     maybe you know of him. In case you came to this page hoping I'd be able to link you
     to some killer Dylan chords, here you go!
     </p>

     <a href="https://www.dylanchords.com/" target="_blank">
     Excellent Bob Dylan song chord resource
     </a>

     <p>
     I've been seeing a therapist, which if you know me well you probably know.
     Her name is Cari Kaufman, and she's fucking awesome and is the absolute homie. If
     you're in the Bay Area and are looking to start talking to someone,
     I couldn't reccommend her more highly. Idk if she's taking clients right
     now, obviously, because we don't really talk about that, but here's her
     website. Mention my name I dare you.
     </p>
     <p>
     Also her site has these cool shapes (I think they are meant to be piles
     of rocks but it's pretty abstract, see for yourself) that change slightly
     throughout the website, and they are pretty mind-blowing. TL;DR the site
     is worth a visit.
     </p>

     <a href="https://www.carikaufman.com/" target="_blank">
     Cari's page
     </a>

     <p> TODO top k albums </p>

     <p> TODO message me for mental health stuff </p>

    </Layout>
  )
}

export const Head = () => <title>Random</title>

export default RandomPage
