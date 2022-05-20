import { MovementParameters } from "./MovementSimulator";

class SimGeolocationCoordinates implements GeolocationCoordinates {
  accuracy: number;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number;
  longitude: number;
  speed: number | null;
  meta: MovementParameters | null;

  /**
   * @param latitude Y широта
   * @param longitude X долгота
   * @param speed скорость км/ч
   * @param heading направление degrees, clockwise [0, 360] 0 North, 90 - East, 180 - South, 270 - West
   */
  constructor(latitude:number, longitude:number, speed = 0, heading = 0) {
      this.accuracy = 0;
      this.altitude = null;
      this.altitudeAccuracy = null;
      this.heading = heading;
      this.latitude = latitude;
      this.longitude = longitude;
      this.speed = speed;
      this.meta = null;
  }

  /**
   * @param meta 
   */
  setMeta(meta: MovementParameters) {
    this.meta = meta;
  }
}

export default SimGeolocationCoordinates;