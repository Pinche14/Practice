import React from 'react'
import PostContainer from './PostContainer.jsx/PostContainer'
import { UserCOntext } from '../utlis/contexts/UserCOntext'
const ContextAPI = () => {
  return (
    <UserCOntext.Provider value={{
      id:1,
      username: 'Shubham',
      email: 'shubham123@gmail.com',
      displayName: 'Charlatan'
    }}>
      <div>
        <PostContainer/>
      </div>
    </UserCOntext.Provider>
    // <div>
    //   <PostContainer/>
    // </div>
  )
}

export default ContextAPI
