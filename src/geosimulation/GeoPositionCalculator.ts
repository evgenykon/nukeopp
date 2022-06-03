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

    /**
     * Angle in degrees
     */
    get newHeading() {
        let heading = this.movement.direction + (this.current.heading ?? 0);
        if (heading < 0) {
            heading = 360 + heading;
        }
        if (heading > 360) {
            heading = heading - 360;
        }
        return heading;
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
        const coords = new SimGeolocationCoordinates(
            result.lat,
            result.lon,
            this.movement.speed,
            this.newHeading
        );
        coords.setMeta(this.movement);
        return coords;
    }
}

export default GeoPositionCalculator;