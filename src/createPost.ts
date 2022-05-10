import { isString } from 'lodash'
import staff from '../frontend/data/staff'
import { getStaffId } from '../frontend/util/staff'
import { createClient } from '@supabase/supabase-js'

const getServiceLevelSupabase = () =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_LEVEL_KEY || ''
  )

interface CreatePostBody {
  content: string
  uuid: string
  fileIds: string[]
}

export async function main(event: {
  body: CreatePostBody | string
}): Promise<{ status: number; body: string }> {
  const { content, uuid, fileIds } = (
    isString(event.body) ? JSON.parse(event.body) : event.body
  ) as CreatePostBody

  const staffMember = staff.find((staffMember) => staffMember.uuid === uuid)

  if (!staffMember) {
    throw new Error('Unauthorised')
  }

  const createdBy = getStaffId(staffMember)

  const serviceLevelSupabase = getServiceLevelSupabase()
  const { data: post, error } = await serviceLevelSupabase
    .from('post')
    .insert({
      content,
      created_by: createdBy,
      file_ids: fileIds.join(',')
    })
    .single()

  if (error) {
    throw error
  }

  return post
}
