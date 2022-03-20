import type { NextPage } from 'next'
import departments from 'data/departments'
import Department from 'components/Department'

const Home: NextPage = () => {
  return <div className='flex w-full flex-col justify-center'>
    {departments.map(department => <Department key={department.title} department={department} />)}
  </div>
}

export default Home