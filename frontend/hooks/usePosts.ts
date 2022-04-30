import { useState, useEffect } from 'react'
import supabase from 'util/supabase'

export interface Post {
  id: number
  content: string
  created_by: string
  created_at: Date
}

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const getPosts = async () => {
      const { data: posts, error } = await supabase
        .from<Post>('post')
        .select('*')
        .order('created_at', { ascending: false })
      if (error) throw error
      return posts
    }

    getPosts().then(setPosts)
  }, [])

  const addPost = (post: Post) => {
    setPosts([post, ...posts])
  }

  return { posts, addPost }
}

export default usePosts
