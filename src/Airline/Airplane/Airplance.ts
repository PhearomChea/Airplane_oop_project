import { Seat } from "./Seat";

export class Airplane{
    private ariplanId: string ;
    private numberSeat : number;
    private seat : Seat[] = []
    constructor(ariplanId:string,numberSeat:number){
        this.ariplanId = ariplanId;
        this.numberSeat = numberSeat
    }
}