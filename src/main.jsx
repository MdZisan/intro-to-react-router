import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import './index.css'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import First from './Components/First/First';
import Friends from './Components/Friends/Friends';
import FriendData from './Components/FriendData/FriendData';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//   },
//   {
//     path:"/about",
//     element: <About></About>
//   },
//   {
//     path:"/contact",
//     element: <Contact></Contact>
//   }
// ]);

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<First></First>
      },
      {
        path:'friends',
        element:<Friends></Friends>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'friend/:friendId',
        element:<FriendData></FriendData>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path:'posts',
        element:<Posts></Posts>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')

      },
      {
        path:'post/:postId',
        element:<PostDetails></PostDetails>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path:'*',
        element:  <div>404444</div>
      }
     
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={router} />
  </React.StrictMode>,
)
