import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';




function BusinesData(props) {
  const location = useLocation();
  const data = location.state;


  console.log(props)
  const { name, address, phone, manager, description } = data;

  return (
    <>
      <h2>פרטי העסק</h2>
      <p> שם העסק: {data.name}</p>
      <p>כתובת: {data.address}</p>
      <p>טלפון: {data.phone}</p>
      <p>מנהל: {data.manager}</p>
      <p>תיאור: {data.description}</p>
    </>
  )
}

export default  BusinesData

