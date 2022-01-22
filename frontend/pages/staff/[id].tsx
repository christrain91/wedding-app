import { useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import staffMembers from 'data/staff'
import { getStaffId } from 'util/staff'
import Avatar from 'components/Avatar'
import Color from 'color'
import OtherStaff from '../../components/OtherStaff';

const StaffPage: NextPage = () => {
  const router = useRouter()
  const staffId = router.query.id

  const staffMember = staffMembers.find((staff) => getStaffId(staff) === staffId)

  const background = staffMember?.job.department.background

  const color = Color(background)
  const invert = color.isDark()

  useEffect(() => {
    const htmlTag = document.querySelector('html')
    if (htmlTag && background) {
      htmlTag.style.backgroundColor = background;
    }
  }, [background])

  if (!staffMember) return null
  return <div className="flex flex-col gap-4 align-middle p-3" style={{ backgroundColor: staffMember.job.department.background }}>
    <div className='flex justify-center w-full'>
      <Avatar className='rounded-full' staffMember={staffMember} size={500} />
    </div>
    <article className={`${invert ? 'prose-invert' : ''} prose prose-xl self-center w-full md:w-3xl lg:w-4xl`}>
      <h1 className='text-center w-full'>{staffMember.firstname} {staffMember.surname}</h1>
      <h4>{staffMember.job.title}</h4>
      <p>{staffMember.job.description}</p>
      <OtherStaff currentStaffMember={staffMember} />
    </article>
  </div >
}

export default StaffPage