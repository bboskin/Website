import * as React from 'react'
import Layout from '../components/layout'
import PicGrid from '../components/pic_grid'

const CollagePage = () => {
  return (
    <Layout pageTitle="Collages">
     <p>Here are some of my collages from the last few years.</p>

     <p> TODO talk about collaging philosophy </p>

     <p> TODO add collages </p>
     <PicGrid>
     </PicGrid>
    </Layout>
  )
}
export const Head = () => <title>Collages</title>

export default CollagePage
