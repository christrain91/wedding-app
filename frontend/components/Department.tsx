import { Department } from 'definitions'
import staffMembers from 'data/staff'
import StaffCard from './StaffCard'
import { getStaffId } from 'util/staff'
import { sortBy } from 'lodash'

interface DepartmentProps {
  department: Department
}

const Department = (props: DepartmentProps) => {
  const { department } = props
  const departmentStaff = sortBy(staffMembers.filter(staffMember => staffMember.job.department.id === department.id), 'displayOrder')

  return <div className="mb-5 w-full p-6 rounded-xl shadow" style={{
    backgroundColor: department.background,
    color: department.fontColour || 'white'
  }}>
    <h1 className="bold text-4xl mb-8 p-3 text-center rounded-xl" >{department.title}</h1>
    <div className='flex flex-wrap gap-6 align-middle justify-center'>
      {departmentStaff.map(staffMember => <StaffCard key={getStaffId(staffMember)} staffMember={staffMember} />)}
    </div>
  </div>
}

export default Department