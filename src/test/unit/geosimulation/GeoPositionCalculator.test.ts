
import GeoPositionCalculator from "../../../geosimulation/GeoPositionCalculator";
import { MovementParameters } from "../../../geosimulation/MovementSimulator";
import SimGeolocationCoordinates from "../../../geosimulation/SimGeolocationCoordinates";

const coords = {
    Moscow: {
        lat: 55.75340586267649,
        long: 37.61910754845215
    }
}

test("movingNorth", () => {
    const calc = new GeoPositionCalculator(
        new MovementParameters(0, 1, 7000),
        new SimGeolocationCoordinates(0.0, 0.0, 0, 0)
    );
    expect(Math.round(calc.getNextStepCoordinates().latitude * 100000)).toBe(12);
    expect(Math.round(calc.getNextStepCoordinates().longitude * 100000)).toBe(0);
});

test("movingSouth", () => {
    const calc = new GeoPositionCalculator(
        new MovementParameters(0, 1, 7000),
        new SimGeolocationCoordinates(0.0, 0.0, 0, 180)
    );
    expect(Math.round(calc.getNextStepCoordinates().latitude * 100000)).toBe(-12);
    expect(Math.round(calc.getNextStepCoordinates().longitude * 100000)).toBe(0);
});

test("movingEast", () => {
    const calc = new GeoPositionCalculator(
        new MovementParameters(0, 1, 7000),
        new SimGeolocationCoordinates(0.0, 0.0, 0, 90)
    );
    expect(Math.round(calc.getNextStepCoordinates().latitude * 100000)).toBe(0);
    expect(Math.round(calc.getNextStepCoordinates().longitude * 100000)).toBe(12);
});

test("movingWest", () => {
    const calc = new GeoPositionCalculator(
        new MovementParameters(0, 1, 7000),
        new SimGeolocationCoordinates(0.0, 0.0, 0, 270)
    );
    expect(Math.round(calc.getNextStepCoordinates().latitude * 100000)).toBe(-0);
    expect(Math.round(calc.getNextStepCoordinates().longitude * 100000)).toBe(-12);
});

test("movingFastFromMoscowToNorth", () => {
    const calc = new GeoPositionCalculator(
        new MovementParameters(0, 6, 7000),
        new SimGeolocationCoordinates(coords.Moscow.lat, coords.Moscow.long, 100, 0)
    );
    expect(calc.getNextStepCoordinates().latitude).toBe(55.753619627437416);
    expect(calc.getNextStepCoordinates().longitude).toBe(37.61910754845215);
});

test("movingFastFromMoscowToWest", () => {
    const calc = new GeoPositionCalculator(
        new MovementParameters(0, 6, 7000),
        new SimGeolocationCoordinates(coords.Moscow.lat, coords.Moscow.long, 100, 270)
    );
    expect(calc.getNextStepCoordinates().latitude).toBe(55.75340586209198);
    expect(calc.getNextStepCoordinates().longitude).toBe(37.61872850395492);
});

test("movingFastWestWithRotatingLeft", () => {
    const calc = new GeoPositionCalculator(
        new MovementParameters(-9, 6, 7000),
        new SimGeolocationCoordinates(coords.Moscow.lat, coords.Moscow.long, 100, 280)
    );
    calc.movement.rotateLeft();
    expect(calc.getNextStepCoordinates().latitude).toBe(55.75342077357102);
    expect(calc.getNextStepCoordinates().longitude).toBe(37.61872942714402);
});
