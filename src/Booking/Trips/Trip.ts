import { Flight } from "../../Flight/Flight";

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
    };

    getTypeTrip():typeTrip
    {
        return this.typeTrip
    };

    getFlight(flightId:string):Flight | undefined
    {
        for (let flight of this.flights){
            if(flight.getFlightId()==flightId){
                return flight;
            };
        };
        return undefined
    };
};

export enum typeTrip{
    RETURN_TICKET = "Return Ticket",
    NO_RETURN_TICKET = "Don't Return Ticket"
};