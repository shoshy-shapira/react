import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import AdminHome from './admin/AdminHome.jsx'
import UserPage from './user/UserPage.jsx'
import LoginFailed from './admin/LoginFailed.jsx'
import './index.css'
import Login from './admin/Login.jsx'
import EditBusinesData from './businesData/EditBusinesData.jsx'
import BusinesData from './businesData/BusinesData.jsx'

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/admin",
      element:<AdminHome/>,
    },
    {
      path:"/failed",
       element:<LoginFailed/>
    },
    {
      path:"/user",
       element:<UserPage/>
    },
    {
      path:"/login",
    element:<Login/>

    },
    {
      path:"/editBusinesData",
      element:<EditBusinesData/>
    },
    {
      path:"/businesData",
      element:<BusinesData/>
    }
    
    
  ]);
  return (
      <RouterProvider router={router} />
  );

  

};
export default Router


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Router />

  </React.StrictMode>,
)
