import React, {useEffect, useState } from 'react';
import serviceStore from "./serviceStore"
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import { observer } from 'mobx-react';
import axios from 'axios';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { getServices } from './serviceServer';


const AddService=observer(()=> {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate()

  const handleAddService = () => {
    const service = {
      name,
      description,
    };
    axios.post('http://localhost:8787/service', service)
    .then((result) => {
      console.log('Data saved:', result);
      alert("השירות התווסף")
      serviceStore.addNewService(service)
      navigate('/admin')

  })      .catch((error) => {
    console.error('Error saving data:', error);
  });
};



useEffect(() => {
  getServices()
}, [])
  
  
    return (
      <>
                  <Dialog open={true} fullWidth >
                <DialogTitle>הוספת שירות נוסף</DialogTitle>
                <DialogContent>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            label="סוג השירות"
            multiline
            maxRows={4}
            value={name}
            onChange={(e) => setName(e.target.value)}
  
          />
          <TextField
            label="תיאור"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
  
          />
        </div>
        
        </Box>
  
        <Button variant="contained" endIcon={<AddShoppingCartIcon />}onClick={handleAddService}>
    הוסף
  </Button>
  </DialogContent>
            </Dialog>

      </>
    )
  })
  
  




export default AddService
