
export class Booking{
    private bookingId : string;
    private price : number;
    private ticket : string;
    constructor(bookingId:string,price:number,ticket:string){
        this.bookingId = bookingId;
        this.price = price;
        this.ticket = ticket
    }
}