
export enum BagWeght{
    weght1 = "10kg -> 20kg",
    weght2 = "20kg -> 40kg",
    weght3 = "40kg -> 60kg"
}
export class Bag {
    private bagCode :string;
    private bagWegth : BagWeght
    constructor(bagCode:string, bagWeght:BagWeght){
        this.bagCode = bagCode;
        this.bagWegth = bagWeght
    }
}