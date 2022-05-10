
import Avatar from './Avatar'
import useCurrentStaffMember from '../hooks/useCurrentStaffMember'

import { useRouter } from 'next/router'
import NavItem from './NavItem'
import { getStaffId } from 'util/staff'

const Navigation = () => {
  const { currentStaffMember, loading } = useCurrentStaffMember()
  const router = useRouter()

  const staffMember = currentStaffMember

  if (!loading && !staffMember) {
    router.push('/unauthorised')
  }

  if (!staffMember) return null

  const onAvatarClick = () => {
    router.push('/staff/[id]', `/staff/${getStaffId(staffMember)}`)
  }

  return <div className="fixed bottom-16 h-[80px] w-full pl-1 pr-1 pb-8 flex flex-row justify-center z-50">
    <div className="flex flex-row justify-between bg-white/90 shadow-xl rounded-xl rounded-b-none relative bottom-[-18px] h-32 w-full max-w-[600px] p-3 gap-x-2">
      <NavItem label="Staff List" href="/" icon="staff" />
      <div className="flex flex-col content-center relative top-[-30px] justify-self-center place-content-center align-middle items-center">
        <Avatar className="rounded-full cursor-pointer shadow-xl not-prose mb-0" onClick={onAvatarClick} staffMember={staffMember} size={100} />
        <h3 className="mt-1 font-bold pb-2 text-center">{staffMember.firstname} {staffMember.surname}</h3>
      </div>
      <NavItem label="Well Wishes" href="/well_wishes" icon="well_wishes" />
    </div>
  </div >
}

export default Navigation 