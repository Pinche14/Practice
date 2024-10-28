import React from 'react'
import { useLocation } from 'react-router-dom'

const BlogPostPage = () => {
  const routerLocation = useLocation()

  console.log(routerLocation)
  return (
    <div>
      <h1>BlogPostPage</h1>
    </div>
  )
}

export default BlogPostPage