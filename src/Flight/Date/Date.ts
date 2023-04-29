import { Time } from "../Time/Time"

export class Date{
    day:number
    month:number
    year:number
    time:Time
    constructor(day:number,month:number,year:number){
        this.day = day
        this.month = month
        this.year = year
    }
    setTime(time:Time){
        this.time = time
    }
}