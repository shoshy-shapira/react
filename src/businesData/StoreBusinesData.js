import { observable, action, makeObservable } from 'mobx';

class StoreBusinesData {
constructor(){
    makeObservable(this,{
        name:observable,
        address:observable,
        phone:observable,
        manager :observable,
        description:observable,
    })

    }


}
export default new StoreBusinesData() ;
