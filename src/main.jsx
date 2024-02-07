import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import AdminHome from './admin/AdminHome.jsx'
import UserPage from './user/UserPage.jsx'
import LoginFailed from './admin/LoginFailed.jsx'
import Login from './admin/Login.jsx'
import EditBusinesData from './businesData/EditBusinesData.jsx'
import BusinesData from './businesData/BusinesData.jsx'
import Service from './service/Service.jsx'
import AddService from './service/AddService.jsx'
import ServiceList from './service/ServiceList'
import Meeting from './meeting/Meeting.jsx'
import AddMeeting from './meeting/AddMeeting.jsx'
import MeetingList from './meeting/MeetingList.jsx'

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/admin",
      element: <AdminHome />,
    },
    {
      path: "/failed",
      element: <LoginFailed />
    },
    {
      path: "/user",
      element: <UserPage />
    },
    {
      path: "/login",
      element: <Login />

    },
    {
      path: "/editBusinesData",
      element: <EditBusinesData />
    },
    {
      path: "/businesData",
      element: <BusinesData />
    },
    {
      path:"/service",
       element:<Service />
    },
    {
      path: "/addService",
      element: <AddService />
    },
    {
      path: "/serviceList",
      element: <ServiceList />
    },
    {
      path: "/meeting",
      element: <Meeting />
    },
    {
    path: "/addMeeting",
    element: <AddMeeting />
  },
  {
    path: "/meetinglist",
    element: <MeetingList />
  },


    




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
