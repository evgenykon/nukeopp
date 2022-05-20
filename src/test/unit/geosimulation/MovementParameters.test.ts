
import { MovementParameters } from "../../../geosimulation/MovementSimulator";


test("gear1", () => {
    let mp = new MovementParameters(0, 1, 7000);
    expect(mp.speed).toBeGreaterThan(30);
    expect(mp.speed).toBeLessThan(50);
});


test("gear2", () => {
    let mp = new MovementParameters(0, 2, 7000);
    expect(mp.speed).toBeGreaterThan(50);
    expect(mp.speed).toBeLessThan(70);
});

test("gear3", () => {
    let mp = new MovementParameters(0, 3, 7000);
    expect(mp.speed).toBeGreaterThan(70);
    expect(mp.speed).toBeLessThan(100);
});
test("gear4", () => {
    let mp = new MovementParameters(0, 4, 7000);
    expect(mp.speed).toBeGreaterThan(100);
    expect(mp.speed).toBeLessThan(120);
});
test("gear5", () => {
    let mp = new MovementParameters(0, 5, 7000);
    expect(mp.speed).toBeGreaterThan(120);
    expect(mp.speed).toBeLessThan(140);
});
test("gear6", () => {
    let mp = new MovementParameters(0, 6, 7000);
    expect(mp.speed).toBeGreaterThan(140);
    expect(mp.speed).toBeLessThan(200);
});