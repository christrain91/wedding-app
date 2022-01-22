import type { NextPage } from 'next'
import departments from 'data/departments'
import Department from 'components/Department'

const Home: NextPage = () => {
  return <div className="p-3 md:p-5 xl:p-10">
    <div className="h[500px] bg-red bg-fixed w-full" style={{ backgroundImage: '/dino.jpg' }}></div>
    <div className='flex flex-col justify-center'>
      {departments.map(department => <Department key={department.title} department={department} />)}
    </div>
  </div >
}

export default Home