import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./globals.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UsersPage from './pages/UsersPage';
//import { element } from 'prop-types';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<App/>,
//     children: [
//       {
//         path: "users",
//         element: <UsersPage/>
//       }
//     ],
//   },
//   {
//     path: '/users',
//     element: <div>
//       <UsersPage/>
//     </div>
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
