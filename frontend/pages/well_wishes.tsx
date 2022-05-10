import Button from 'components/Button'
import NewPost from 'components/post/NewPost'
import SinglePost from 'components/post/SinglePost'
import useCurrentStaffMember from 'hooks/useCurrentStaffMember'
import usePosts, { Post } from 'hooks/usePosts'

const WellWishes = () => {
  const { posts, addPost, getMore } = usePosts()
  const { currentStaffMember } = useCurrentStaffMember()
  const background = currentStaffMember?.job.department.background

  const onNewPost = (post: Post) => {
    addPost(post)
  }

  return (
    <div className="min-w-full h-screen overflow-y-auto" style={{ background }}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8" >
        <div className="max-w-3xl mx-auto pt-3">
          <NewPost onNewPost={onNewPost} />
          <div className="flex-1 mt-6 flex flex-col overflow-y-auto pb-48 gap-y-2">
            {posts.map((post) => <SinglePost key={post.id} {...post} />)}
          </div>
          <Button onClick={getMore}>Load More...</Button>
        </div>
      </div>
    </div>
  )
}

export default WellWishes