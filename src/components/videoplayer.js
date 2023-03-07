import * as React from 'react'
import YouTube from 'react-youtube'
import { item } from './item.module.css'

const TalkPlayerA = () => {
  return (
    <div className={item}>
    <YouTube videoId='eCI78oYn9Q4' />
    </div>
  )
}

const TalkPlayerB = () => {
  return (
    <div className={item}>
    <YouTube videoId='ZqcBLjZLp-Y' />
    </div>
  )
}

const HouseShow = () => {
  return (
    <div className={item}>
    <YouTube videoId='jCUYc9rJkis' />
    </div>
  )
}

export {TalkPlayerA, TalkPlayerB, HouseShow}
