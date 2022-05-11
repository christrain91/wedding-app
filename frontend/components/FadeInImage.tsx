import { useState } from 'react'
import { ScaleFade } from '@chakra-ui/transition'

interface FadeInImageProps {
  alt: string
  src: string
  className: string
}

const FadeInImage = (props: FadeInImageProps) => {
  const [loaded, setLoaded] = useState(false)

  // eslint-disable-next-line @next/next/no-img-element
  const img = <img {...props} alt={props.alt} onLoad={() => setLoaded(true)} />

  return <ScaleFade in={loaded}>
    {img}
  </ScaleFade>

}

export default FadeInImage