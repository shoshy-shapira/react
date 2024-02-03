import React, { useState } from 'react';
import { observer } from 'mobx-react';
import BusinesDataStore from "./BusinesDataStore";
import { saveData } from '../service/serviceServer';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './header.css'


const EditBusinesData = observer(() => {
  const [open, setOpen] = React.useState(false);
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
      <div class='root'>
        <TextField  class="textField"

          id="outlined-basic"
          label="שם העסק"
          type="text"
          variant="outlined"
          name="name"
          value={detailesBusines.name}
          onChange={updateDetails}
          // className='textField'
        />
        <TextField           class="textField"

          id="outlined-basic"
          label="כתובת"
          type="search"
          variant="outlined"
          name="address"
          value={detailesBusines.address}
          onChange={updateDetails}
          // className="textField"
        />
        <TextField           class="textField"

          id="outlined-basic"
          label="טלפון"
          type="number"
          variant="outlined"
          name="phone"
          value={detailesBusines.phone}
          onChange={updateDetails}
          // className="textField"
        />
        <TextField           class="textField"
          id="outlined-basic"
          label="מנהל"
          type="name"
          variant="outlined"
          value={detailesBusines.manager}
          name="manager"
          onChange={updateDetails}
        />
        <TextField           class="textField"

          id="outlined-basic"
          label="תיאור העסק"
          multiline
          rows={4}
          variant="outlined"
          name="description"
          value={detailesBusines.description}
          onChange={updateDetails}
          // className={classes.textField}
        />
        <Button class="button" variant="contained" color="primary" onClick={onclick} 
        // className={classes.button}
        >
          Save
        </Button>
      </div>
    </>
);
  });
export default EditBusinesData

