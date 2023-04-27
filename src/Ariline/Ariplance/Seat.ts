
export enum TypeSeat{
    nearWindow = "Near Windows",
    nearBathroom = "Near Bathroom"
}
export class Seat{
    private seatId : string;
    private typeSeat : TypeSeat;
    constructor(seatId:string,typeSeat:TypeSeat){
        this.seatId = seatId;
        this.typeSeat = typeSeat;
    }
}