import { Airplan } from "./Ariplance/Airplance";
export class Ariline {
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