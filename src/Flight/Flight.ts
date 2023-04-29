import { Airline } from "../Airline/Airline";
import { Airport } from "../Airport/Airport";
import { Gate } from "../Airport/Gate/Gate";
import { Route } from "../Airport/Route/Route";
import { Employee } from "../Person/Employee/Employee";
import { Date } from "./Date/Date";
import { Meal } from "./Meal/Meal"

export class Flight{
    private flightId:string
    private pilot:Employee
    private coPilot:Employee
    private dates:Date
    private gate:Gate
    private route:Route
    constructor(flightId:string,pilot:Employee,coPilot:Employee,dates:Date,gate:Gate,route:Route){
        this.flightId = flightId,
        this.pilot = pilot,
        this.coPilot = coPilot,
        this.dates = dates,
        this.gate = gate,
        this.route = route
    }
    getGate(){
        return this.gate
    }
    getPilot(){
        return this.pilot
    }
    getDate(){
        return this.dates
    }
    isDateEqual(date:Date){
        return (this.dates.day == date.day && this.dates.month == date.month && this.dates.year == date.year);
    }

    getFlightId(){
        return this.flightId
    }

}