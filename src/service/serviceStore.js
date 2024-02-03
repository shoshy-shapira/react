import { observable, makeObservable, action } from 'mobx';
// import { getServices } from "./serviceServer"



class serviceStore{
    services=[
        {
            name:"fdgdfg",
            description:"jhjgjk,"
        },        {
            name:"fdgdfg",
            description:"jhjgjk,"
        },        {
            name:"fdgdfg",
            description:"jhjgjk,"
        },        {
            name:"fdgdfg",
            description:"jhjgjk,"
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
        this.services=[...this.services,service];
        // console.log("addNewService   service",service);
    }
    /*getServiceById(serviceName){
        //getServices()
       const thisService = this.services.find((service)=>service.name===serviceName);
        return thisService;
    }*/


}
export default new serviceStore();

