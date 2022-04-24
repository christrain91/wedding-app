import { Department } from 'definitions'
import staffMembers from 'data/staff'
import StaffCard from './StaffCard'
import { getStaffId } from 'util/staff'
import { sortBy } from 'lodash'
import Color from 'color'

interface DepartmentProps {
  department: Department
  className?: string
}

const Department = (props: DepartmentProps) => {
  const { department } = props
  const departmentStaff = sortBy(staffMembers.filter(staffMember => staffMember.job.department.id === department.id), 'displayOrder')

  const background = department.background

  const color = Color(background)
  const invert = color.isDark()

  return <div className={`pb-10 ${props.className}`} style={{ background: department.background }}>
    <div className='flex flex-col align-middle justify-center mb-15'>
      <div className={`prose self-center ${invert ? 'prose-invert' : ''}`}>
        <h1 className="pb-10" >{department.title}</h1>
      </div>
    </div>
    <div className='flex flex-wrap gap-12 align-middle justify-center'>
      {departmentStaff.map(staffMember => <StaffCard invert={invert} key={getStaffId(staffMember)} staffMember={staffMember} />)}
    </div>
  </div >
}

export default Department