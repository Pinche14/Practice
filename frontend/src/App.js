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

const App = () => {

  const work = () => {
    console.log("Work")
  }
  return (
    <div>
      <UserProfile 
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
      />
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

