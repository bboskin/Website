import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Space from '../components/bandcamp'
import { HouseShow } from '../components/videoplayer'

const MusicPage = () => {
  return (
    <Layout pageTitle="Music">
     <p> My roommate Graeme Bates and I have a project that we're working on
     getting off the ground... we are an indie rock band out of El Cerrito called
     Lost Looks. When we record we both do a bit of everything (but Graeme
     handles most of the producing), when we play live he plays guitar and sings
     and I play drums. We write and arrange together and have a blast doing so.
     Check us out on Spotify! Here's our only live recording (so far!) from
     a house show we put on back in 2022 </p>

     <HouseShow> </HouseShow>

     <p> For a few years now I have also been recording my own stuff. I like to
     think of my stuff, at its best, as a cross between The Velvet Underground
     and Yes, which are ostensibly polar opposites but sums up my influences
     pretty well. I like a raw but big sound, and use guitars, synthesizers,
     vocals, and drums to get there. I write, play, and produce all by myself
     for my solo stuff. Here's a track off my bandcamp, click
     the linik if you want to hear more!</p>

     <Space> </Space>


    </Layout>
  )
}

export const Head = () => <title>Music</title>

export default MusicPage
