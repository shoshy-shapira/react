import React from 'react';
import './admin.css'
import Login from './Login';
import BusinesData from '../businesData/BusinesData';
import ServiceList from '../service/ServiceList';
import MeetingList from '../meeting/MeetingList';
import BusinesDataStore from '../businesData/BusinesDataStore';
import { useNavigate } from "react-router-dom";

function AdminHome() {
  const navigate = useNavigate();


  return (
    <>
      {!BusinesDataStore.isLogin ? (
        <Login onLoginSuccess={() => setIsLogin(true)} />
      ) : (<><BusinesData />
        <div className="oneDiv" >
          <ServiceList />
          <button className="Button" onClick={() => navigate('/addService')}>להוספת שירות</button>
            <MeetingList />
          <button className="Button" onClick={() => navigate('/addMeeting')}> לקביעת פגישה</button>
        </div>
      </>
      )}


    </>
  )
}

export default AdminHome
