import NewPost from 'components/post/NewPost'
import SinglePost from 'components/post/SinglePost'
import useCurrentStaffMember from 'hooks/useCurrentStaffMember'
import usePosts, { Post } from 'hooks/usePosts'

const WellWishes = () => {
  const { posts, addPost } = usePosts()
  const { currentStaffMember } = useCurrentStaffMember()
  const background = currentStaffMember?.job.department.background

  const onNewPost = (post: Post) => {
    addPost(post)
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ background }} >
      <NewPost onNewPost={onNewPost} />
      <div className="flex-1 flex flex-col overflow-y-auto pl-6 pb-48 pr-6 gap-y-2">
        {posts.map((post) => <SinglePost key={post.id} {...post} />)}
      </div>
    </div>
  )
}

export default WellWishes