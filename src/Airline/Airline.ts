import { Flight } from "../Flight/Flight";
import { Employee } from "../Person/Employee/Employee";
import { Airplane } from "./Airplane/Airplance";
import { Date } from "../Flight/Date/Date";
export class Airline {
    private airlineName : string;
    private airplanes : Airplane[] = [];
    private employees:Employee[] = [];
    private flights:Flight[] = [];
    constructor(arilineName:string){
        this.airlineName = arilineName;
    };

    addAriplane(airplane:Airplane):void
    {
        this.airplanes.push(airplane);
    };

    getAirlineName():string
    {
        return this.airlineName;
    };

    addPilot(pilot:Employee):void
    {
        this.employees.push(pilot);
    };

    addCoPilot(coPilot:Employee):void
    {
        this.employees.push(coPilot)
    };

    addFlight(flight:Flight):void
    {
        this.flights.push(flight);
    };
   
    getAllFlightPilot(pilotId:string,date:Date):Flight[]
    {
        let listFlight:Flight[] = []
        for (let flight of this.flights){
            if (flight.getPilot().getPilotId() === pilotId && flight.isDateEqual(date)){
                listFlight.push(flight);
            };
        };
        return listFlight;
    };

    getAllFlightCopilot(CoPilotId:string,date:Date):Flight[]
    {
        let listFlight:Flight[] = []
        for (let flight of this.flights){
            if (flight.getCoPilot().getPilotId() === CoPilotId && flight.isDateEqual(date)){
                listFlight.push(flight);
            };
        };
        return listFlight;
    };

    getSalaryForEmployyees():number
    {
        let salaryEmployee:number = 0
        for (let employee of this.employees){
            salaryEmployee += employee.getSalaryEmployee();
        };
        return salaryEmployee;
    };
};