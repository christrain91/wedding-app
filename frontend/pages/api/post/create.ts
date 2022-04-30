import staff from 'data/staff'
import { NextApiHandler } from 'next'
import { getStaffId } from 'util/staff'
import { getServiceLevelSupabase } from 'util/supabase'

const serviceLevelSupabase = getServiceLevelSupabase()

const handler: NextApiHandler = async (req, res) => {
  const { content, uuid } = req.body

  const staffMember = staff.find((staffMember) => staffMember.uuid === uuid)

  if (!staffMember) {
    return res.status(403).send('Unauthorised')
  }

  const createdBy = getStaffId(staffMember)

  const { data: post, error } = await serviceLevelSupabase
    .from('post')
    .insert({
      content,
      created_by: createdBy
    })
    .single()

  if (error) {
    return res.status(500).send(`Error creating post: ${error.message}`)
  }

  return res.status(200).json(post)
}

export default handler
