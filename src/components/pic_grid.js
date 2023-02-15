import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {
  Flower,
  Boat,
  AmongTheStars,
  AtThePark,
  Entrance,
  HoldingOn,
  OutOnABoat,
  Road,
  SelfPortrait,
  WatchingItBurn,
  Apples,
  Bird,
} from './pic.js'
import {
 container,
} from './pic_grid.module.css'

const PicGrid = () => {
  return (
    <div className={container}>
    <Flower> </Flower>
    <AmongTheStars> </AmongTheStars>
    <Apples> </Apples>
    <Bird> </Bird>
    <Entrance> </Entrance>
    <AtThePark> </AtThePark>
    <HoldingOn> </HoldingOn>
    <Boat> </Boat>
    <Road> </Road>
    <SelfPortrait> </SelfPortrait>
    <WatchingItBurn> </WatchingItBurn>
    </div>

  )
}

export default PicGrid
