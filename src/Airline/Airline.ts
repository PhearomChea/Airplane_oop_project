import { Flight } from "../Flight/Flight";
import { Airplane } from "./Airplane/Airplance";
export class Airline {
    private airlineName : string;
    private airplanes : Airplane[] = [];
    constructor(arilineName:string){
        this.airlineName = arilineName;
    }
    addAriplane(airplane:Airplane){
        this.airplanes.push(airplane);
    }
    getAirlineName(){
        return this.airlineName;
    }
   
}