import React, {useState} from 'react'
import PostContainer from './PostContainer.jsx/PostContainer'
import { UserCOntext } from '../utlis/contexts/UserCOntext'
import DataFetching from '../utlis/hooks/DataFetching'

const ContextAPI = () => {
  const user = DataFetching(2)
  console.log(user)

  const [userData, setUserData] = useState({
    id:1,
    username: "Shubham Pathak",
    email: "shubham123@gmail.com",
    displayName: "Charlatan"
  })
  return (
    <UserCOntext.Provider value={{...userData, setUserData}}>
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
