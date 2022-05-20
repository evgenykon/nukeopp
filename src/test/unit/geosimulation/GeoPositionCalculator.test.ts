
import GeoPositionCalculator from "../../../geosimulation/GeoPositionCalculator";
import { MovementParameters } from "../../../geosimulation/MovementSimulator";
import SimGeolocationCoordinates from "../../../geosimulation/SimGeolocationCoordinates";

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