import { Booking } from "./Booking/Booking"
import { Customer } from "./Person/Customer/Customer"

class BookingCompany{
    private companyName:string
    private bookings:Booking[] = [];
    constructor(companyName:string){
        this.companyName = companyName
    }

    GetBookingDetail(customer:Customer){
        for (let booking of this.bookings){
            if (booking.getCustomerName() === customer){
                return booking
            }
        }
    }
}
