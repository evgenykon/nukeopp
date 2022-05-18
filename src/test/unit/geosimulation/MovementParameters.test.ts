
import { MovementParameters } from "../../../geosimulation/MovementSimulator";


test("gear1", () => {
    let mp = new MovementParameters(0, 1, 7000);
    expect(mp.distancePerHour).toBeGreaterThan(30000);
    expect(mp.distancePerHour).toBeLessThan(50000);
});


test("gear2", () => {
    let mp = new MovementParameters(0, 2, 7000);
    expect(mp.distancePerHour).toBeGreaterThan(50000);
    expect(mp.distancePerHour).toBeLessThan(70000);
});

test("gear3", () => {
    let mp = new MovementParameters(0, 3, 7000);
    expect(mp.distancePerHour).toBeGreaterThan(70000);
    expect(mp.distancePerHour).toBeLessThan(100000);
});
test("gear4", () => {
    let mp = new MovementParameters(0, 4, 7000);
    expect(mp.distancePerHour).toBeGreaterThan(100000);
    expect(mp.distancePerHour).toBeLessThan(120000);
});
test("gear5", () => {
    let mp = new MovementParameters(0, 5, 7000);
    expect(mp.distancePerHour).toBeGreaterThan(120000);
    expect(mp.distancePerHour).toBeLessThan(140000);
});
test("gear6", () => {
    let mp = new MovementParameters(0, 6, 7000);
    expect(mp.distancePerHour).toBeGreaterThan(140000);
    expect(mp.distancePerHour).toBeLessThan(200000);
});