import React, { useContext } from 'react'
import PostContentButtons from './PostContentButtons'
import { UserCOntext } from '../../utlis/contexts/UserCOntext'

const PostContent = ({data}) => {
  const userContextData = useContext(UserCOntext)
  return (
    <div>
        <PostContentButtons data={data}/>
        {userContextData.email}

    </div>
  )
}

export default PostContent