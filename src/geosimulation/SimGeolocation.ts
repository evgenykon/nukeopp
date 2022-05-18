import SimGeolocationCoordinates from "./SimGeolocationCoordinates";

class SimGeolocation implements GeolocationPosition {
    coords: GeolocationCoordinates;
    timestamp: number;
    constructor(lat:number, long:number, speed:number, heading:number) {
      //super();
      this.coords = new SimGeolocationCoordinates(lat, long, speed, heading);
      this.timestamp = 0;
    }
}

export default SimGeolocation;