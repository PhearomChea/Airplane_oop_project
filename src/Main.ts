
import { Airline } from "./Airline/Airline";
import { Airplane } from "./Airline/Airplane/Airplance";
import { Airport } from "./Airport/Airport";
import { Gate } from "./Airport/Gate/Gate";
import { Route } from "./Airport/Route/Route";
import { Booking } from "./Booking/Booking";
import { Bag, BagWeght } from "./Booking/Trips/Bag";
import { Ticket, TypeOfTicket } from "./Booking/Trips/Ticket";
import { Trip, typeTrip } from "./Booking/Trips/Trip";
import { BookingCompany } from "./BookingSystem";
import { Date } from "./Flight/Date/Date";
import { Flight } from "./Flight/Flight";
import { Meal, TypeMeal } from "./Flight/Meal/Meal";
import { Time } from "./Flight/Time/Time";
import { Customer } from "./Person/Customer/Customer";
import { Employee, EmployeeCategories } from "./Person/Employee/Employee";
import { Pilot } from "./Person/Employee/Pilot";
import { Person } from "./Person/Person";

// Time object ============
let time1 = new Time(10,10)
let time2 = new Time(11,10)


// Date time object ==========
let day1 = new Date(10,5,2023)
day1.setTime(time1);
day1.setTime(time2)
let day2 = new Date(10,5,2023)


// Pilot object =========
let Pilot1 = new Employee(EmployeeCategories.PILOT,'Sreyka','Thor',"987654321",'sreyka@gmail.com');
let Pilot2 = new Employee(EmployeeCategories.PILOT,'PHEAROM','Chea',"987654321",'phearom@gmail.com');

// Co_pilot object =========
let Co_Pilot1 = new Employee(EmployeeCategories.CO_PILOT,'Dara','De',"987654321",'dara@gmail.com');
let Co_Pilot2 = new Employee(EmployeeCategories.CO_PILOT,'Nita','Van',"987654321",'nita@gmail.com');

// Cutsomer object =========
let customer1 = new Customer('Cus01)','Po','Pu',"0987654321",'popu@gmail.com')
let customer2 = new Customer('Cus02)','Pit','Pup',"0987654321",'pitpup@gmail.com')

// meal object ========
let meal1 = new Meal([TypeMeal.BABY_MEAL,TypeMeal.VEGETABLE]);
let meal2 = new Meal([TypeMeal.BABY_MEAL,TypeMeal.VEGETABLE]);

// ticket object ======
let ticket1 = new Ticket('T01',TypeOfTicket.Bustiness_Class)
let ticket2 = new Ticket('T01',TypeOfTicket.Economy_Class)
let ticket3 = new Ticket('T01',TypeOfTicket.Economy_Flex)
// gate object =========
let gate1 = new Gate('01');
let gate2 = new Gate('02');
let gate3 = new Gate('03');

// route object ============
let route1 = new Route('PP','THAI');
let route2 = new Route('THAI','JAPAN');
let route3 = new Route('JAPAN','USA');

// bag object ===========
let bag1 = new Bag('B01',BagWeght.weght1)
let bag2 = new Bag('B02',BagWeght.weght1)
let bag3 = new Bag('B03',BagWeght.weght1)
// airplane object =======
let airplane1 = new Airplane('F001',10)






// flight object ==========
let flight1 = new Flight('P-T01',[meal1,meal2],Pilot1,day1,gate1,route1)
let flight2 = new Flight('P-T02',[meal1,meal2],Pilot2,day1,gate1,route1)
let flight3 = new Flight('P-T03',[meal1,meal2],Pilot1,day1,gate1,route1)

// airline object ===========
let airline1 = new Airline('SreykaExpress');
airline1.addFlight(flight1);
airline1.addFlight(flight2);
airline1.addFlight(flight3);

airline1.addEmployee(Pilot1)
airline1.addEmployee(Pilot2)
// airport object ==========
let airport1 = new Airport('PPAIRPORT','PP');
airport1.addFlight(flight1);
airport1.addFlight(flight1);
airport1.addFlight(flight1);
// trip object ===========
let trip1 = new Trip(typeTrip.NO_RETURN_TICKET,'PP','UK',[flight1,flight2]);
let trip2 = new Trip(typeTrip.RETURN_TICKET,'PP','UK',[flight1,flight2]);

// // booking object ==============
let booking1 = new Booking('booking1',300,ticket1,trip1,customer1,[bag1,bag2]);
let booking2 = new Booking('booking2',500,ticket1,trip2,customer2,[bag1,bag2]);

console.log(booking2.hasReturnTrip());


// booking company object ===============
let company1 = new BookingCompany('Sreyka AirBooking');
// add booking to company---------
company1.addBooking(booking1) // 
company1.addBooking(booking2) // 

// user Story 1 get get the full details of a passenger’s trip from their Booking Referent number------
// console.log(company1.getBookingDetail('booking1'));

// get bookingId or bookingReferent -----------
// console.log(booking1.getBookingId());

// console.log(company1);