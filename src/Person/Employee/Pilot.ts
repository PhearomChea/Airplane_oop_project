import { Person } from "../Person";
import { Employee, EmployeeCategories } from "./Employee";

export class Pilot extends Employee{
    constructor(employeeCategory:EmployeeCategories,firstName:string,lastName:string,phoneNumber:number,email:string){
        super(employeeCategory,firstName,lastName,phoneNumber,email)
    }
}