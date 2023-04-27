
export class Route{
    private departureLocation : string;
    private destinationLocation :string
    constructor(routeId:string,departureLocation:string,destinationLocation:string){
        this.departureLocation = departureLocation;
        this.destinationLocation = destinationLocation
    }
}