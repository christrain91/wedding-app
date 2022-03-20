import {
  GOLD,
  GREEN,
  LIGHT_GREEN,
  DARK_RED,
  LIGHT_BLUE,
  DARK_BLUE,
  PURPLE,
  RED
} from './colours'
import { Department } from '../definitions'

export const OWNERS: Department = {
  id: 1,
  title: 'Owners',
  background: GOLD,
  gradient: 'bg-gradient-to-[#f68080] from-[#cc8e35]',
  size: 350
}
export const DIRECTOR: Department = {
  id: 2,
  title: 'Directors',
  size: 250,
  gradient: 'bg-gradient-to-[#f68080] from-[#b33939]',
  background: DARK_RED
}
export const ENGINEERING: Department = {
  id: 3,
  title: 'Engineering',
  background: DARK_BLUE,
  gradient: 'bg-gradient-to-[#f68080] from-[#34495e]'
}
export const TECHNOLOGY: Department = {
  id: 4,
  title: 'Technology',
  background: PURPLE,
  gradient: 'bg-gradient-to-[#f68080] from-[#474787]'
}
export const CUSTOMER_SUPPORT: Department = {
  id: 5,
  title: 'Customer Support',
  background: LIGHT_GREEN,
  gradient: 'bg-gradient-to-[#f68080] from-[#33d9b2]'
}
export const LABORATORY: Department = {
  id: 6,
  title: 'Laboratory',
  background: LIGHT_BLUE,
  gradient: 'bg-gradient-to-[#f68080] from-[#34ace0]'
}
export const SECURITY: Department = {
  id: 7,
  title: 'Security',
  background: RED,
  gradient: 'bg-gradient-to-[#ff0f7b] from-[#ff5252]'
}
export const PARK_RANGER: Department = {
  id: 8,
  title: 'Park Rangers',
  background: GREEN,
  gradient: 'bg-gradient-to-[#82f4b1] from-[#f68080]'
}

const allDepartments = [
  OWNERS,
  DIRECTOR,
  ENGINEERING,
  TECHNOLOGY,
  CUSTOMER_SUPPORT,
  LABORATORY,
  SECURITY,
  PARK_RANGER
]

export default allDepartments
