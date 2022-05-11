import { useState, useEffect, useCallback, useMemo } from 'react'
import supabase from 'util/supabase'
import { compact, uniq, uniqBy } from 'lodash'

export interface Post {
  id: number
  content: string
  created_by: string
  created_at: Date
  file_ids: string[]
}

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)

  const formatPost = (post: Post) => ({
    ...post,
    file_ids: compact(((post.file_ids as unknown as string) || '').split(','))
  })

  const getPosts = useCallback(async (lastId?: number | null) => {
    try {
      setLoading(true)
      let query = supabase.from<Post>('post').select('*')
      if (lastId) {
        query = query.lt('id', lastId)
      }

      const { data: posts, error } = await query
        .order('created_at', {
          ascending: false
        })
        .limit(5)

      if (error) throw error
      return (posts || []).map(formatPost)
    } finally {
      setLoading(false)
    }
  }, [])

  const getMore = () => {
    const oldestId = getOldestId(posts)
    if (!oldestId || oldestId <= 1 || loading) return
    getPosts(oldestId).then((posts) =>
      setPosts((current) => addPostsToPosts(current, posts))
    )
  }

  useEffect(() => {
    getPosts().then((posts: Post[]) => setPosts(posts))
  }, [getPosts])

  const addPost = (post: Post) => {
    setPosts([formatPost(post), ...posts])
  }

  return { posts, addPost, getMore, loading }
}

function addPostsToPosts(posts: Post[], newPosts: Post[]) {
  return uniqBy([...posts, ...newPosts], 'id')
}

function getOldestId(posts: Post[]) {
  if (posts.length === 0) return null
  return Math.min(...posts.map((post) => post.id))
}

export default usePosts
