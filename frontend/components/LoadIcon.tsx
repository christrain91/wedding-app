import { FaSpinner } from 'react-icons/fa'

interface LoadIconProps {
  className?: string
}

const LoadIcon = (props: LoadIconProps) => {
  return <div className={`${props.className || ''} w-full flex items-center justify-center`}>
    <FaSpinner size={50} className="text-white animate-spin" />
  </div> 
}

export default LoadIcon