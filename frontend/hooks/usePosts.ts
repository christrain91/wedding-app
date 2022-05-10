import { useState, useEffect, useCallback, useMemo } from 'react'
import supabase from 'util/supabase'
import { compact } from 'lodash'

export interface Post {
  id: number
  content: string
  created_by: string
  created_at: Date
  file_ids: string[]
}

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([])

  const oldestId = useMemo(() => {
    return Math.min(...posts.map((post) => post.id)) || null
  }, [posts])

  const formatPost = (post: Post) => ({
    ...post,
    file_ids: compact(((post.file_ids as unknown as string) || '').split(','))
  })

  const getPosts = useCallback(async (lastId?: number | null) => {
    let query = supabase.from<Post>('post').select('*')

    if (lastId) {
      query = query.lt('id', lastId)
    }

    const { data: posts, error } = await query.order('created_at', {
      ascending: false
    })

    if (error) throw error
    return (posts || []).map(formatPost)
  }, [])

  const getMore = () => {
    getPosts(oldestId).then((posts) =>
      setPosts((current) => [...current, ...posts])
    )
  }

  // TODO: Need to handle infite scroll

  useEffect(() => {
    getPosts().then((posts: Post[]) => setPosts(posts))
  }, [getPosts])

  const addPost = (post: Post) => {
    setPosts([formatPost(post), ...posts])
  }

  return { posts, addPost, getMore }
}

export default usePosts
