import SimGeolocationCoordinates from "./SimGeolocationCoordinates";

class SimGeolocation implements GeolocationPosition {
    coords: GeolocationCoordinates;
    timestamp: number;
    constructor(long:number, lat:number, speed:number, heading:number) {
      //super();
      this.coords = new SimGeolocationCoordinates(long, lat, speed, heading);
      this.timestamp = 0;
    }
}

export default SimGeolocation;