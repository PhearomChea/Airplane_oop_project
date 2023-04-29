import { Person } from "../Person";
export class Employee extends Person{
    protected pilotId:string;
    protected salary: number;
    constructor(pilotId:string,pilotType:pilotType,firstName:string,lastName:string,phoneNumber:string,email:string){
        super(firstName,lastName,phoneNumber,email);
        this.pilotId = pilotId;
    };

    getPilotId():string
    {
        return this.pilotId;
    };

    setSalaryEmployee(salary:number):void
    {
        this.salary = salary;
    };

    getSalaryEmployee():number
    {
        return this.salary;
    };
};

export enum pilotType{
    PILOT = 'PILOT',
    CO_PILOT = 'CO_PILOT'
};


