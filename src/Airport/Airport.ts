import { Flight } from "../Flight/Flight";

export class Airport{
    private airportName : string;
    private city : string
    private flights:Flight[]
    constructor(airportName : string,city:string){
        this.airportName = airportName;
        this.city = city
    }
    addFlight(flight:Flight){
        this.flights.push(flight);
    }

}