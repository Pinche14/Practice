import React, {useEffect, useState} from 'react'
import PostContainer from './PostContainer.jsx/PostContainer'
import { UserCOntext } from '../utlis/contexts/UserCOntext'
import DataFetching from '../utlis/hooks/DataFetching'

const ContextAPI = () => {
  const {user, loading, error} = DataFetching(7)
  console.log(user,loading,error)

  const [userData, setUserData] = useState(
  //   id:1,
  //   username: "Shubham Pathak",
  //   email: "shubham123@gmail.com",
  //   displayName: "Charlatan"
  )

  useEffect(() => {
    if(!loading && !error && user) setUserData(user);
  }, [loading,error,user]);
  return (
    <UserCOntext.Provider value={{...userData, setUserData}}>
      <div>
        {loading ? 'loading...': <PostContainer/>}
      </div>
    </UserCOntext.Provider>
    // <div>
    //   <PostContainer/>
    // </div>
  )
}

export default ContextAPI
