import { Date } from "../Flight/Date/Date";
import { Flight } from "../Flight/Flight";
import { Gate } from "./Gate/Gate";
export class Airport{
    private airportName : string;
    private city : string
    private flights:Flight[] = [];
    private gates : Gate[] = []
    constructor(airportName : string,city:string,gates:Gate[]){
        this.airportName = airportName;
        this.city = city
        this.gates =gates
    }
    addFlight(flight:Flight){
        this.flights.push(flight);
    }
    // addGate(gate:Gate){
    //     this.gates.push(gate)
    // }
    getGateOfFlight(flightId:string,date:Date){
        for (let flight of this.flights){
            if (flight.getFlightId() == flightId && flight.getDate()==date){
                return flight.getGate()
            }
        }
    }
}