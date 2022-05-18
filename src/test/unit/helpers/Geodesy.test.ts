import LatLon from '../../../helpers/Geodesy';

test('destinationPoint', () => {
    const lat = 55.75340586267649;
    const long = 37.61910754845215;
    const direction360 = 316.86816;
    const distanceInMeters = 37000;
    const p1 = new LatLon(lat, long);
    const p2 = p1.destinationPoint(distanceInMeters, direction360);
    expect(Math.round(p2.latitude * 1000)).toBe(55995);
    expect(Math.round(p2.longitude * 1000)).toBe(37214);
});