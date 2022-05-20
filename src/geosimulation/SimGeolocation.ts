import { MovementParameters } from "./MovementSimulator";
import SimGeolocationCoordinates from "./SimGeolocationCoordinates";

class SimGeolocation implements GeolocationPosition {
    coords: SimGeolocationCoordinates;
    timestamp: number;
    meta: MovementParameters;
    constructor(lat:number, long:number, speed:number, heading:number, meta:MovementParameters) {
      this.coords = new SimGeolocationCoordinates(lat, long, speed, heading);
      this.meta = meta;
      this.timestamp = 0;
    }

    getSimGeolocationCoordinates(): SimGeolocationCoordinates {
      return this.coords;
    }
}

export default SimGeolocation;