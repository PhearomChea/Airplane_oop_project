
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
import { Employee, pilotType } from "./Person/Employee/Employee";
import { Person } from "./Person/Person";

// Time object ============
let time1 = new Time(10,10)
let time2 = new Time(11,10)


// Date time object ==========
let day1 = new Date(10,5,2023)
// day1.setTime(time1);
// day1.setTime(time2)
let day2 = new Date(10,5,2024)
// console.log(day1)
// console.log(day2);

// Pilot object =========
let Pilot001 = new Employee("PL001",pilotType.PILOT,'Sreyka','Thor',"987654321",'sreyka@gmail.com');
let Pilot002 = new Employee("PL002",pilotType.PILOT,'PHEAROM','Chea',"987654321",'phearom@gmail.com');
Pilot001.setSalaryEmployee(1000);
Pilot002.setSalaryEmployee(800);

// console.log(Pilot1)
// Co_pilot object =========
let Co_Pilot001 = new Employee("CPL001",pilotType.CO_PILOT,'Dara','De',"987654321",'dara@gmail.com');
let Co_Pilot002 = new Employee("CPL001",pilotType.CO_PILOT,'Nita','Van',"987654321",'nita@gmail.com');
Co_Pilot001.setSalaryEmployee(500)
Co_Pilot002.setSalaryEmployee(600)

// Cutsomer object =========
let customer1 = new Customer('Cus01','Po','Pu',"0987654321",'popu@gmail.com')
let customer2 = new Customer('Cus02','Pit','Pup',"0987654321",'pitpup@gmail.com')
// console.log(customer2)
// meal object ========
let meal1 = new Meal(TypeMeal.BABY_MEAL);
let meal2 = new Meal(TypeMeal.VEGETABLE);

// ticket object ======
let ticket1 = new Ticket('T01',TypeOfTicket.Bustiness_Class)
let ticket2 = new Ticket('T01',TypeOfTicket.Economy_Class)
let ticket3 = new Ticket('T01',TypeOfTicket.Economy_Flex)
// gate object =========
let gate1 = new Gate('GATE-01');
let gate2 = new Gate('GATE-02');
let gate3 = new Gate('GATE-03');
let gate4 = new Gate('GATE-04');

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
let flight1 = new Flight('P-T01',Pilot001,Co_Pilot001,day1,gate1,route1)
let flight2 = new Flight('P-T02',Pilot002,Co_Pilot001,day1,gate1,route1)
let flight3 = new Flight('P-T03',Pilot001,Co_Pilot001,day1,gate1,route1)
// console.log(flight1)
// airline object ===========
// create airline
let airline1 = new Airline('SreykaExpress');
// add fight
airline1.addFlight(flight1);
airline1.addFlight(flight2);
airline1.addFlight(flight3);
// add pilot
airline1.addPilot(Pilot001)
airline1.addPilot(Pilot002)
// add co pilot
airline1.addCoPilot(Co_Pilot001)
airline1.addCoPilot(Co_Pilot002)
// airport object ==========
let airport1 = new Airport('PPAIRPORT','PP',[gate1,gate2,gate3,gate4]);
airport1.addFlight(flight1);
airport1.addFlight(flight1);
airport1.addFlight(flight1);
// trip object ===========
let trip1 = new Trip(typeTrip.RETURN_TICKET,'PP','UK',[flight1,flight2]);
let trip2 = new Trip(typeTrip.RETURN_TICKET,'PP','UK',[flight1,flight2]);
// console.log(trip1)
// // booking object ==============
let booking1 = new Booking('booking1',300,ticket1,trip1,customer1,[meal1],[bag1,bag2]);
let booking2 = new Booking('booking2',500,ticket1,trip2,customer2,[meal2],[bag1,bag2]);

// console.log(booking2.hasReturnTrip());


// booking company object ===============
let company1 = new BookingCompany('Sreyka AirBooking');
// add booking to company---------
company1.addBooking(booking1) // 
company1.addBooking(booking2) // 

// user Story 1 get get the full details of a passenger’s trip from their Booking Referent number------
// console.log(company1.getBookingDetail('booking1'));

// user story 2 check custmer have booking return ticket 
// console.log(company1.getAllCustomerReturnTrip())

// get bookingId or bookingReferent -----------
// console.log(booking1.getBookingId());

// console.log(company1);
// console.log(trip1)

// user story 3 check pilot flight
// console.log(airline1.getAllFlight("PL001",day1));

// user stroy 4 check meal for flight----
console.log(company1.getMealforFlight("P-T01"))

// user story 5 get salary
// console.log(airline1.getSalaryForEmployyees())

// user story 6 get gate of flight
// console.log(airport1.getGateOfFlight("P-T01",day1))

