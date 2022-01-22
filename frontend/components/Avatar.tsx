import { useState, useEffect } from 'react'
import { StaffMember } from 'definitions'
import { getStaffId } from 'util/staff'
import Image from 'next/image'

interface AvatarProps {
  staffMember: StaffMember
  size: number
  className: string
}

const Avatar = (props: AvatarProps) => {
  const staffId = getStaffId(props.staffMember)
  const [src, setSrc] = useState(`/staff/${staffId}.jpg`)

  useEffect(() => {
    setSrc(`/staff/${staffId}.jpg`)
  }, [staffId])
  // const [src, setSrc] = useState('/NoAvatar.jpg')
  const fullName = `${props.staffMember.firstname} ${props.staffMember.surname}`

  // eslint-disable-next-line @next/next/no-img-element
  return <img
    src={src}
    className={props.className}
    title={fullName}
    alt={fullName}
    width={props.size}
    height={props.size}
    onError={() => setSrc('/NoAvatar.jpg')}
  />
}

export default Avatar
