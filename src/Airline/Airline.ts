import { Flight } from "../Flight/Flight";
import { Employee } from "../Person/Employee/Employee";
import { Airplane } from "./Airplane/Airplance";
import { Date } from "../Flight/Date/Date";
import { Booking } from "../Booking/Booking";
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
    addPilot(pilot:Employee){
        this.employees.push(pilot);
    };
    addCoPilot(coPilot:Employee){
        this.employees.push(coPilot)
    };

    addFlight(flight:Flight){
        this.flights.push(flight);
    }
   
    getAllFlight(pilotId:string,date:Date){
        let listFlight:Flight[] = []
        for (let flight of this.flights){
            if (flight.getPilot().getPilotId() === pilotId && flight.isDateEqual(date)){
                listFlight.push(flight);
            }
        }
        return listFlight;
    }
    getSalaryForEmployyees(){
        let salaryEmployee:number = 0
        for (let employee of this.employees){
            salaryEmployee += employee.getSalaryEmployee();
        }
        return salaryEmployee;
    }
}