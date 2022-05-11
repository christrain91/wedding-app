import { useRef } from 'react'
import Button from 'components/Button'
import LoadIcon from 'components/LoadIcon'
import NewPost from 'components/post/NewPost'
import SinglePost from 'components/post/SinglePost'
import useCurrentStaffMember from 'hooks/useCurrentStaffMember'
import usePosts, { Post } from 'hooks/usePosts'
import useInfiniteScroll from 'hooks/useInfiniteScroll'

const WellWishes = () => {
  const { posts, addPost, getMore, loading } = usePosts()
  const { currentStaffMember } = useCurrentStaffMember()
  const background = currentStaffMember?.job.department.background
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const scrollItemsContainerRef = useRef<HTMLDivElement>(null)

  useInfiniteScroll({
    scrollContainerRef,
    scrollItemsContainerRef,
    loadMore: getMore,
    pixelsFromBottomBeforeLoadingMore: 50,
    loading
  })

  const onNewPost = (post: Post) => {
    addPost(post)
  }

  return (
    <div ref={scrollContainerRef} className="min-w-full h-screen overflow-y-auto" style={{ background }}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8" >
        <div className="max-w-3xl mx-auto pt-3 pb-48">
          <NewPost onNewPost={onNewPost} />
          <div ref={scrollItemsContainerRef} className="flex-1 mt-6 flex flex-col gap-y-2">
            {posts.map((post) => <SinglePost key={post.id} {...post} />)}
            {loading ? <LoadIcon /> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WellWishes