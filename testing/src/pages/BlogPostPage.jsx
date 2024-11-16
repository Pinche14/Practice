import React, { useEffect ,useState} from 'react'
import { useLocation } from 'react-router-dom'

const BlogPostPage = () => {
  const [posts, setPosts] = useState([])
  const {state} = useLocation()

  console.log(window.history.state)

  useEffect(() => {
    console.log(state)
    if(state && state.posts){
      setPosts(state.posts)
    }
  },[state])
  
  //console.log(routerLocation)
  return (
    <div>
      <h1>BlogPostPage</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2> 
          <section>
            <p>{post.content}</p>
          </section>
        </div>
      ))}
    </div>
  )
}

export default BlogPostPage