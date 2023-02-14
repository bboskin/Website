import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import watching from '../images/watching_it_burn.jpeg'
import selfportrait from '../images/self_portrait.jpeg'
import holdingon from '../images/holding_on.jpeg'
import amongthestars from '../images/among_the_stars.jpeg'

const MAX_HEIGHT = "500"
const Flower = () => {
  return (
    <div>
    <StaticImage
      src="../images/flowers.jpeg"
      alt="Oops."
      height = {MAX_HEIGHT}
    />
    <h4> "Flowers" </h4>
    </div>


  )
}

const Boat = () => {
  return (
    <div>
    <StaticImage
      src="../images/out_on_a_boat.jpeg"
      alt="Oops."
      height = {MAX_HEIGHT}
    />
    <h4> "Out On A Boat" </h4>
    </div>


  )
}

const AmongTheStars = () => {
  return (
    <div>
    <img
      src={amongthestars}
      alt="Oops."
      height = {MAX_HEIGHT}
    />
    <h4> "Among The Stars" </h4>
    </div>


  )
}

const AtThePark = () => {
  return (
    <div>
    <StaticImage
      src="../images/at_the_park.jpeg"
      alt="Oops."
      height = {MAX_HEIGHT}
    />
    <h4> "At The Park" </h4>
    </div>


  )
}

const Entrance = () => {
  return (
    <div>
    <StaticImage
      src="../images/entrance.jpeg"
      alt="Oops."
      height = {MAX_HEIGHT}
    />
    <h4> "Entrance" </h4>
    </div>


  )
}

const HoldingOn = () => {
  return (
    <div>
    <img
      src={holdingon}
      alt="Oops."
      height = {MAX_HEIGHT}
    />
    <h4> "Holding On" </h4>
    </div>


  )
}

const Road = () => {
  return (
    <div>
    <StaticImage
      src="../images/road.jpeg"
      alt="Oops."
      height = {MAX_HEIGHT}
    />
    <h4> "Road" </h4>
    </div>


  )
}

const SelfPortrait = () => {
  return (
    <div>
    <img
      src={selfportrait}
      alt="Oops."
      height = {MAX_HEIGHT}
    />
    <h4> "Self Portrait" </h4>
    </div>


  )
}

const WatchingItBurn = () => {
  return (
    <div>
    <img
      src={watching}
      alt="Oops."
      height = {MAX_HEIGHT}
    />
    <h4> "Watching It Burn" </h4>
    </div>


  )
}



export {
  Flower,
  Boat,
  AmongTheStars,
  AtThePark,
  Entrance,
  HoldingOn,
  Road,
  SelfPortrait,
  WatchingItBurn
}
