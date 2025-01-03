import React,{useState} from 'react'

const PostReq = () => {
    const [blogPostData, setBlogPostData] = useState({
        title:"",
        body:""
      })
      
  return (
     <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (blogPostData.title && blogPostData.body){
            fetch('https://jsonplaceholder.typicode.com/posts',{
              method:'POST',
              body: JSON.stringify({
                userId: 1,
                title: blogPostData.title,
                body: blogPostData.body
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
            .then((response) => response.json())
            .then((data) => {
              console.log("Success!");
              console.log(data)
            })
            .catch((err) => console.log(err))
          }
        }}
      >
      <div>  
        <label htmlFor='title'>Title </label>
        <input type="text" id="title" value={blogPostData.title} 
          onChange={(e) => {
            setBlogPostData((currentBlogPostData) => ({
              ...currentBlogPostData,
              title: e.target.value
            }))
          }}
        />
      </div>
      <div>  
        <label htmlFor='body'>Body </label>
        <input type="text" id="body" value={blogPostData.body} 
          onChange={(e) => {
            setBlogPostData((currentBlogPostData) => ({
              ...currentBlogPostData,
              body: e.target.value
            }))
          }}
        />
      </div>
      <button>Create Post</button>
      </form>
      
    </div>
  )
}

export default PostReq