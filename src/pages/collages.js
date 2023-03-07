import * as React from 'react'
import Layout from '../components/layout'
import PicGrid from '../components/pic_grid'

const CollagePage = () => {
  return (
    <Layout pageTitle="Collages">
     <p> Here are some of my collages from the last few years.
     I got into collaging just before the pandemic started,
     inspired by my co-worker and friend Robert Puig Reyes, who would
     make massive (like, wall-sized) collages out of discarded, torn-up
     unfinished/unwanted paintings.
     Over the years my activity making collages has waxed and waned,
     but the collages I have made, at least the ones shown here, respresent
     for me important phases (be they a week or many months long) of my life,
     and I find joy in remembering, through looking at them, how I felt at
     the time of making them. Much like my songs, my collection of
     collages serves as a kind of diary, each collage a time-capsule.
     </p>

     <p> As my collaging method and style developed, my approach to making
     collages was cemented as "cut/glue now, think/interpret later".
     Similarly to how dreams are only interpreted after-the-fact, I enjoyed
     the flurry of making a collage, allowing myself to make an absolute mess
     while I followed an unquestioned instinct that remains largely in my
     subconscious. Then, looking on the image created in that state,
     as if with fresh eyes, I enjoy seeing what is depicted,
     often surprised by how on-the-nose I have described a situation I found
     myself in, or surprised that I have unintentionally represented something
     on my mind.
     </p>

     <p> I've been told (by my same friend Robert) that my collages often look
     unfinished. I'm okay with that description and think that it fits my
     intention. I stop as soon as I feel that an idea has been conveyed.
     Often in life, things happen to us that do not receive the commentary they
     deserve. The things that stand out to us, the objects of our psyche, often
     seem disconnected from each other, and there is little decoration. We
     are regularly forced to move on from unfinished things.
     </p>
     <PicGrid>
     </PicGrid>
    </Layout>
  )
}
export const Head = () => <title>Collages</title>

export default CollagePage
