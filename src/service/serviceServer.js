import serviceStore from './serviceStore'
import BusinesDataStore from '../businesData/BusinesDataStore';
import meetingStore from '../meeting/meetingStore';
import Swal from 'sweetalert2';
import axios from 'axios';


//--------------login
export const loginTo=async (formValues) => {
  try{
    if (formValues) {
      const { username, password } = formValues;
      const response = await axios.post('http://localhost:8787/login', { name: username, password });
      if (response.status === 200) {
        console.log('success');
        return 1
      }
    }
  }
    catch(error){
    if (error.response && error.response.status === 401) {
      console.log('login failed');
      return 2
    } else {
      console.log(error);
      return 3
    }
  }
  }




//---------------------Services

export const getServices = async () => {
  const response = await axios.get('http://localhost:8787/services')
  const servicesFromService = response.data;
console.log('---------------servicesFromService',servicesFromService)
console.log('---------------servicesFromService-length',servicesFromService.length)

  if (servicesFromService.length>0) {
    serviceStore.setServices(servicesFromService)
    console.log('Data saved:', response.data);

      }else {
        for (let index = 0; index < serviceStore.services.length; index++) {
         postService(serviceStore.services[index])
          
        }
        serviceStore.setServices(serviceStore.services)
        console.log('services from my code');
    

  }

}
export const postService=async (service)=>{
  // axios.post('http://localhost:8787/service',{"name":"aaaaa","description":"sssss"})
  axios.post('http://localhost:8787/service',service)
  .then((res)=>console.log('res',res))
  .catch((error)=>console.log(error))
}

//---------------------DataBusines

export const getDataBusines = async () => {
  console.log("enter to getDataBusines",)
  
  const response = await axios.get('http://localhost:8787/businessData')
  const dataBusinesFromService = response.data;
  console.log(dataBusinesFromService, "dataBusinesFromService")
  if (dataBusinesFromService.length===ג0) {
    console.log('Data saved:', dataBusinesFromService);
    BusinesDataStore.setBuisness(dataBusinesFromService)
  }
  else {
    console.log('DataBusines from my code');
    BusinesDataStore.setBuisness(BusinesDataStore.business)
  };
}



export const saveData = async (detailesBusines) => {

  try {
    //עדכן בשרת
    const result = await axios.post('http://localhost:8787/businessData', detailesBusines)

    console.log('Data saved:', result);
    // העלה הודעה שהפרטים עודכנו
    alert("פרטי העסק עודכנו");
    //עבור לקומפוננטה 
    BusinesDataStore.setBuisness(detailesBusines)
console.log("BusinesDataStore",BusinesDataStore)
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

    console.log('Data saved:', result);
    if(result.status===200){
      meetingStore.addMeeting(newMeeting)
    //עבור לקומפוננטה 
        // העלה הודעה שהפרטים עודכנו
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


