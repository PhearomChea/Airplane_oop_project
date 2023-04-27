import { Pilot } from "../Person/Employee/Pilot";
import { Date } from "./Date/Date";
import { Meal } from "./Meal/Meal"

class Flight{
    private flightCode:string
    private meals:Meal[] = [];
    private pilot:Pilot
    private datetime:Date
    constructor(flightCode:string,meals:Meal[],pilot:Pilot,datetime:Date){
        this.flightCode = flightCode,
        this.meals = meals,
        this.pilot = pilot,
        this.datetime = datetime
    }
    
}