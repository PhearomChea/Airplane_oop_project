//  --------------------------------------------------
//  --==============Import class====================--
//  --------------------------------------------------

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


//  --------------------------------------------------
//  --===================Main=======================--
//  --------------------------------------------------


//-----Create Time object : new Time(first_number:hour,second_number:min)
let time1 = new Time(10,10);
let time2 = new Time(11,10);
let time3 = new Time(12,10);


//-----Create Date object
let day1 = new Date(10,5,2023);
let day2 = new Date(11,5,2024);
let day3 = new Date(12,5,2024);
let day4 = new Date(13,5,2024);
let day5 = new Date(14,5,2024);
let day6 = new Date(15,5,2024);
let day7 = new Date(16,5,2024);


//-----Create Pilot object
let Pilot01 = new Employee("PL01",pilotType.PILOT,'Sreyka','Thor',"987654321",'sreyka@gmail.com');
let Pilot02 = new Employee("PL02",pilotType.PILOT,'Phearom','Chea',"987654321",'phearom@gmail.com');
let Pilot03 = new Employee("PL02",pilotType.PILOT,'Visal','Sork',"987654321",'phearom@gmail.com');
let Pilot04 = new Employee("PL02",pilotType.PILOT,'Vorak','Yun',"987654321",'phearom@gmail.com');
Pilot01.setSalaryEmployee(1000);
Pilot02.setSalaryEmployee(1500);
Pilot03.setSalaryEmployee(900);
Pilot04.setSalaryEmployee(800);

//-----Create Co_pilot object
let Co_Pilot01 = new Employee("CPL01",pilotType.CO_PILOT,'Dara','De',"987654321",'dara@gmail.com');
let Co_Pilot02 = new Employee("CPL02",pilotType.CO_PILOT,'Nita','Van',"987654321",'nita@gmail.com');
let Co_Pilot03 = new Employee("CPL02",pilotType.CO_PILOT,'Nita','Van',"987654321",'nita@gmail.com');
let Co_Pilot04 = new Employee("CPL02",pilotType.CO_PILOT,'Nita','Van',"987654321",'nita@gmail.com');
Co_Pilot01.setSalaryEmployee(800);
Co_Pilot02.setSalaryEmployee(900);
Co_Pilot03.setSalaryEmployee(700);
Co_Pilot04.setSalaryEmployee(800);

//-----Create Cutsomer object
let customer1 = new Customer('CUS1','Phearom','Chea',"0962646651",'phearomchea@gmail.com');
let customer2 = new Customer('CUS2','Sreyka','Thor',"0987654321",'sreykathor@gmail.com');
let customer3 = new Customer('CUS3','Visal','Sork',"092343241",'visalsork@gmail.com');
let customer4 = new Customer('CUS4','Vorak','Yun',"0913740321",'vorakyun@gmail.com');

//-----Create Meal object
let meal01 = new Meal(TypeMeal.BABY_MEAL);
let meal02 = new Meal(TypeMeal.VEGETABLE);
let meal03 = new Meal(TypeMeal.KOSHER);
let meal04 = new Meal(TypeMeal.DAIRYFREE);
let meal05 = new Meal(TypeMeal.HALAL);
let meal06 = new Meal(TypeMeal.VEGAN);

//-----Create Ticket object
let ticket1 = new Ticket('T01',TypeOfTicket.Bustiness_Class);
let ticket2 = new Ticket('T01',TypeOfTicket.Economy_Class);
let ticket3 = new Ticket('T01',TypeOfTicket.Economy_Flex);

//-----Create Gate object
let gate1 = new Gate('GATE-01');
let gate2 = new Gate('GATE-02');
let gate3 = new Gate('GATE-03');
let gate4 = new Gate('GATE-04');

//-----Create oute object
let route1 = new Route('PP','THAI');
let route2 = new Route('THAI','JAPAN');
let route3 = new Route('JAPAN','USA');
let route4 = new Route('USA','SPAIN');

//-----Create Bag object
let bag1 = new Bag('B01',BagWeght.weght1);
let bag2 = new Bag('B02',BagWeght.weght2);
let bag3 = new Bag('B03',BagWeght.weght2);


//-----Create Airplane object
let airplane1 = new Airplane('F001',120);
let airplane2 = new Airplane('FD24',120);
let airplane3 = new Airplane('FF90',120);
let airplane4 = new Airplane('SS21',120);

//-----Create Flight object
let flight1 = new Flight('T-F01',Pilot01,Co_Pilot01,day1,time1,gate1,route1,airplane1);
let flight2 = new Flight('T-F02',Pilot02,Co_Pilot01,day1,time2,gate1,route2,airplane2);
let flight3 = new Flight('T-F03',Pilot03,Co_Pilot01,day1,time1,gate2,route3,airplane4);
let flight4 = new Flight('T-F04',Pilot01,Co_Pilot01,day1,time1,gate4,route4,airplane3);
let flight5 = new Flight('T-F05',Pilot01,Co_Pilot01,day1,time1,gate4,route4,airplane3);
let flight6 = new Flight('T-F06',Pilot01,Co_Pilot01,day1,time1,gate4,route4,airplane3);
let flight7 = new Flight('T-F07',Pilot01,Co_Pilot01,day1,time1,gate4,route4,airplane3);


//-----Create Airline object
//---Create airline
let airline1 = new Airline('SreykaExpress');


//---Add fight to airline
airline1.addFlight(flight1);
airline1.addFlight(flight2);
airline1.addFlight(flight3);


//---Add pilot to ariline
airline1.addPilot(Pilot01);
airline1.addPilot(Pilot02);


//---Add co pilot to airline
airline1.addCoPilot(Co_Pilot01);
airline1.addCoPilot(Co_Pilot02);


//---Create Trip object
let trip1 = new Trip(typeTrip.RETURN_TICKET,'PP','JAPAN',[flight1,flight2]);
let trip2 = new Trip(typeTrip.RETURN_TICKET,'PP','SPAIN',[flight1,flight2,flight3,flight4]);

//---booking object
let booking1 = new Booking('booking1',500,ticket1,trip1,customer1,[meal01,meal04,meal03],[bag1,bag2]);
let booking2 = new Booking('booking2',2500,ticket1,trip2,customer2,[meal02,meal01,meal06],[bag1,bag2]);


//---booking company object
let company1 = new BookingCompany('Sreyka AirBooking');


//---Add booking to company
company1.addBooking(booking1);
company1.addBooking(booking2);



//-----Create airport object
let airport1 = new Airport('PPAIRPORT','PP',[gate1,gate2,gate3,gate4]);
airport1.addFlight(flight1);
airport1.addFlight(flight2);
airport1.addFlight(flight3);

//  --------------------------------------------------
//  --==============User story======================--
//  --------------------------------------------------

// user Story 1 get get the full details of a passenger’s trip from their Booking Referent number
// console.log(company1.getBookingDetail('booking1'));

// user story 2 check custmer have booking return ticket 
// console.log(company1.getAllCustomerReturnTrip())

// get bookingId or bookingReferent
// console.log(booking1.getBookingId());


// user story 3 check pilot flight
// console.log(airline1.getAllFlightPilot("PL01",day1));

// user stroy 4 check meal for flight
// console.log(company1.getMealforFlight("T-F01"));

// user story 5 get salary
// console.log(airline1.getSalaryForEmployyees());

// user story 6 get gate of flight
// console.log(airport1.getGateOfFlight("T-F01",day1));
