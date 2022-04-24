import { useEffect } from 'react'
import { GetStaticProps, NextPage } from 'next'
import staffMembers from 'data/staff'
import { getStaffId } from 'util/staff'
import Avatar from 'components/Avatar'
import Color from 'color'
import OtherStaff from 'components/OtherStaff'
import { StaffMember } from 'definitions'
import RandomVideo from 'components/RandomVideo'
import BackButton from 'components/BackButton'

const StaffPage: NextPage<{ staffMember: StaffMember }> = (props) => {
  const { staffMember } = props

  const background = staffMember.job.department.background

  const color = Color(background)
  const invert = color.isDark()

  useEffect(() => {
    const htmlTag = document.querySelector('html')
    if (htmlTag && background) {
      htmlTag.style.backgroundColor = background;
    }
  }, [background])

  return <div className="flex flex-col p-6 justify-center align-middle overflow-x-hidden overflow-y-auto gap-y-2 pb-[160px] pt-3 pl-3 pr-3" style={{ backgroundColor: staffMember.job.department.background }}>
    <BackButton invert={invert} />
    <div className='flex justify-center w-full mb-3' >
      <Avatar className='rounded-full' staffMember={staffMember} size={200} />
    </div>
    <article className={`${invert ? 'prose-invert' : ''} flex-1 prose prose-lg self-center w-full md:w-3xl lg:w-4xl`}>
      <h1 className='text-center w-full'>{staffMember.firstname} {staffMember.surname}</h1>
      <h4>{staffMember.job.title}</h4>
      <p>{staffMember.job.description}</p>
    </article>
    <RandomVideo className="self-center mt-6 mb-6" />
    <div className='flex-end self-center'>
      <OtherStaff currentStaffMember={staffMember} />
    </div>
  </div >
}

export const getStaticPaths = () => {
  const paths = staffMembers.map(staffMember => ({ params: { id: getStaffId(staffMember) } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = (context) => {
  const staffId = context?.params?.id

  if (!staffId) throw Error('Can not find staff id')

  const staffMember = staffMembers.find((staff) => getStaffId(staff) === staffId)

  if (!staffMember) throw Error('Can not find staff member')

  return {
    props: {
      staffMember
    }
  }
}

export default StaffPage