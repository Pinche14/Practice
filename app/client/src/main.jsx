import React, { Children } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './styles/index.css'
import App from './App'
import Main from './components/Main'
import Video from './pages/Video'
import Home from './pages/Home'
import Photos from './pages/Photos'
import Header from './components/Header'
import Footer from './components/Footer'


// const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element:<App/>,
  //   children: [
  //     {
  //       path: '/',
  //       element: <Home/>
  //     },
  //     {
  //       path: 'video',
  //       element: <Video/>
  //     },
  //     {
  //       path: 'photos',
  //       element: <Photos/>
  //     }
  //   ]
  // }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router}/> */}
    <Header/>
    <App/>
    <Footer/>
  </StrictMode>,
)
