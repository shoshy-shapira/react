import axios from 'axios';
import serviceStore from './serviceStore'
import { useNavigate } from 'react-router-dom';
import BusinesDataStore from '../businesData/BusinesDataStore';
import meetingStore from '../meeting/meetingStore';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

// import LoginFailed from './LoginFailed';
// import Alert from '@mui/material/Alert';
// const navigate = useNavigate();


//--------------login
//מכאן לסרבר
export const loginTo=async (formValues) => {
    if (formValues) {
      const { username, password } = formValues;
      const response = await axios.post('http://localhost:8787/login', { name: username, password });
      if (response.status === 200) {
        console.log('success');
        // BusinesDataStore.isLogin=true;
        return 1
        // onLoginSuccess();
        // navigate('/admin');
      }
    }
    else{
    if (error.response && error.response.status === 401) {
      console.log('login failed');
      return 2
      // navigate('/failed');
    } else {
      console.log(error);
      return 3
      // navigate('/failed');
    }
  }
  }




//---------------------Services

export const getServices = async () => {
  if (!serviceStore.services.length) {
    axios.get('http://localhost:8787/services')
      .then((result) => {
        console.log('Data saved:', result);
        serviceStore.setServices(result.data)
      }).catch((error) => {
        console.error('Error saving data:', error);
      });
  }

}
//---------------------DataBusines

export const getDataBusines = async () => {
  console.log("enter to getDataBusines",)
  
  const response = await axios.get('http://localhost:8787/businessData')
  const dataBusinesFromService = response.data;
  if (!dataBusinesFromService.length) {
    console.log('Data saved:', dataBusinesFromService);
    BusinesDataStore.setBuisness(dataBusinesFromService)
  }
  else {
    console.log('DataBusines from my code');
  };
}

// }

export const saveData = async (detailesBusines) => {

  try {
    //עדכן בשרת
    const result = await axios.post('http://localhost:8787/businessData', detailesBusines)

    // .then((result) => {
    console.log('Data saved:', result);
    // העלה הודעה שהפרטים עודכנו
    alert("פרטי העסק עודכנו");
    //עבור לקומפוננטה 
    BusinesDataStore.setBuisness(detailesBusines)
    return 1


    // })
  }
  catch (error) {
    console.error('Error saving data:', error);
    return -1
    // });
  }
};


//---------------------appointment
export const saveMeeting = async (newMeeting) => {

  try {
    //עדכן בשרת
    const result = await axios.post('http://localhost:8787/appointment', newMeeting)

    // .then((result) => {
    console.log('Data saved:', result);
    if(result.status===200){
      meetingStore.addMeeting(newMeeting)
    //עבור לקומפוננטה 
   // meetingStore.setMeetings(newMeeting);
        // העלה הודעה שהפרטים עודכנו
    // alert(" נקבע שעת צילום");
    Swal.fire({
      title: "נקבעה פגישה",
      text: "פרטיך נקלטו בהצלחה",
      icon: "success"
    });
    }

    // })
  }
  catch (error) {
    // if(result.status===400){
      console.error('Error saving data:', error);
      Swal.fire({
      title: ' הופססס... תפסו לך ',
      text: 'תמיד יש לך זמן עבור הדברים החשובים באמת',
      text: 'חפש',
      icon: "error"
    });
    // return false
    // });
  }}
// };



export const getMeeting = async () => {
  if (!meetingStore.all_meeting.length) {
    axios.get('http://localhost:8787/appointments')
      .then((result) => {
        console.log('Data saved:', result);
        meetingStore.setMeetings(result.data)
      }).catch((error) => {
        console.error('Error saving data:', error);
      });
  }

}


