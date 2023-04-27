import { Person } from "../Person";

export class Customer extends Person{
    private customerId:string
    constructor(customerId:string,firstName:string,lastName:string,phoneNumber:number,email:string){
        super(firstName,lastName,phoneNumber,email)
        this.customerId = customerId
    }
}

