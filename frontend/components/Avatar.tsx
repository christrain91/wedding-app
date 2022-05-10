import { useState, useEffect } from 'react'
import { StaffMember } from 'definitions'
import { getStaffId } from 'util/staff'

interface AvatarProps {
  staffMember: StaffMember
  size: number
  className: string
  onClick?: () => void
}

const Avatar = (props: AvatarProps) => {
  const { staffMember } = props
  const staffId = getStaffId(staffMember)
  const [src, setSrc] = useState(`/staff/${staffId}.jpg`)

  useEffect(() => {
    const src = staffMember.customAvatarUrl || `/staff/${staffId}.jpg`
    setSrc(src)
  }, [staffMember, staffId])

  const fullName = `${staffMember.firstname} ${staffMember.surname}`

  // eslint-disable-next-line @next/next/no-img-element
  return <img
    src={src}
    className={props.className}
    title={fullName}
    alt={fullName}
    width={props.size}
    height={props.size}
    style={{
      width: props.size,
      height: props.size
    }}
    onError={(_err) => setSrc('/NoAvatar.jpg')}
    onClick={props.onClick}
  />
}

export default Avatar
