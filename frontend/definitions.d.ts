export interface StaffMember {
  uuid: string
  firstname: string
  surname: string
  job: Job
  nicknames?: string[]
  customAvatarUrl?: string
}

export interface Department {
  id: number
  title: string
  background: string
  gradient: string
  fontColour?: string
  size?: number
}

export interface Job {
  title: string
  description: string
  department: Department
  displayOrder: number
}
