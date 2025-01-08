import React, { useState } from 'react'
import './styles/App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Photos from './pages/Photos'
import Video from './pages/Video'
import Audio from './pages/Audio'
import Blog from './pages/Blog'
import { Route,Router,Routes } from 'react-router-dom'


function App() {

  const [navbar, setNavbar] = useState(true)
  return (
    
    <div>
      <Header setNavbar={setNavbar}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
        <Route path='/photos/:categoryId/:audioId' element={<Audio/>}/>
        <Route path='/photos/:categoryId/:photoId' element={<Photos/>}/>
        <Route path='/photos/:categoryId/:blogId' element={<Blog/>}/>
      </Routes>
      <Footer/>
    </div>
   
    
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