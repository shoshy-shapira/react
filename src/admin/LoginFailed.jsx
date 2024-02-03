import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    navigate(`/`);
  };

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>הכניסה נכשלה!!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            אתה מעוניין להכנס בתור משתמש?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleYesClick}>כן</Button>
          <Button onClick={handleNoClick}>לא</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default LoginFailed;
