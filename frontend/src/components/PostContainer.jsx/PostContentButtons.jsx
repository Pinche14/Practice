import React, { useContext } from 'react'
import { UserCOntext } from '../../utlis/contexts/UserCOntext'

const PostContentButtons = () => {
  const userCOntextData = useContext(UserCOntext)

  return (
    
    <div>
      {userCOntextData.id}
    </div>
  )
}

export default PostContentButtons