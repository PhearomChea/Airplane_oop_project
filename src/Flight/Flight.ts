import { Airline } from "../Airline/Airline";
import { Airport } from "../Airport/Airport";
import { Gate } from "../Airport/Gate/Gate";
import { Route } from "../Airport/Route/Route";
import { Pilot } from "../Person/Employee/Pilot";
import { Date } from "./Date/Date";
import { Meal } from "./Meal/Meal"

export class Flight{
    private flightCode:string
    private meals:Meal[] = [];
    private pilot:Pilot
    private datetime:Date
    private gate:Gate
    private route:Route
    constructor(flightCode:string,meals:Meal[],pilot:Pilot,datetime:Date,gate:Gate,route:Route){
        this.flightCode = flightCode,
        this.meals = meals,
        this.pilot = pilot,
        this.datetime = datetime,
        this.gate = gate,
        this.route = route
    }
    getGate(){
        return this.gate
    }
}