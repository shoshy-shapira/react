import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Alert from '@mui/material/Alert';



function LoginFailed() {
  const navigate=useNavigate();


    /*const navigate = useNavigate();*/
  
    const handleYesClick = () => {
        <Outlet/>
        navigate(`/user`);
    }
        const handleNoClick = () => {
          
          <Outlet/>
          navigate(`/login`);
  
      // Redirect to UserPage component
     /* navigate.push('/user');*/
    };
  


    return (
      <>
          <div>
      <p>Do you want to log in as a user?</p>
      <button onClick={handleYesClick}>Yes</button>
      <button onClick={handleNoClick}>No</button>

    </div>

      </>
    )
  }
  
  export default LoginFailed