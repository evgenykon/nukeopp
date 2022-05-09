import { MovementParameters } from "./MovementSimulator";
import SimGeolocationCoordinates from "./SimGeolocationCoordinates";

class GeoPositionCalculator {

    readonly speedKoef = 0.0001;

    movement: MovementParameters;
    current: SimGeolocationCoordinates;

    constructor(movement: MovementParameters, current: SimGeolocationCoordinates) {
        this.movement = movement;
        this.current = current;
    }

    toDegrees_ (angle: number): number {
        return angle * (180 / Math.PI);
    }

    toRadians_ (angle: number): number {
        return angle * (Math.PI / 180);
    }

    getNextStepCoordinates(): SimGeolocationCoordinates {
        let position = this.current;
        const rotateKoef = 1;
        const distancePerSecond = this.movement.speed * this.speedKoef;
        //console.log('getNextStepCoordinates distancePerSecond', distancePerSecond);
        const heading = this.movement.direction * this.movement.speed * rotateKoef;
        const deltaLong = distancePerSecond * Math.sin(this.toRadians_(heading));
        const deltaLat = distancePerSecond * Math.cos(this.toRadians_(heading));
        position.latitude += deltaLat;
        position.longitude += deltaLong;
        position.speed = this.movement.speed;
        position.heading = heading ? heading * -1 : 0;
        return position;
    }
}

export default GeoPositionCalculator;