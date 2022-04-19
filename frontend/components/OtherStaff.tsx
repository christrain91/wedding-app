import staff from 'data/staff'
import { StaffMember } from '../definitions'
import { getStaffId } from '../util/staff';
import { shuffle, take } from 'lodash'
import Avatar from './Avatar'
import Link from 'next/link';

interface OtherStaffProps {
  className?: string
  currentStaffMember: StaffMember
}

const OtherStaff = (props: OtherStaffProps) => {
  const currentId = getStaffId(props.currentStaffMember)
  const staffToShow = take(shuffle(staff.filter(staffIteratee => getStaffId(staffIteratee) !== currentId)), 5)

  return <div className="bg-slate-400/50 not-prose p-3 w-full rounded-2xl">
    <div className='text-center mb-3'>Other Staff</div>
    <div className="flex place-content-between gap-x-3">
      {staffToShow.map((staffMember) => <SmallStaffMember key={getStaffId(staffMember)} staffMember={staffMember} />)}
    </div>
  </div>
}

interface SmallStaffMemberProps {
  staffMember: StaffMember
}

const SmallStaffMember = (props: SmallStaffMemberProps) => {
  const id = getStaffId(props.staffMember)
  return <Link href={`/staff/${id}`} passHref>
    <div>
      <Avatar className="rounded-full cursor-pointer" staffMember={props.staffMember} size={80} />
    </div>
  </Link>
}

export default OtherStaff