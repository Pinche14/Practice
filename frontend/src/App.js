import React, { useState , useEffect} from 'react'
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
import Eventlistener from './components/Eventlistener'
import ContextAPI from './components/ContextAPI.jsx'
import DataFetching from './utlis/hooks/DataFetching.js'

const App = () => {
  
  return (

    <div>
      {/* //  <FirstQuestion/>
    //   <SecondQuestion/>
    //   <ThirdQuestion/>
    //   <FourthQuestion/>
    //   <FifthQuestion/>
    //   <SixthQuestion/>
    //   <SeventhQuestion/>
    //   <EighthQuestion/>  */}
         {/* <Eventlistener/> */}
         <ContextAPI/> 
    </div>
  )
}

export default App

