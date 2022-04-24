import { useRouter } from 'next/router'
import { FaHouseUser, FaEnvelopeOpenText } from 'react-icons/fa'

interface NavItemProps {
  href: string
  label: string
  icon: 'staff' | 'well_wishes'
}

const NavItem = (props: NavItemProps) => {
  const router = useRouter()
  const Icon = props.icon === 'staff' ? FaHouseUser : FaEnvelopeOpenText

  const active = router.route === props.href

  const onClick = () => {
    router.push(props.href)
  }

  const addiitonalClasses = active ? 'bg-yellow-500 text-white font-bold' : 'bg-white/90 font-extralight'

  return <div className={`${addiitonalClasses} p-2 prose cursor-pointer whitespace-nowrap  text-center w-36 h-24 text-sm rounded-2xl flex flex-col justify-center items-center align-middle gap-y-2`} onClick={onClick}>
    <div>
      <Icon size={32} />
    </div>
    <span>{props.label}</span>
  </div>
}

export default NavItem 