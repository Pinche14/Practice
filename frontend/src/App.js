import React from 'react'
import { FirstQuestion } from './questions/first-question'
import { SecondQuestion } from './questions/second-question'
import { ThirdQuestion } from './questions/third-question'
import FourthQuestion from './questions/fourth-question'
import FifthQuestion from './questions/fifth-question'
import SixthQuestion from './questions/sixth-question'
import SeventhQuestion from './questions/seventh-question'
import UserProfile from './components/UserProfile'

const App = () => {
  return (
    <div>
      <UserProfile/>

      {/* <FirstQuestion/>
      <SecondQuestion/>
      <ThirdQuestion/>
      <FourthQuestion/>
      <FifthQuestion/>
      <SixthQuestion/>
      <SeventhQuestion/> */}
    </div>
  )
}

export default App

