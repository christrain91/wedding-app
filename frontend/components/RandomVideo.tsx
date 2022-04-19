import Player from 'react-player/youtube'
import videos from 'data/videos'
import { random } from 'lodash'
import useWindowWidth from 'react-hook-use-window-width'

interface RandomVideoProps {
  className?: string
}

const RandomVideo = (props: RandomVideoProps) => {
  const videoId = videos[random(0, videos.length - 1)]
  const url = `https://www.youtube.com/watch?v=${videoId}`

  return <div className={props.className}>
    <Player playing loop muted url={url} controls />
  </div>
}

export default RandomVideo
