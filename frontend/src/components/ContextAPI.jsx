import React, {useEffect, useState} from 'react'
import PostContainer from './PostContainer.jsx/PostContainer'
import { UserCOntext } from '../utlis/contexts/UserCOntext'
import DataFetching from '../utlis/hooks/DataFetching'
import { Link, Outlet, useNavigate } from 'react-router-dom'
const ContextAPI = () => {
  const {user, loading, error} = DataFetching(7)
  console.log(user,loading,error)

  const [userData, setUserData] = useState(
  //   id:1,
  //   username: "Shubham Pathak",
  //   email: "shubham123@gmail.com",
  //   displayName: "Charlatan"
  )

  const navigate = useNavigate()
  useEffect(() => {
    if(!loading && !error && user) {
      setUserData(user)
      navigate('/users')
    }
  }, [loading,error,user,navigate]);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/blog-posts">BlogPosts</Link>
          </li>
        </ul>
      </nav>

      <div>
        <label htmlFor="data">Enter Data</label>
        <input type="text" id="data" onChange={(e.atget.value)}/>
      </div>
      <UserCOntext.Provider value={{...userData, setUserData}}>
      <div>
        {loading ? 'loading...': <PostContainer/>}
      </div>
      </UserCOntext.Provider>
      <Outlet/>
    </>
    
    // <div>
    //   <PostContainer/>
    // </div>
  )
}

export default ContextAPI
