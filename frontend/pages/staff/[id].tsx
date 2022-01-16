import { useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import staffMembers from 'data/staff'
import { getStaffId } from 'util/staff'
import Avatar from 'components/Avatar'

const StaffPage: NextPage = () => {
  const router = useRouter()
  const staffId = router.query.id

  const staffMember = staffMembers.find((staff) => getStaffId(staff) === staffId)

  useEffect(() => {
    // TODO: Redirect to a 404
    if (!staffMember) {
      router.back()
    }
  }, [staffMember, router])

  if (!staffMember) return null

  return <div className="flex flex-col gap-4 justify-center">
    <div className='flex justify-center w-full'>
      <Avatar className='rounded-full' staffMember={staffMember} size={500} />
    </div>
    <pre className="m-6 p-6 bg-slate-200 rounded-xl overflow-auto">{JSON.stringify(staffMember, null, 2)}</pre>
  </div>
}

export default StaffPage