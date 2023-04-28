import { Airplan } from "./Airplance/Airplance";
export class Airline {
    private airlineName : string;
    private airplanes : Airplan[] = []
    constructor(arilineName:string){
        this.airlineName = arilineName;
    }
    addAriplane(airplane:Airplan){
        this.airplanes.push(airplane);
    }
    getAirlineName(){
        return this.airlineName;
    }
}