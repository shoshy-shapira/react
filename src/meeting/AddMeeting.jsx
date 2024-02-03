import './meeting.css'
import meetingStore from "./meetingStore"
import serviceStore from "../service/serviceStore";
import Select from '@mui/material/Select';
import { saveMeeting, getMeeting, getServices } from "../service/serviceServer";

import { Button, Dialog, DialogContent, TextField } from "@mui/material";
import { observer } from "mobx-react"
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Box, DialogTitle, FormControl, InputLabel, MenuItem } from "@material-ui/core";
import Swal from "sweetalert2";
import BusinesDataStore from "../businesData/BusinesDataStore";


const AddMeeting = observer(() => {
    useEffect(() => {
        getMeeting()
        getServices()
    }, [])
    const [selectedValue, setSelectedValue] = useState('');
    const [open, setOpen] = useState('false');
    const [formDataMeeting, setFormDataMeeting] = useState({
        serviceName: '', dateTime: '', NameUser: '', Phone: '', Email: '',
    })
    const navigat = useNavigate();
    const handleKeyPress = (event) => {            //בדיקה לטלפון האם הוא מכיל רק 3 ספרות
        const { value } = event.target;
        if (value.length >= 10) {
            event.preventDefault();
        }
    };
    const handleChange = (e) => {
        setFormDataMeeting({ ...formDataMeeting, [e.target.name]: e.target.value, });
    };
    const handleForm = async (e) => {
        e.preventDefault();
        //בודק האם התאריך עבר
        const isDatePassed = meetingStore.checkIfDateHasPassed(formDataMeeting.dateTime);
        console.log("isDatePassed", isDatePassed)
        if (isDatePassed) {
            const newMeeting = { ...formDataMeeting };
            let t = await saveMeeting(newMeeting);
            console.log(meetingStore.all_meeting);
            setFormDataMeeting({
                serviceName: '',
                dateTime: '',
                NameUser: '',
                Phone: '',
                Email: '',
            });
        }
        else {
            Swal.fire({
                title: "הופס....התאריך עבר",
                text: " ...לא מוותרים עליך, לדברים טובים מוצאים זמן",
                icon: "error"
            });
        }
        setOpen(false);
        {
            BusinesDataStore.isLogin ? (
                navigat('/admin')) : navigat('/user')
        }

    }
    return (
        <>
            <Dialog open={open} fullWidth >
                <DialogTitle>הוספת פגישה חדשה</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleForm} >
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">--בחר שירות</InputLabel>
                                <Select id="demo-simple-select" value={selectedValue} name="serviceName" label="services_list" onChange={handleChange} >
                                    {serviceStore.services.map((x) => (
                                        <MenuItem key={x.name} value={x.name}> {x.name} </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                        <TextField fullWidth sx={{ mt: 1 }} type='datetime-local' name="dateTime" variant="outlined" value={formDataMeeting.dateTime} onChange={handleChange} margin="dense"
                        />
                        <br />
                        <TextField name="NameUser" label="שם לקוח" variant="outlined" value={formDataMeeting.NameUser} onChange={handleChange} margin="dense"
                        />
                        <br />
                        <TextField required name="Phone" type="number" label="טלפון זמין" variant="outlined" value={formDataMeeting.Phone} onChange={handleChange} onKeyPress={handleKeyPress} margin="dense"
                        />
                        <br />
                        <TextField required type='email' name="Email" label="אימייל" variant="outlined" value={formDataMeeting.Email} onChange={handleChange} margin="dense"
                        />
                        <br />
                        <Button variant="outlined" type="submit" color="primary"> הוסף </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
})
export default AddMeeting
