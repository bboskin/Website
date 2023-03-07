import * as React from 'react'

import { item } from './item.module.css'
const SpaceItem = () => {
  return (
    <iframe
      style={{border: 0}, {width: 100}, {height: 120}}
      src="https://bandcamp.com/EmbeddedPlayer/album=3892515167/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless>
      <a href="https://benboskin.bandcamp.com/album/depression-cave-part-2">
      Depression Cave Part 2 by Ben Boskin
      </a>
    </iframe>
  )
}

const Space = () => {
  return (
    <div className={item}>
    <SpaceItem> </SpaceItem>
    </div>
  )
}

export default Space
