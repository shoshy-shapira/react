import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function LoginFailed() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleYesClick = () => {
    setOpen(false);
    navigate(`/user`);
  };

  const handleNoClick = () => {
    setOpen(false);
    navigate(`/login`);
  };

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Log In Failed</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to log in as a user?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleYesClick}>Yes</Button>
          <Button onClick={handleNoClick}>No</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default LoginFailed;
