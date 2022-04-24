import { FaArrowLeft } from 'react-icons/fa'
import { useRouter } from 'next/router'

interface BackButtonProps {
  invert?: boolean
}

const BackButton = (props: BackButtonProps) => {
  const router = useRouter()
  const onBackPress = () => {
    router.back()
  }
  return <FaArrowLeft size={32} color={props.invert ? 'white' : 'black'} className='cursor-pointer' onClick={onBackPress} />
}

export default BackButton
