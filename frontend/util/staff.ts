import { StaffMember } from 'definitions'
import staff from 'data/staff'

export function getStaffMemberFromId(id: string) {
  for (let staffMember of staff) {
    if (id === getStaffId(staffMember)) {
      return staffMember
    }
  }
}

export function getStaffId(staffMember: StaffMember) {
  return `${staffMember.firstname}_${staffMember.surname}`.toLowerCase()
}
