import { Flight } from "../Flight/Flight";
import { Employee } from "../Person/Employee/Employee";
import { Pilot } from "../Person/Employee/Pilot";
import { Airplane } from "./Airplane/Airplance";
export class Airline {
    private airlineName : string;
    private airplanes : Airplane[] = [];
    private employees:Employee[] = [];
    private flights:Flight[] = [];
    constructor(arilineName:string){
        this.airlineName = arilineName;
    }
    addAriplane(airplane:Airplane){
        this.airplanes.push(airplane);
    }
    getAirlineName(){
        return this.airlineName;
    }
    addEmployee(employee:Employee){
        this.employees.push(employee);
    }

    addFlight(flight:Flight){
        this.flights.push(flight);
    }
   
    getAllFlight(pilot:Pilot,date:Date){
        
    }
}