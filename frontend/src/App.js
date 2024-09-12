import React, { useState } from 'react'
import { FirstQuestion } from './questions/first-question'
import { SecondQuestion } from './questions/second-question'
import { ThirdQuestion } from './questions/third-question'
import FourthQuestion from './questions/fourth-question'
import FifthQuestion from './questions/fifth-question'
import SixthQuestion from './questions/sixth-question'
import SeventhQuestion from './questions/seventh-question'
import UserProfile from './components/UserProfile'
import UserFavouriteFoods from './components/UserFavouriteFoods'
import EighthQuestion from './questions/eighth-question'
import "./globals.css";
import "./components/UserDetails"
import UserDetails from './components/UserDetails'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'


const App = () => {

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'Shubham',
      email: 'shubham@gmail.com'
    },
    {
      id: 2,
      username: 'Vijay',
      email: 'vijay@gmail.com'
    },

  ])
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [counter, setCounter] = useState(3)

  //const isAuthenticated = true

  // const USER_STATUS = 'ZERO';

  // if(USER_STATUS === 'NOT_VERIFIED'){
  //   return (
  //     <div>
  //       <span>
  //         You are not verified. Please verify Email.
  //       </span>
  //     </div>
  //   )
  // }
  // else if (USER_STATUS === 'VERIFIED') {
  //   return(
  //     <div>
  //       You are verified.
  //     </div>
  //   )
  // } else if  (USER_STATUS === 'DISABLED') {
  //   return(
  //     <div>
  //       <span>Your account has been disabled.</span>
  //     </div>
  //   )

  // }
  // else  {
  //   return(
  //     <div>
  //       <span>Contact admin.</span>
  //     </div>
  //   )
  // }

  // if(isAuthenticated){
  //   return (
  //     <div>
  //     <h1>Hy There!</h1>
  //   </div>
  //   );
  // } else {
  //   return (
  //   <div>
  //     <span>You are not logged in</span>
  //   </div>
  //   )
  // }

  // const mockUsers = [
  //   {
  //     id: 1,
  //     username: 'Shubham',
  //     email: 'shubham70254@gmail.com'
  //   },
  //   {
  //     id: 2,
  //     username: "Vikas",
  //     email: 'vikas123@gmail.com'
  //   },
    
  // ]

  // const work = () => {
  //   console.log("Work")
  // }

  // window.addEventListener('resize', (e) => {
  //   console.log(window.innerHeight,window.innerWidth)
  // });
 
  return (
   
    <div>
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          const newUser = {
            id: counter,
            username,
            email
          }
          setCounter((currentCounter) => currentCounter+1)
          setUsers((currentUsersState) => [...currentUsersState, newUser])
        }}>
          <div>
            <label htmlFor='username'>Username</label>
            <input name="username" id='username' value={username}
              onChange={(e) => {setUsername(e.target.value)}}
            >

            </input>
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input name="email" id='email' value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          >

          </input>
          </div>
          <button>Add User</button>
        </form>
        
      </div>
      <br/>
      {users.map((user) => (
        <UserDetails key={user.id} user={user} setUsers={setUsers}/>
      ))}
      {/* <RegisterForm/> */}
      {/* {mockUsers.map((user) => {
        return <UserDetails user={user} />
      })} */}
      {/* <UserProfile 
      username='Shubham'
      age={20} 
      isLoggedIn={true} 
      work={work}
      favouriteFoods = {[
        {
          name: "Sushi",
          id: "sushi"
        },
        {
          name: "Aloo Tikki",
          id:"Aloo Tikki"

        }
      ]}
      /> */}
      {/* <FirstQuestion/>
      <SecondQuestion/>
      <ThirdQuestion/>
      <FourthQuestion/>
      <FifthQuestion/>
      <SixthQuestion/>
      <SeventhQuestion/>
      <EighthQuestion/> */}
    </div>
  )
}

export default App

