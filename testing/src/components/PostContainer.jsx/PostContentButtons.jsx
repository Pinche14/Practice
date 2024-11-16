import React, { useContext } from 'react'
import { UserCOntext } from '../../utlis/contexts/UserCOntext'

const PostContentButtons = () => {
  const {id, setUserData} = useContext(UserCOntext)

  return (
    
    <div>
      <div>
        <span>PostContentButtons</span>
      </div>
      {id}
      <br/>
      {/* {userCOntextData.id} */}
      <button onClick={() => {
        setUserData((currentState) => ({
          ...currentState, 
          displayName: 'Updated Display Name'
        }))
      }}>Click Me</button>
    </div>
  )
}

export default PostContentButtons