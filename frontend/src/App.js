import React from 'react'
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


const App = () => {

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

  window.addEventListener('resize', (e) => {
    console.log(window.innerHeight,window.innerWidth)
  });
  return (
    <div>
      <LoginForm/>
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

