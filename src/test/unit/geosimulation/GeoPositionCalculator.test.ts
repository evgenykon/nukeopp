
import GeoPositionCalculator from "../../../geosimulation/GeoPositionCalculator";
import { MovementParameters } from "../../../geosimulation/MovementSimulator";
import SimGeolocationCoordinates from "../../../geosimulation/SimGeolocationCoordinates";

function rounded(value: number): number {
    return Math.trunc(value * 100000);
}

test("standing at place", () => {
    const calc = new GeoPositionCalculator(
        new MovementParameters(0, 0),
        new SimGeolocationCoordinates(0.0, 0.0)
    );
    const result = calc.getNextStepCoordinates();
    expect(result.latitude).toBe(0);
    expect(result.longitude).toBe(0);
    expect(result.heading).toBe(0);
    expect(result.speed).toBe(0);
});

test("moving forward with speed 1", () => {
    const calc = new GeoPositionCalculator(
        new MovementParameters(1, 0),
        new SimGeolocationCoordinates(0.0, 0.0)
    );
    const result = calc.getNextStepCoordinates();
    expect(rounded(result.latitude)).toBe(0);
    expect(rounded(result.longitude)).toBe(rounded(calc.speedKoef));
    expect(result.heading).toBe(0);
    expect(result.speed).toBe(1);
});

test("moving backward with speed 1", () => {
    const calc = new GeoPositionCalculator(
        new MovementParameters(1, 180),
        new SimGeolocationCoordinates(0.0, 0.0)
    );
    const result = calc.getNextStepCoordinates();
    expect(rounded(result.latitude)).toBe(0);
    expect(rounded(result.longitude)).toBe(rounded(calc.speedKoef * -1));
    expect(result.heading).toBe(180);
    expect(result.speed).toBe(1);
});

test("moving left with speed 1", () => {
    const calc = new GeoPositionCalculator(
        new MovementParameters(1, -90),
        new SimGeolocationCoordinates(0.0, 0.0)
    );
    const result = calc.getNextStepCoordinates();
    expect(rounded(result.latitude)).toBe(rounded(calc.speedKoef * -1));
    expect(rounded(result.longitude)).toBe(0);
    expect(result.heading).toBe(-90);
    expect(result.speed).toBe(1);
});

test("moving right with speed 1", () => {
    const calc = new GeoPositionCalculator(
        new MovementParameters(1, 90),
        new SimGeolocationCoordinates(0.0, 0.0)
    );
    const result = calc.getNextStepCoordinates();
    expect(rounded(result.latitude)).toBe(0
        );
    expect(rounded(result.longitude)).toBe(rounded(calc.speedKoef));
    expect(result.heading).toBe(90);
    expect(result.speed).toBe(1);
});