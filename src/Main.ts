import { Date } from "./Flight/Date/Date";
import { Time } from "./Flight/Time/Time";
import { Customer } from "./Person/Customer/Customer";
import { Employee, EmployeeCategories } from "./Person/Employee/Employee";
import { Pilot } from "./Person/Employee/Pilot";
import { Person } from "./Person/Person";

// Time object ============
let time1 = new Time(10,10)
let time2 = new Time(11,10)


// Date time object ==========
let day1 = new Date(10,5,2023,time1)
let day2 = new Date(10,5,2023,time2)


// Pilot object =========
let Pilot1 = new Employee(EmployeeCategories.PILOT,'Sreyka','Thor',0987654321,'sreyka@gmail.com');
let Pilot2 = new Employee(EmployeeCategories.PILOT,'PHEAROM','Chea',0987654321,'phearom@gmail.com');

// Co_pilot object =========
let Co_Pilot1 = new Employee(EmployeeCategories.CO_PILOT,'Dara','De',0987654321,'dara@gmail.com');
let Co_Pilot2 = new Employee(EmployeeCategories.CO_PILOT,'Nita','Van',0987654321,'nita@gmail.com');

// Cutsomer object =========
let customer1 = new Customer('Cus01)','Po','Pu',0987654321,'popu@gmail.com')
let customer2 = new Customer('Cus02)','Pit','Pup',0987654321,'pitpup@gmail.com')

