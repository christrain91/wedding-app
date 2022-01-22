import staff from 'data/staff'
import { StaffMember } from '../definitions'
import { getStaffId } from '../util/staff';
import { shuffle, take } from 'lodash'
import Avatar from './Avatar'
import Link from 'next/link';

interface OtherStaffProps {
  currentStaffMember: StaffMember
}

const OtherStaff = (props: OtherStaffProps) => {
  const currentId = getStaffId(props.currentStaffMember)
  const staffToShow = take(shuffle(staff.filter(staffIteratee => getStaffId(staffIteratee) !== currentId)), 5)

  return <div className="grid grid-rows-1 grid-cols-5">
    {staffToShow.map((staffMember) => <SmallStaffMember key={getStaffId(staffMember)} staffMember={staffMember} />)}
  </div>
}

interface SmallStaffMemberProps {
  staffMember: StaffMember
}

const SmallStaffMember = (props: SmallStaffMemberProps) => {
  const id = getStaffId(props.staffMember)
  return <Link href={`/staff/${id}`} passHref>
    <div>
      <Avatar className="rounded-full" staffMember={props.staffMember} size={100} />
    </div>
  </Link>
}

export default OtherStaff