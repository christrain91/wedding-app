import { Post } from 'hooks/usePosts'
import { getStaffMemberFromId } from 'util/staff'
import Card from 'react-bootstrap/Card'
import Avatar from 'components/Avatar'

const SinglePost = (props: Post) => {
  const { content, created_at, created_by } = props

  const postCreatedBy = getStaffMemberFromId(created_by)
  const createdAt = new Date(created_at)

  if (!postCreatedBy) return null

  return <Card className="w-full">
    <Card.Body>
      <Card.Title>
        <div className="flex gap-x-2 align-middle items-center pb-2">
          <div>
            <Avatar className="rounded-full" staffMember={postCreatedBy} size={40} />
          </div>
          {postCreatedBy.firstname} {postCreatedBy.surname}
        </div></Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{createdAt.toLocaleString()}</Card.Subtitle>
      <Card.Text>
        {content}
      </Card.Text>
    </Card.Body>
  </Card>
}

export default SinglePost