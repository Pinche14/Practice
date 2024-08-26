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


const App = () => {

  const mockUsers = [
    {
      id: 1,
      username: 'Shubham',
      email: 'shubham70254@gmail.com'
    },
    {
      id: 2,
      username: "Vikas",
      email: 'vikas123@gmail.com'
    },
    
  ]

  // const work = () => {
  //   console.log("Work")
  // }
  return (
    <div>
      {mockUsers.map((user) => {
        return <UserDetails key={user.id} user= {user}/>
      })}
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

