import React from 'react'
import './styles/App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
      <Header/>
      <Main/>
      <Outlet/>
      <Footer/>
    </>     
  )
}

export default App
    // <>
    //   <h1>To do in this app</h1>
    //   <ul>
    //     <li>Front page with different features
    //       <li> make a video viewer with search feature</li>
    //     </li>
    //     <li>Do a login signup page/google sign in</li>
    //     <li>The videos should come from an API service</li>
    //     <li>create a profile in your app</li>
    //     <li>Backend and frontend maintaiance</li>
    //     <li>Design the pages</li>
    //     <li>A chatbot</li>
    //     <li>Routing</li>
    //   </ul>
    // </>