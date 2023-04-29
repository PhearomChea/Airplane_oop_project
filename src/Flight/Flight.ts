import { Airplane } from "../Airline/Airplane/Airplance";
import { Gate } from "../Airport/Gate/Gate";
import { Route } from "../Airport/Route/Route";
import { Employee } from "../Person/Employee/Employee";
import { Date } from "./Date/Date";
import { Time } from "./Time/Time";

export class Flight{
    private flightId:string;
    private pilot:Employee;
    private coPilot:Employee;
    private dates:Date;
    private timeFly: Time;
    private gate:Gate;
    private route:Route;
    private airplane:Airplane;
    constructor(flightId:string,pilot:Employee,coPilot:Employee,dates:Date,timeFly:Time,gate:Gate,route:Route,airplane:Airplane){
        this.flightId = flightId;
        this.pilot = pilot;
        this.coPilot = coPilot;
        this.dates = dates;
        this.timeFly = timeFly;
        this.gate = gate;
        this.route = route;
        this.airplane = airplane;
    };

    getGate():Gate
    {
        return this.gate
    };

    getPilot():Employee
    {
        return this.pilot
    };

    getCoPilot():Employee
    {
        return this.coPilot
    }
    
    getDate():Date
    {
        return this.dates
    };

    isDateEqual(date:Date):boolean
    {
        return (this.dates.day == date.day && this.dates.month == date.month && this.dates.year == date.year);
    };

    getFlightId():string
    {
        return this.flightId
    };
};