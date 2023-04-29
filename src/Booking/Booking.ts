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
    private meals: Meal[];
    private bages:Bag[]=[];
    constructor(bookingId:string,price:number,ticket:Ticket,trip:Trip,customer:Customer,meals:Meal[],bags:Bag[]){
        this.bookingId = bookingId;
        this.price = price;
        this.ticket = ticket;
        this.trip = trip;
        this.customer = customer;
        this.meals = meals;
        this.bages = bags;
    };

    getBookingId():string
    {
        return this.bookingId;
    };

    hasReturnTrip():boolean
    {
        return this.trip.getTypeTrip() === typeTrip.RETURN_TICKET; 
    };

    getCustomerReturnTrip():Customer | undefined
    {
        if (this.hasReturnTrip()){
            if(this.trip.getTypeTrip()=== typeTrip.RETURN_TICKET){
                return this.customer;
            };
        };
    };

    getMeal():Meal[]
    {
        return this.meals
    };

    getTrips():Trip
    {
        return this.trip
    };  
};
