import type { NextPage } from 'next'
import departments from 'data/departments'
import Department from 'components/Department'

const Home: NextPage = () => {
  return <div className='flex w-full flex-col justify-center'>
    {departments.map((department, index) => {
      const isLast = index === departments.length - 1
      return <Department className={isLast ? 'pb-[160px]' : ''} key={department.title} department={department} />
    })}
  </div>
}

export default Home