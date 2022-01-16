import { StaffMember } from 'definitions'
import { getStaffId } from 'util/staff'
import Avatar from './Avatar'
import Link from 'next/link'

interface StaffCardProps {
  staffMember: StaffMember
  size: number
}

const StaffCard = (props: StaffCardProps) => {
  const staffId = getStaffId(props.staffMember)

  return <Link href={`/staff/${staffId}`} passHref>
    <div className={`p-3 w-[${props.size + 10}] w-[250px] cursor-pointer shadow-md transition-all bg-slate-100/50 hover:bg-slate-100/75 hover:scale-105 rounded-xl`}>
      <div className='flex justify-center'>
        <Avatar className="rounded-full" staffMember={props.staffMember} size={props.size} />
      </div>
      <figcaption className="font-medium text-center" >
        <div className="font-bold text-cyan-600">
          {props.staffMember.firstname} {props.staffMember.surname}
        </div>
        <div className='light'>
          {props.staffMember.job.title}
        </div>
      </figcaption>
    </div >
  </Link>
}

export default StaffCard