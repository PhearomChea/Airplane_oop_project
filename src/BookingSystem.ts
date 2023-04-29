import { Booking } from "./Booking/Booking"
import { Flight } from "./Flight/Flight";
import { Meal } from "./Flight/Meal/Meal";
import { Customer } from "./Person/Customer/Customer";
export class BookingCompany{
    private companyName:string;
    private bookings:Booking[] = [];
    constructor(companyName:string){
        this.companyName = companyName
    };

    addBooking(booking:Booking):void
    {
        this.bookings.push(booking);
    };

    getAllBooking():Booking[]
    {
        return this.bookings
    };
    
    getBookingDetail(bookId:string):Booking|undefined
    {
        for (let booking of this.bookings){            
            if (booking.getBookingId() === bookId){
                return booking;
            };
        };
    };
   
    getAllCustomerReturnTrip():(Customer|undefined)[]
    {
        let listCustomer = [];
        for (let booking of this.bookings){  
            if (booking.hasReturnTrip()){
                listCustomer.push(booking.getCustomerReturnTrip())
            };     
        };
        return listCustomer;
    };

    getMealforFlight(flightId:string):Meal[] | undefined
    {
        for (let booking of this.bookings){
            if (booking.getTrips().getFlight(flightId)?.getFlightId() == flightId){
                return booking.getMeal();
            };
        };
        return undefined;
    };
}
