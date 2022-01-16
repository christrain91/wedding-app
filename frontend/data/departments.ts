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
  size: 350
}
export const DIRECTOR: Department = {
  id: 2,
  title: 'Directors',
  size: 250,
  background: DARK_RED
}
export const ENGINEERING: Department = {
  id: 3,
  title: 'Engineering',
  background: DARK_BLUE
}
export const TECHNOLOGY: Department = {
  id: 4,
  title: 'Technology',
  background: PURPLE
}
export const CUSTOMER_SUPPORT: Department = {
  id: 5,
  title: 'Customer Support',
  background: LIGHT_GREEN
}
export const LABORATORY: Department = {
  id: 6,
  title: 'Laboratory',
  background: LIGHT_BLUE
}
export const SECURITY: Department = {
  id: 7,
  title: 'Security',
  background: RED
}
export const PARK_RANGER: Department = {
  id: 8,
  title: 'Park Rangers',
  background: GREEN
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
