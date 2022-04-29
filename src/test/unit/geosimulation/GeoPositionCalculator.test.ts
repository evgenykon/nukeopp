
import GeoPositionCalculator from "../../../geosimulation/GeoPositionCalculator";
import { MovementParameters } from "../../../geosimulation/MovementSimulator";
import SimGeolocationCoordinates from "../../../geosimulation/SimGeolocationCoordinates";

type Int = number & { __int__: void };

function rounded(value: number): Int {
    return Math.round(value * 100000) as Int;
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
