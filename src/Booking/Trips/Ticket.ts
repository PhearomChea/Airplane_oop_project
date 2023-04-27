
export enum TypeOfTicket{
    type1 = "Economy Class",
    type2 = "Economy Flex",
    type3 = "Bustiness Class"
}
export class ticket {
    private ticketCode :string;
    private typeOfTicket : TypeOfTicket
    constructor(ticketCode:string,typeOfTicket : TypeOfTicket){
        this.ticketCode = ticketCode;
        this.typeOfTicket = typeOfTicket
    }
}