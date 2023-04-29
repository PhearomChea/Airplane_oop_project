import { Booking } from "./Booking/Booking"
import { Customer } from "./Person/Customer/Customer"

export class BookingCompany{
    private companyName:string
    private bookings:Booking[] = [];
    constructor(companyName:string){
        this.companyName = companyName
    }

    addBooking(booking:Booking){
        this.bookings.push(booking);
    }
    getAllBooking(){
        return this.bookings
    }
    
    // get bookinginformation by bookid
    getBookingDetail(bookId:string){
        for (let booking of this.bookings){            
            if (booking.getBookingId() === bookId){
                return booking;
            }
        }
    }
   
   
    getAllCustomerReturnTrip(){
        let listCustomer = [];
        for (let booking of this.bookings){  
            if (booking.hasReturnTrip()){
                listCustomer.push(booking.getCustomerReturnTrip())
            }        
        }
        return listCustomer;
    }

}
