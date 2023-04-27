import { Person } from "../Person";
export class Employee extends Person{

    employeeCategory:EmployeeCategories
    constructor(employeeCategory:EmployeeCategories,firstName:string,lastName:string,phoneNumber:number,email:string){
        super(firstName,lastName,phoneNumber,email)
        this.employeeCategory = employeeCategory
    }
}

export enum EmployeeCategories{
    PILOT = 'PILOT',
    CO_PILOT = 'CO_PILOT'

}
