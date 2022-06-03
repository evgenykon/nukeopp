
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

test("movingFastTryToRotateLeftTooMuch", () => {
    let movement = new MovementParameters(-20, 6, 7000);
    movement.rotateLeft();
    expect(movement.direction).toBe(-20);
});

test("starting", () => {
    let movement = new MovementParameters(0, 0, 0);
    movement.onDriveOn();
    expect(movement.throttle).toBe(2500);
    expect(movement.gear).toBe(1);
});

test("switchNextGear", () => {
    let movement = new MovementParameters(0, 5, 7000);
    movement.onDriveOn();
    expect(movement.throttle).toBe(90);
    expect(movement.gear).toBe(6);
});

test("maxPowerNoGearSwitch", () => {
    let movement = new MovementParameters(0, 6, 7000);
    movement.onDriveOn();
    expect(movement.throttle).toBe(7000);
    expect(movement.gear).toBe(6);
});

test("switchPrevGear", () => {
    let movement = new MovementParameters(0, 5, 100);
    movement.onAutoRotation();
    expect(movement.throttle).toBe(7000);
    expect(movement.gear).toBe(4);
});

test("selfStopping", () => {
    let movement = new MovementParameters(0, 1, 100);
    movement.onAutoRotation();
    expect(movement.throttle).toBe(0);
    expect(movement.gear).toBe(0);
});

test("breaking", () => {
    let movement = new MovementParameters(0, 3, 3000);
    movement.onStop();
    expect(movement.throttle).toBe(7000);
    expect(movement.gear).toBe(2);
});