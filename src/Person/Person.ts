export abstract class Person {
    protected firstName :string;
    protected lastName :string;
    protected phoneNumber : string;
    protected email : string;
    constructor(firstName:string,lastName:string,phoneNumber:string,email:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}