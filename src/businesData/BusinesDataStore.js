import { observable, makeObservable, action } from 'mobx';

class BusinesDataStore {
    isLogin=false;

    business = {
        name: "צילומיישן",
        address: "הרב אילויצקי פתח-תקווה ",
        phone: "0771234567",
        manager: "אנונימי",
        description: "הצילום הכי טרנדי..."
    }

    constructor() {
        makeObservable(this, {
            isLogin:observable,
            business: observable,
            setBuisness:action,
        })

    }

    setBuisness=(data)=>{
        this.business=data;
        console.log(data,"dddd", this.business)
    }

    

}
export default new BusinesDataStore();
