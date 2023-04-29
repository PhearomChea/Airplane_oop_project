import { Person } from "../Person";

export class Customer extends Person{
    private customerId:string;
    constructor(customerId:string,firstName:string,lastName:string,phoneNumber:string,email:string){
        super(firstName,lastName,phoneNumber,email);
        this.customerId = customerId;
    }
    
}

