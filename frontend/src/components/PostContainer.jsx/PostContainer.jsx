import React, { useContext, useState } from 'react'
import PostContentButtons from './PostContentButtons'
import PostContent from './PostContent'
import { UserCOntext } from '../../utlis/contexts/UserCOntext'

const PostContainer = () => {
    const [data, setData] = useState("Hello World")
    const userContextDat = useContext(UserCOntext);
  return (
    <div>
        {/* <PostContent data={data}/> */}
        <div>{userContextDat.displayName}</div>
    </div>
  )
}

export default PostContainer