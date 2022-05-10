import type { NextPage } from 'next'
import departments from 'data/departments'
import Department from 'components/Department'

const Home: NextPage = () => {
  const firstDeparment = departments[0]
  // eslint-disable-next-line @next/next/no-img-element
  const logo = <img src="/JurassicParkLogo.png" alt="main logo" />
  return <div className='flex w-full flex-col justify-center' style={{ background: firstDeparment.background }}>
    <div className="p-6 flex justify-center ">
      {logo}
    </div>
    {departments.map((department, index) => {
      const isFirst = index === 0
      const isLast = index === departments.length - 1
      return <Department className={`${isLast ? 'pb-[160px]' : 'pb-10'} ${isFirst ? 'pt-2' : 'pt-10'}`} key={department.title} department={department} />
    })}
  </div>
}

export default Home