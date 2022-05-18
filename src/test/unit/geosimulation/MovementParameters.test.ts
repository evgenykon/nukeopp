
import { MovementParameters } from "../../../geosimulation/MovementSimulator";


test("gear1", () => {
    let mp = new MovementParameters(0, 1, 7000);
    expect(mp.speed).toBeGreaterThan(30000);
    expect(mp.speed).toBeLessThan(50000);
});


test("gear2", () => {
    let mp = new MovementParameters(0, 2, 7000);
    expect(mp.speed).toBeGreaterThan(50000);
    expect(mp.speed).toBeLessThan(70000);
});

test("gear3", () => {
    let mp = new MovementParameters(0, 3, 7000);
    expect(mp.speed).toBeGreaterThan(70000);
    expect(mp.speed).toBeLessThan(100000);
});
test("gear4", () => {
    let mp = new MovementParameters(0, 4, 7000);
    expect(mp.speed).toBeGreaterThan(100000);
    expect(mp.speed).toBeLessThan(120000);
});
test("gear5", () => {
    let mp = new MovementParameters(0, 5, 7000);
    expect(mp.speed).toBeGreaterThan(120000);
    expect(mp.speed).toBeLessThan(140000);
});
test("gear6", () => {
    let mp = new MovementParameters(0, 6, 7000);
    expect(mp.speed).toBeGreaterThan(140000);
    expect(mp.speed).toBeLessThan(200000);
});