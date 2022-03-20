import { StaffMember } from 'definitions'
import { getStaffId } from 'util/staff'
import Avatar from './Avatar'
import Link from 'next/link'

interface StaffCardProps {
  staffMember: StaffMember
  invert: boolean
}

const StaffCard = (props: StaffCardProps) => {
  const staffId = getStaffId(props.staffMember)

  return <Link href={`/staff/${staffId}`} passHref>
    <div className={`w-[250px] cursor-pointer transition-all hover:scale-105 mb-4`}>
      <div className='flex justify-center'>
        <Avatar className="rounded-full" staffMember={props.staffMember} size={200} />
      </div>
      <div className={`text-center prose ${props.invert ? 'prose-invert' : ''} prose-2xl`}>
        <div className="font-bold">
          {props.staffMember.firstname} {props.staffMember.surname}
        </div>
        <div className='light'>
          {props.staffMember.job.title}
        </div>
      </div>
    </div >
  </Link>
}

export default StaffCard