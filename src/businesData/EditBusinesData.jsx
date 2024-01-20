import React, { useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import axios from 'axios';




function EditBusinesData() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [manager, setManager] = useState('');
  const [description, setDescription] = useState('');
  
  const navigate = useNavigate();

  const saveData = () => {
    //שמור את המשתנים המערך
    const data = {
      name: name,
      address: address,
      phone: phone,
      manager: manager,
      description: description,
    };
    //עדכן בשרת
    axios.post('http://localhost:8787/businessData', data)
      .then((result) => {
        console.log('Data saved:', result);
        // העלה הודעה שהפרטים עודכנו
        alert("פרטי העסק עודכנו");
        //עבור לקומפוננטה 
        //<Outlet />
        navigate('/businesData',{state:data});

      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };




  return (
    <>
      <TextField id="outlined-basic"
        label="שם העסק"
        type="text"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField id="outlined-basic"
        label="כתובת"
        type="search"
        variant="outlined"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <TextField id="outlined-basic"
        label="טלפון"
        type="number"
        variant="outlined"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        //הבדיקה הרצויה, אך עושה לי באג
        //onChange={(e) => {
          //const input = e.target.value;
         //const digitsOnly = input.replace(/\D/g, ''); // Remove non-digit characters
          //const formattedInput = digitsOnly.slice(0, 10); // Limit to at most 10 digits
         // const finalInput = formattedInput.startsWith('0')
          //  ? formattedInput
           // : '0' + formattedInput; // Ensure the first digit is 0
      
          //setPhone(finalInput);
        //}}
      
      />
      <TextField id="outlined-basic"
        label="מנהל"
        type="name"
        variant="outlined"
        value={manager}
        onChange={(e) => setManager(e.target.value)}
      />
      <TextField id="outlined-basic"
        label="תיאור העסק"
        type="text"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <IconButton aria-label="delete" size="large">
        <DeleteIcon fontSize="inherit" />
      </IconButton>

      <Button variant="text" onClick={saveData}>עדכן</Button>
    </>

  )


}

export default EditBusinesData

