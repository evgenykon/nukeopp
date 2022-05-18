import { MovementParameters } from "./MovementSimulator";
import SimGeolocationCoordinates from "./SimGeolocationCoordinates";
import LatLon from '../helpers/Geodesy';

class GeoPositionCalculator {

    movement: MovementParameters;
    current: SimGeolocationCoordinates;

    constructor(movement: MovementParameters, current: SimGeolocationCoordinates) {
        this.movement = movement;
        this.current = current;
    }

    get newHeading() {
        return this.movement.direction + (this.current.heading ?? 0);
    }

    getNextStepCoordinates(): SimGeolocationCoordinates {
        const currentPoint = new LatLon(
            this.current.latitude,
            this.current.longitude
        );
        const result = currentPoint.destinationPoint(
            this.movement.distancePerSecond,
            this.newHeading
        );
        return new SimGeolocationCoordinates(
            result.lat,
            result.lon,
            this.movement.speed,
            this.newHeading
        );

        // let position = this.current;
        // position.latitude += this.getDeltaLatitude();
        // position.longitude += this.getDeltaLongitude();
        // position.speed = this.movement.speed;
        // position.heading = Calculations.toRadians(this.getHeading());
        // return position;
        // use geo bearing formula http://www.movable-type.co.uk/scripts/latlong.html
        // https://www.npmjs.com/package/geodesy
    }
}

export default GeoPositionCalculator;