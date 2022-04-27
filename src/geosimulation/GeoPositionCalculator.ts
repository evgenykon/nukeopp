import { MovementParameters } from "./MovementSimulator";
import SimGeolocationCoordinates from "./SimGeolocationCoordinates";

class GeoPositionCalculator {
    movement: MovementParameters;
    current: SimGeolocationCoordinates;

    constructor(movement: MovementParameters, current: SimGeolocationCoordinates) {
        this.movement = movement;
        this.current = current;
    }

    getNextStepCoordinates(): SimGeolocationCoordinates {
        let position = this.current;
        position.latitude += 0.0001;
        position.speed = this.movement.speed;
        return position;
    }
}

export default GeoPositionCalculator;