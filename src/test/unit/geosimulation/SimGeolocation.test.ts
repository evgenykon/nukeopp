import SimGeolocation from "../../../geosimulation/SimGeolocation";

test('Moscow coordinates', () => {
    const location = new SimGeolocation(55.7529382, 37.617259, 0, 0);
    expect(Math.round(location.coords.latitude)).toBe(56);
    expect(Math.round(location.coords.longitude)).toBe(38);
});