class SimGeolocationCoordinates implements GeolocationCoordinates {
  accuracy: number;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number;
  longitude: number;
  speed: number | null;
  constructor(latitude:number, longitude:number, speed = 0, heading = 0) {
      this.accuracy = 0;
      this.altitude = null;
      this.altitudeAccuracy = null;
      this.heading = heading;
      this.latitude = latitude;
      this.longitude = longitude;
      this.speed = speed;
  }
}

export default SimGeolocationCoordinates;