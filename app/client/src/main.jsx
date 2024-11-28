import React, { Children } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './styles/index.css'
import App from './App'



const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
