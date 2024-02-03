import React, { useEffect } from 'react';
import { Fab } from '@material-ui/core';
import onlyLogo from '../images/onlyLogo.png'
import BusinesDataStore from "./BusinesDataStore";
import { getDataBusines } from "../service/serviceServer";
import { useNavigate } from "react-router-dom";
import { observer } from 'mobx-react';
import EditIcon from '@mui/icons-material/Edit';
import './header.css'
import App from '../App';


const BusinesData=observer(()=> {
  const navigat=useNavigate();

  const detailesBusines=BusinesDataStore.business;
  useEffect(() => {
    getDataBusines();
  }, []);


  return (
    <>
    <header className="business-header">
             <div className="business-details">
             <img src={onlyLogo} alt='logo' className="business-logo"></img>

             <div className="business-info">
     <h1 className="business-name">
         {detailesBusines.name}
         </h1>
         <div className="business-contact">

        <h2 className="business-address"> כתובת:
        {detailesBusines.address}
        </h2>
        <h2 className="business-phone">טלפון:
        {detailesBusines.phone}
        </h2>
        <h2 className="business-owner"> בעלים:
         {detailesBusines.manager}
         </h2>
        <h5 className="business-des" > 
        {detailesBusines.description}
       </h5>
        </div>
        </div>
        {BusinesDataStore.isLogin ? (

      <div className="editButton">
        <Fab
          color='primary'
          aria-label="add"
          onClick={() =>navigat('/editBusinesData')}
        >
        
            <EditIcon />  
        </Fab>
      </div>
      ):null}
    </div>
        
    <div id="kav"></div>
    </header>

    </>
  );
})

export default BusinesData;
