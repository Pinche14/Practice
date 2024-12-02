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



const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'video',
        element: <Video/>
      },
      {
        path: 'photos',
        element: <Photos/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
