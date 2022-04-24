import type { NextPage } from 'next'
import departments from 'data/departments'
import Department from 'components/Department'
import Image from 'next/image'

const Home: NextPage = () => {
  const firstDeparment = departments[0]
  return <div className='flex w-full flex-col justify-center' style={{ background: firstDeparment.background }}>
    <div className="p-6">
      <Image src="/JurassicParkLogo.png" alt="main logo" width={491} height={370} />
    </div>
    {/* <div className="prose p-3">
      <h1 className="" >STAFF LIST</h1>
    </div> */}
    {departments.map((department, index) => {
      const isFirst = index === 0
      const isLast = index === departments.length - 1
      return <Department className={`${isLast ? 'pb-[160px]' : ''} ${isFirst ? 'pt-2' : 'pt-10'}`} key={department.title} department={department} />
    })}
  </div>
}

export default Home