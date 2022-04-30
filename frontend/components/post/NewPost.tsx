import { useState } from 'react'
import { Post } from 'hooks/usePosts'
import useCurrentStaffMember from 'hooks/useCurrentStaffMember'
import Button from 'components/Button'

interface NewPostProps {
  onNewPost: (post: Post) => void
}

const NewPost = (props: NewPostProps) => {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const { currentStaffMember } = useCurrentStaffMember()

  const createPost = async () => {
    if (!currentStaffMember || !text) return

    setLoading(true)

    const content = text
    setText('')

    const response = await fetch('/api/post/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content,
        uuid: currentStaffMember.uuid
      })
    }).finally(() => setLoading(false))

    const post: Post = await response.json()
    props.onNewPost(post)
  }

  return <form className="p-6">
    <textarea
      className="w-full p-6 h-40 mb-0 rounded-xl resize-none"
      placeholder="Write a new post..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <Button type="submit" disabled={loading || !text} onClick={createPost}>{!loading ? 'Create Post' : '....'}</Button>
  </form>
}

export default NewPost