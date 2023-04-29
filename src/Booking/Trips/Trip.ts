import { Flight } from "../../Flight/Flight";
import { TypeOfTicket } from "./Ticket";

export class Trip{
    private DeparturePlace:string;
    private DestinationPlace:string;
    private flights:Flight[] = [];
    typeTrip:typeTrip;
    constructor(typeTrip:typeTrip,departurePlace:string,destinaitonPlace:string,flights:Flight[]){
        this.typeTrip = typeTrip;
        this.DeparturePlace = departurePlace;
        this.DestinationPlace = destinaitonPlace;
        this.flights = flights;
    }

    getTypeTrip(){
        return this.typeTrip
    }
    
}

export enum typeTrip{
    RETURN_TICKET = "Return Ticket",
    NO_RETURN_TICKET = "Don't Return Ticket"
}