
import Avatar from './Avatar'
import useCurrentStaffMember from '../hooks/useCurrentStaffMember'
import staff from 'data/staff'
import { Nav } from 'react-bootstrap'
import { useRouter } from 'next/router'

const Navigation = () => {
  const { currentStaffMember } = useCurrentStaffMember()

  const staffMember = currentStaffMember

  if (!staffMember) return null

  return <div className="fixed bottom-16 h-[80px] w-full p-6 flex flex-row justify-center ">
    <div className="flex flex-row justify-center bg-white/80  shadow-xl rounded-xl h-32 w-full max-w-[600px]">
      <div className="flex flex-col fixed bottom-1 content-center place-content-center align-middle items-center">
        <Avatar className="rounded-full shadow-xl not-prose mb-0" staffMember={staffMember} size={100} />
        <h3 className="mt-1 font-bold pb-2">Signed in as {staffMember.firstname} {staffMember.surname}</h3>
      </div>
    </div>
  </div >
}

export default Navigation 