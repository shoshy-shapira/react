import { observable, makeObservable, action } from 'mobx';
// import { getServices } from "./serviceServer"



class serviceStore{
    services=[
        {
            "name":"צילומי חלאקה",
            "description":"הנצחת הרגעים המתוקים, שניה לפני התספורת"
        },        {
            "name":"חתונה",
            "description":"היום נעשה משהו בלתי נשכח שישאיר זיכרון של שמחה מבורך"
        },        {
            "name":"new-born",
            "description":"לרגע הזה הוא נולד"
        },        {
            "name":"צילומי משפחות",
            "description":"צילומי חוץ, זכרו את הרגעים הקטנים שיוצרים זכרונות גדולים"
        },
    ];
    

    constructor(){
        makeObservable(this,{
            services: observable,
            setServices: action,
            addNewService: action,
          /*  getServiceById:action,*/

    })
}
    setServices=(data)=>{
        if(Array.isArray(data)&&data.length>0)
        {
            this.services=data;
        }
        else 
        this.services=[];
    }
    
    addNewService=(service)=>{
        console.log('bef-my service',this.services)
        this.services=[...this.services,service];
        console.log('af-my service',this.services)


    }


}
export default new serviceStore();

