import { action, makeObservable, observable } from "mobx"
class meetingStore{
    all_meeting=[
    ];

    constructor(){
        makeObservable(this,{
            all_meeting:observable,
            setMeetings:action,
            addMeeting: action,
            // handleForm:action,
            checkIfDateHasPassed:action

    })
}
    setMeetings = (data) => {
        if(Array.isArray(data)&&data.length>0)
        {
            this.all_meeting=data;
        }
        else 
        this.all_meeting=[];
    //   const dateA = new Date(a.dateTime);
    //   const dateB = new Date(b.dateTime);
    //   return dateA - dateB;
    // });
  }

  

  addMeeting=(meeting)=>{
    this.all_meeting=[...this.all_meeting,meeting];
    console.log("addMeeting",meeting )
  }
   checkIfDateHasPassed = (selectedDateTime) => {     //מחזיר האם הזמן גדול מהזמן שנבחר
    const currentDate = new Date();
    const selectedDate = new Date(selectedDateTime);
    return (selectedDate > currentDate)
};

//    handleForm = async (e) => {
//     e.preventDefault();
//     //בודק האם התאריך עבר
//     const isDatePassed = checkIfDateHasPassed(formDataMeeting.dateTime);
//     console.log("isDatePassed", isDatePassed)
//     if (isDatePassed) {
//         const newMeeting = { ...formDataMeeting };
//         let t = await saveMeeting(newMeeting);
//         console.log(meetingStore.all_meeting);
//         setFormDataMeeting({
//             serviceName: '',
//             dateTime: '',
//             NameUser: '',
//             Phone: '',
//             Email: '',
//         });
//     }
//     else {
//         Swal.fire({
//             title: "הופס....התאריך עבר",
//             text: " ...לא מוותרים עליך, לדברים טובים מוצאים זמן",
//             icon: "error"
//         });
//     }
//     setOpen(false);
//     {
//         BusinesDataStore.isLogin ? (
//             navigat('/admin')

//         ) : navigat('/user')
//     }

// }


}
export default new meetingStore();
