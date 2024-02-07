import { action, makeObservable, observable } from "mobx"
class meetingStore{
    all_meeting=[
    ];

    constructor(){
        makeObservable(this,{
            all_meeting:observable,
            setMeetings:action,
            addMeeting: action,
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



}
export default new meetingStore();
