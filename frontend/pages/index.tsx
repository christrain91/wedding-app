import type { NextPage } from 'next'
import departments from 'data/departments'
import Department from 'components/Department'
import Image from 'next/image'

const Home: NextPage = () => {
  const firstDeparment = departments[0]
  return <div className='flex w-full flex-col justify-center' style={{ background: firstDeparment.background }}>
    <div className="p-6 flex justify-center ">
      <Image src="/JurassicParkLogo.png" className='shadow-xl' alt="main logo" width={491 / 1.5} height={370 / 1.5} />
    </div>
    {departments.map((department, index) => {
      const isFirst = index === 0
      const isLast = index === departments.length - 1
      return <Department className={`${isLast ? 'pb-[160px]' : 'pb-10'} ${isFirst ? 'pt-2' : 'pt-10'}`} key={department.title} department={department} />
    })}
  </div>
}

export default Home