import { useEffect, useState, useCallback } from 'react'
import { StaffMember } from '../definitions'
import { getStaffByUUID } from '../util/staff'

const key = 'CURRENT_STAFF_MEMBER_UUID'

const useCurrentStaffMember = () => {
  const [loading, setLoading] = useState(true)
  const [currentStaffMember, setCurrentStaffMember] = useState<
    StaffMember | undefined
  >()

  const getCurrentStaffMemberUUID = useCallback(() => {
    const uuid = localStorage.getItem(key)
    return uuid
  }, [])

  const setCurrentStaffMemberUUID = (uuid: string) => {
    localStorage.setItem(key, uuid)
    const staffMember = getCurrentStaffMember()
    return staffMember
  }

  const getCurrentStaffMember = useCallback(() => {
    const uuid = getCurrentStaffMemberUUID()
    if (!uuid) return
    const staffMember = getStaffByUUID(uuid)
    setCurrentStaffMember(staffMember)
    return staffMember
  }, [setCurrentStaffMember, getCurrentStaffMemberUUID])

  useEffect(() => {
    getCurrentStaffMember()
    setLoading(false)
  }, [getCurrentStaffMember])

  return {
    currentStaffMember,
    getCurrentStaffMember,
    setCurrentStaffMemberUUID,
    loading
  }
}

export default useCurrentStaffMember
