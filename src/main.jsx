import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/Root/Root.jsx'
import Home from './pages/Home/Home.jsx'
import Services from './pages/Services/Services'
import ViewOnePage from './pages/ViewOnePage/ViewOnePage'
import Login from './pages/Login/Login'
import Registration from './pages/Registration/Registration'



const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
      path:'/',
        element:<Home/>
      },{
        path:'/services',
        element:<Services/>
      },
      {
        path:'/services/:sid',
        element:<ViewOnePage/>
      },
      {
        path:'/login',
        element:<Login/>
      },{
        path:'/registration',
        element:<Registration/>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
