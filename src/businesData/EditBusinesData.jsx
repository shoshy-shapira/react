import './header.css'
import BusinesDataStore from "./BusinesDataStore";
import { saveData } from '../service/serviceServer';
import React, { useState } from 'react';
import { observer } from 'mobx-react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContentText, DialogTitle } from '@mui/material';


const EditBusinesData = observer(() => {
  const [open, setOpen] = useState(true);
  const [detailesBusines, setDitail] = useState(BusinesDataStore.business ? { ...BusinesDataStore.business } : {})
  const navigate = useNavigate()


  const updateDetails = (event) => {
    const data = { ...detailesBusines };
    data[event.target.name] = event.target.value;
    setDitail(data)

  };

  const onclick = () => {
    saveData(detailesBusines).then(x => {
      console.log(x)
      if (x === 1) {
        navigate('/admin');
      }
    })
  };

  return (
    <>
                <Dialog open={true} fullWidth >
                <DialogTitle>עדכון פרטי העסק</DialogTitle>
                <DialogContentText>

      <div className='root'>
        
        <TextField  className="textField"

          id="outlined-basic"
          label="שם העסק"
          type="text"
          variant="outlined"
          name="name"
          value={detailesBusines.name}
          onChange={updateDetails}
        />
        <TextField className="textField"

          id="outlined-basic"
          label="כתובת"
          type="search"
          variant="outlined"
          name="address"
          value={detailesBusines.address}
          onChange={updateDetails}
        />
        <TextField           className="textField"

          id="outlined-basic"
          label="טלפון"
          type="number"
          variant="outlined"
          name="phone"
          value={detailesBusines.phone}
          onChange={updateDetails}
        />
        <TextField           className="textField"
          id="outlined-basic"
          label="מנהל"
          type="name"
          variant="outlined"
          value={detailesBusines.manager}
          name="manager"
          onChange={updateDetails}
        />
        <TextField           className="textField"

          id="outlined-basic"
          label="תיאור העסק"
          multiline
          rows={4}
          variant="outlined"
          name="description"
          value={detailesBusines.description}
          onChange={updateDetails}
        />
        <Button className="button" variant="contained" color="primary" onClick={onclick} 
        >
          Save
        </Button>
      </div>
      </DialogContentText>
            </Dialog>

    </>
);
  });
export default EditBusinesData

