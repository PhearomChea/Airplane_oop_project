import { Meal } from "../Flight/Meal/Meal";
import { Customer } from "../Person/Customer/Customer";
import { Bag } from "./Trips/Bag";
import { Ticket } from "./Trips/Ticket";
import { Trip, typeTrip } from "./Trips/Trip";

export class Booking{
    private bookingId : string;
    private price : number;
    private ticket : Ticket;
    private trip:Trip;
    private customer:Customer;
    private meal: Meal[];
    private bages:Bag[]=[];
    constructor(bookingId:string,price:number,ticket:Ticket,trip:Trip,customer:Customer,meal:Meal[],bags:Bag[]){
        this.bookingId = bookingId
        this.price = price
        this.ticket = ticket
        this.trip = trip
        this.customer = customer
        this.meal = meal
        this.bages = bags
    }
    getBookingId(){
        return this.bookingId;
    }
    hasReturnTrip(){
        return this.trip.getTypeTrip() === typeTrip.RETURN_TICKET; 
    }
    getCustomerReturnTrip(){
        if (this.hasReturnTrip()){
            if (this.trip.getTypeTrip() === typeTrip.RETURN_TICKET){
                return this.customer
            }
        }
        
    }
    getMeal(){
        return this.meal
    }
    getTrips(){
        return this.trip
    }
}
