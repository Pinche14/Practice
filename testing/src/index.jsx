// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UsersPage from './pages/UsersPage.jsx';
//import { element } from 'prop-types';
import BlogPostPage from './pages/BlogPostPage.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    children: [
      // {
      //   path: "users",
      //   element: <UsersPage/>
      // },
      {
        path: "blog-posts",
        element: <BlogPostPage/>
      }
    ],
  },
  // {
  //   path: '/users',
  //   element: 
  //   <div>
  //     <UsersPage/>
  //   </div>
  // }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>    
  </React.StrictMode>
);
