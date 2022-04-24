import Image from 'next/image'
import { useEffect, useState } from 'react'
import { times } from 'lodash'

const NotFound = () => {
  const [count, setCount] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [setCount])

  return <div className="flex justify-center w-full align-middle items-center h-screen border-2 bg-gray-400 overflow-y-auto gap-x-2 gap-y-2 flex-wrap">
    {times(count, i => <Image src="/MagicWord.gif" alt="Magic Word" width={200} height={200} className="border-3 border-r-0 border-gray-400" key={i} />)}
  </div>
}

export default NotFound