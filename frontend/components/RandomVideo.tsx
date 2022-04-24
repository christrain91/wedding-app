import Player from 'react-player/youtube'
import videos from 'data/videos'
import { random } from 'lodash'
import useWindowWidth from 'hooks/useWindowWidth'
import { useState, useEffect } from 'react'

interface RandomVideoProps {
  className?: string
}

const RandomVideo = (props: RandomVideoProps) => {
  const windowWidth = useWindowWidth()
  const [[width, height], setSize] = useState<[width: number, height: number]>([500, 500])
  const videoId = videos[random(0, videos.length - 1)]
  const url = `https://www.youtube.com/watch?v=${videoId}`
  const aspectRatio = 16 / 9

  useEffect(() => {
    const width = windowWidth * 0.8
    setSize([width, width / aspectRatio])
  }, [windowWidth, aspectRatio])


  return <div className={props.className} style={{ width, height }}>
    <Player playing loop muted url={url} controls width={width} height={height} />
  </div>
}

export default RandomVideo
