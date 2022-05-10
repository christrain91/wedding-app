import { Post } from 'hooks/usePosts'
import useCurrentStaffMember from 'hooks/useCurrentStaffMember'
import makeRequest from 'util/makeRequest'
import PostInput, { PostInputValue } from './PostInput'
import supabase from 'util/supabase'
import { v4 as uuidv4 } from 'uuid'
import { compact } from 'lodash'

interface NewPostProps {
  onNewPost: (post: Post) => void
}

const NewPost = (props: NewPostProps) => {
  const { currentStaffMember } = useCurrentStaffMember()

  const createPost = async (value: PostInputValue) => {
    if (!currentStaffMember) return

    const fileIds = await Promise.all(value.files.map(async (file) => {
      const uuid = uuidv4()
      console.log('uploading file', file, uuid)
      const filename = `${uuid}_${file.name}`
      const { error } = await supabase.storage.from('post-image').upload(filename, file)
      if (error) {
        console.error(error)
        throw error
      }
      return filename
    }))

    const post = await makeRequest<Post>('/post/create', {
      content: value.comment,
      uuid: currentStaffMember.uuid,
      fileIds: compact(fileIds)
    })

    props.onNewPost(post)
  }

  return <PostInput onSubmit={createPost}  />
}

export default NewPost