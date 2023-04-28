import { Customer } from "../Person/Customer/Customer";
import { Ticket } from "./Trips/Ticket";
import { Trip } from "./Trips/Trip";

export class Booking{
    private bookingId : string;
    private price : number;
    private ticket : Ticket;
    private trips:Trip[] = [];
    private customer:Customer;
    constructor(bookingId:string,price:number,ticket:Ticket,trips:Trip[],customer:Customer){
        this.bookingId = bookingId
        this.price = price
        this.ticket = ticket
        this.trips = trips
        this.customer = customer
    }

    getCustomerName(){
        return this.customer
    }
   
    

    
}