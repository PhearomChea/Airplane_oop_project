
export enum TypeOfTicket{
    Economy_Class = "Economy Class",
    Economy_Flex = "Economy Flex",
    Bustiness_Class = "Bustiness Class"
}
export class Ticket {
    private ticketCode :string;
    private typeOfTicket : TypeOfTicket;
    constructor(ticketCode:string,typeOfTicket : TypeOfTicket){
        this.ticketCode = ticketCode;
        this.typeOfTicket = typeOfTicket;
    }; 
};