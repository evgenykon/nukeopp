

/**
 * Functions for manipulating generic 3-d vectors.
 * @source 'geodesy/vector3d.js'
 *
 * Functions return vectors as return results, so that operations can be chained.
 *
 * @example
 *   const v = v1.cross(v2).dot(v3) // ≡ v1×v2⋅v3
 */
 class Vector3d {

    x:number;
    y:number;
    z:number;

    /**
     * Creates a 3-d vector.
     *
     * @param {number} x - X component of vector.
     * @param {number} y - Y component of vector.
     * @param {number} z - Z component of vector.
     *
     * @example
     *   import Vector3d from '/js/geodesy/vector3d.js';
     *   const v = new Vector3d(0.267, 0.535, 0.802);
     */
    constructor(x:number, y:number, z:number) {
        if (isNaN(x) || isNaN(x) || isNaN(x)) throw new TypeError(`invalid vector [${x},${y},${z}]`);

        this.x = Number(x);
        this.y = Number(y);
        this.z = Number(z);
    }


    /**
     * Length (magnitude or norm) of ‘this’ vector.
     *
     * @returns {number} Magnitude of this vector.
     */
    get length():number 
    {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }


    /**
     * Adds supplied vector to ‘this’ vector.
     *
     * @param   {Vector3d} v - Vector to be added to this vector.
     * @returns {Vector3d} Vector representing sum of this and v.
     */
    plus(v:Vector3d): Vector3d
    {
        if (!(v instanceof Vector3d)) throw new TypeError('v is not Vector3d object');

        return new Vector3d(this.x + v.x, this.y + v.y, this.z + v.z);
    }


    /**
     * Subtracts supplied vector from ‘this’ vector.
     *
     * @param   {Vector3d} v - Vector to be subtracted from this vector.
     * @returns {Vector3d} Vector representing difference between this and v.
     */
    minus(v:Vector3d): Vector3d 
    {
        if (!(v instanceof Vector3d)) throw new TypeError('v is not Vector3d object');

        return new Vector3d(this.x - v.x, this.y - v.y, this.z - v.z);
    }


    /**
     * Multiplies ‘this’ vector by a scalar value.
     *
     * @param   {number}   x - Factor to multiply this vector by.
     * @returns {Vector3d} Vector scaled by x.
     */
    times(x:number): Vector3d
    {
        if (isNaN(x)) throw new TypeError(`invalid scalar value ‘${x}’`);
        return new Vector3d(this.x * x, this.y * x, this.z * x);
    }


    /**
     * Divides ‘this’ vector by a scalar value.
     *
     * @param   {number}   x - Factor to divide this vector by.
     * @returns {Vector3d} Vector divided by x.
     */
    dividedBy(x:number) {
        if (isNaN(x)) throw new TypeError(`invalid scalar value ‘${x}’`);
        return new Vector3d(this.x / x, this.y / x, this.z / x);
    }


    /**
     * Multiplies ‘this’ vector by the supplied vector using dot (scalar) product.
     *
     * @param   {Vector3d} v - Vector to be dotted with this vector.
     * @returns {number}   Dot product of ‘this’ and v.
     */
    dot(v:Vector3d): number
    {
        if (!(v instanceof Vector3d)) throw new TypeError('v is not Vector3d object');
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }


    /**
     * Multiplies ‘this’ vector by the supplied vector using cross (vector) product.
     *
     * @param   {Vector3d} v - Vector to be crossed with this vector.
     * @returns {Vector3d} Cross product of ‘this’ and v.
     */
    cross(v:Vector3d):Vector3d
    {
        if (!(v instanceof Vector3d)) throw new TypeError('v is not Vector3d object');

        const x = this.y * v.z - this.z * v.y;
        const y = this.z * v.x - this.x * v.z;
        const z = this.x * v.y - this.y * v.x;

        return new Vector3d(x, y, z);
    }


    /**
     * Negates a vector to point in the opposite direction.
     *
     * @returns {Vector3d} Negated vector.
     */
    negate(): Vector3d
    {
        return new Vector3d(-this.x, -this.y, -this.z);
    }


    /**
     * Normalizes a vector to its unit vector
     * – if the vector is already unit or is zero magnitude, this is a no-op.
     *
     * @returns {Vector3d} Normalised version of this vector.
     */
    unit(): Vector3d
    {
        const norm = this.length;
        if (norm == 1) return this;
        if (norm == 0) return this;

        const x = this.x / norm;
        const y = this.y / norm;
        const z = this.z / norm;

        return new Vector3d(x, y, z);
    }


    /**
     * Calculates the angle between ‘this’ vector and supplied vector atan2(|p₁×p₂|, p₁·p₂) (or if
     * (extra-planar) ‘n’ supplied then atan2(n·p₁×p₂, p₁·p₂).
     *
     * @param   {Vector3d} v - Vector whose angle is to be determined from ‘this’ vector.
     * @param   {Vector3d} [n] - Plane normal: if supplied, angle is signed +ve if this->v is
     *                     clockwise looking along n, -ve in opposite direction.
     * @returns {number}   Angle (in radians) between this vector and supplied vector (in range 0..π
     *                     if n not supplied, range -π..+π if n supplied).
     */
    angleTo(v:Vector3d, n:Vector3d|undefined=undefined):number
    {
        if (!(v instanceof Vector3d)) throw new TypeError('v is not Vector3d object');
        if (!(n instanceof Vector3d || n == undefined)) throw new TypeError('n is not Vector3d object');

        // q.v. stackoverflow.com/questions/14066933#answer-16544330, but n·p₁×p₂ is numerically
        // ill-conditioned, so just calculate sign to apply to |p₁×p₂|

        // if n·p₁×p₂ is -ve, negate |p₁×p₂|
        const sign = n==undefined || this.cross(v).dot(n)>=0 ? 1 : -1;

        const sinθ = this.cross(v).length * sign;
        const cosθ = this.dot(v);

        return Math.atan2(sinθ, cosθ);
    }


    /**
     * Rotates ‘this’ point around an axis by a specified angle.
     *
     * @param   {Vector3d} axis - The axis being rotated around.
     * @param   {number}   angle - The angle of rotation (in degrees).
     * @returns {Vector3d} The rotated point.
     */
    rotateAround(axis:Vector3d, angle:number):Vector3d 
    {
        if (!(axis instanceof Vector3d)) throw new TypeError('axis is not Vector3d object');

        const θ = angle.toRadians();

        // en.wikipedia.org/wiki/Rotation_matrix#Rotation_matrix_from_axis_and_angle
        // en.wikipedia.org/wiki/Quaternions_and_spatial_rotation#Quaternion-derived_rotation_matrix
        const p = this.unit();
        const a = axis.unit();

        const s = Math.sin(θ);
        const c = Math.cos(θ);
        const t = 1-c;
        const x = a.x, y = a.y, z = a.z;

        const r = [ // rotation matrix for rotation about supplied axis
            [ t*x*x + c,   t*x*y - s*z, t*x*z + s*y ],
            [ t*x*y + s*z, t*y*y + c,   t*y*z - s*x ],
            [ t*x*z - s*y, t*y*z + s*x, t*z*z + c   ],
        ];

        // multiply r × p
        const rp = [
            r[0][0]*p.x + r[0][1]*p.y + r[0][2]*p.z,
            r[1][0]*p.x + r[1][1]*p.y + r[1][2]*p.z,
            r[2][0]*p.x + r[2][1]*p.y + r[2][2]*p.z,
        ];
        const p2 = new Vector3d(rp[0], rp[1], rp[2]);

        return p2;
        // qv en.wikipedia.org/wiki/Rodrigues'_rotation_formula...
    }


    /**
     * String representation of vector.
     *
     * @param   {number} [dp=3] - Number of decimal places to be used.
     * @returns {string} Vector represented as [x,y,z].
     */
    toString(dp:number=3):string 
    {
        return `[${this.x.toFixed(dp)},${this.y.toFixed(dp)},${this.z.toFixed(dp)}]`;
    }

}



/* Degree-minutes-seconds (& cardinal directions) separator character */
let dmsSeparator = '\u202f'; // U+202F = 'narrow no-break space'

/**
 * Functions for parsing and representing degrees / minutes / seconds.
 * @source: geodesy/dms.js
 */
class Dms {

    static get separator():string     { return dmsSeparator; }
    static set separator(char:string) { dmsSeparator = char; }

    /**
     * Parses string representing degrees/minutes/seconds into numeric degrees.
     * @param {string|number} dms
     * @returns 
     */
    static parse(dms:any):number 
    {
        // check for signed decimal degrees without NSEW, if so return it directly
        if (!isNaN(parseFloat(dms)) && isFinite(dms)) return Number(dms);

        // strip off any sign or compass dir'n & split out separate d/m/s
        const dmsParts = String(dms).trim().replace(/^-/, '').replace(/[NSEW]$/i, '').split(/[^0-9.,]+/);
        if (dmsParts[dmsParts.length-1]=='') dmsParts.splice(dmsParts.length-1);  // from trailing symbol

        // and convert to decimal degrees...
        let deg = null;
        switch (dmsParts.length) {
            case 3:  // interpret 3-part result as d/m/s
                deg = Number(dmsParts[0])/1 + Number(dmsParts[1])/60 + Number(dmsParts[2])/3600;
                break;
            case 2:  // interpret 2-part result as d/m
                deg = Number(dmsParts[0])/1 + Number(dmsParts[1])/60;
                break;
            case 1:  // just d (possibly decimal) or non-separated dddmmss
                deg = dmsParts[0];
                // check for fixed-width unseparated format eg 0033709W
                //if (/[NS]/i.test(dmsParts)) deg = '0' + deg;  // - normalise N/S to 3-digit degrees
                //if (/[0-9]{7}/.test(deg)) deg = deg.slice(0,3)/1 + deg.slice(3,5)/60 + deg.slice(5)/3600;
                break;
            default:
                return NaN;
        }
        if (/^-|[WS]$/i.test(dms.trim())) deg = -deg; // take '-', west and south as -ve

        return Number(deg);
    }

    /**
     * Converts decimal degrees to deg/min/sec format
     * @param   {number} deg - Degrees to be formatted as specified.
     * @param   {string} [format=d] - Return value as 'd', 'dm', 'dms' for deg, deg+min, deg+min+sec.
     * @param   {number} [dp=4|2|0] - Number of decimal places to use – default 4 for d, 2 for dm, 0 for dms.
     * @returns {string} Degrees formatted as deg/min/secs according to specified format.
     */
    static toDms(deg:any, format:string='d', dp:number|undefined=undefined):string|null 
    {
        if (isNaN(deg)) return null;  // give up here if we can't make a number from deg
        if (typeof deg == 'string' && String(deg).trim() == '') return null;
        if (typeof deg == 'boolean') return null;
        if (deg == Infinity) return null;
        if (deg == null) return null;

        // default values
        if (dp === undefined) {
            switch (format) {
                case 'd':   case 'deg':         dp = 4; break;
                case 'dm':  case 'deg+min':     dp = 2; break;
                case 'dms': case 'deg+min+sec': dp = 0; break;
                default:          format = 'd'; dp = 4; break; // be forgiving on invalid format
            }
        }

        deg = Math.abs(deg);  // (unsigned result ready for appending compass dir'n)

        let dms = null, d = null, m = null, s = null;
        switch (format) {
            default: // invalid format spec!
            case 'd': case 'deg':
                d = deg.toFixed(dp);                       // round/right-pad degrees
                if (d<100) d = '0' + d;                    // left-pad with leading zeros (note may include decimals)
                if (d<10) d = '0' + d;
                dms = d + '°';
                break;
            case 'dm': case 'deg+min':
                d = Math.floor(deg);                       // get component deg
                m = ((deg*60) % 60).toFixed(dp);           // get component min & round/right-pad
                if (Number(m) == 60) { m = (0).toFixed(dp); d++; } // check for rounding up
                d = ('000'+d).slice(-3);                   // left-pad with leading zeros
                if (Number(m)<10) m = '0' + m;                     // left-pad with leading zeros (note may include decimals)
                dms = d + '°'+Dms.separator + m + '′';
                break;
            case 'dms': case 'deg+min+sec':
                d = Math.floor(deg);                       // get component deg
                m = Math.floor((deg*3600)/60) % 60;        // get component min
                s = (deg*3600 % 60).toFixed(dp);           // get component sec & round/right-pad
                if (Number(s) == 60) { s = (0).toFixed(dp); m++; } // check for rounding up
                if (m == 60) { m = 0; d++; }               // check for rounding up
                d = ('000'+d).slice(-3);                   // left-pad with leading zeros
                m = ('00'+m).slice(-2);                    // left-pad with leading zeros
                if (Number(s)<10) s = '0' + s;                     // left-pad with leading zeros (note may include decimals)
                dms = d + '°'+Dms.separator + m + '′'+Dms.separator + s + '″';
                break;
        }

        return dms;
    }

    /**
     * Converts numeric degrees to deg/min/sec latitude (2-digit degrees, suffixed with N/S).
     * @param   {number} deg - Degrees to be formatted as specified.
     * @param   {string} [format=d] - Return value as 'd', 'dm', 'dms' for deg, deg+min, deg+min+sec.
     * @param   {number} [dp=4|2|0] - Number of decimal places to use – default 4 for d, 2 for dm, 0 for dms.
     * @returns {string} Degrees formatted as deg/min/secs according to specified format.
     */
    static toLat(deg:number, format:string, dp:number): string
    {
        const lat = Dms.toDms(Dms.wrap90(deg), format, dp);
        return lat===null ? '–' : lat.slice(1) + Dms.separator + (Number(deg)<0 ? 'S' : 'N');  // knock off initial '0' for lat!
    }

    /**
     * Convert numeric degrees to deg/min/sec longitude (3-digit degrees, suffixed with E/W).
     * @param   {number} deg - Degrees to be formatted as specified.
     * @param   {string} [format=d] - Return value as 'd', 'dm', 'dms' for deg, deg+min, deg+min+sec.
     * @param   {number} [dp=4|2|0] - Number of decimal places to use – default 4 for d, 2 for dm, 0 for dms.
     * @returns {string} Degrees formatted as deg/min/secs according to specified format.
     */
    static toLon(deg:number, format:string, dp:number): string
    {
        const lon = Dms.toDms(Dms.wrap180(deg), format, dp);
        return lon===null ? '–' : lon + Dms.separator + (Number(deg)<0 ? 'W' : 'E');
    }


    /**
     * Converts numeric degrees to deg/min/sec as a bearing (0°..360°).
     *
     * @param   {number} deg - Degrees to be formatted as specified.
     * @param   {string} [format=d] - Return value as 'd', 'dm', 'dms' for deg, deg+min, deg+min+sec.
     * @param   {number} [dp=4|2|0] - Number of decimal places to use – default 4 for d, 2 for dm, 0 for dms.
     * @returns {string} Degrees formatted as deg/min/secs according to specified format.
     *
     * @example
     *   const lon = Dms.toBrng(-3.62, 'dms'); // 356°22′48″
     */
    static toBrng(deg:number, format:string, dp:number): string
    {
        const brng =  Dms.toDms(Dms.wrap360(deg), format, dp);
        return brng===null ? '–' : brng.replace('360', '0');  // just in case rounding took us up to 360°!
    }


    /**
     * Converts DMS string from locale thousands/decimal separators to JavaScript comma/dot separators
     * for subsequent parsing.
     *
     * Both thousands and decimal separators must be followed by a numeric character, to facilitate
     * parsing of single lat/long string (in which whitespace must be left after the comma separator).
     *
     * @param   {string} str - Degrees/minutes/seconds formatted with locale separators.
     * @returns {string} Degrees/minutes/seconds formatted with standard Javascript separators.
     *
     * @example
     *   const lat = Dms.fromLocale('51°28′40,12″N');                          // '51°28′40.12″N' in France
     *   const p = new LatLon(Dms.fromLocale('51°28′40,37″N, 000°00′05,29″W'); // '51.4779°N, 000.0015°W' in France
     */
    static fromLocale(str:string): string 
    {
        const locale = (123456.789).toLocaleString();
        const separator = { thousands: locale.slice(3, 4), decimal: locale.slice(7, 8) };
        return str.replace(separator.thousands, '⁜').replace(separator.decimal, '.').replace('⁜', ',');
    }


    /**
     * Converts DMS string from JavaScript comma/dot thousands/decimal separators to locale separators.
     *
     * Can also be used to format standard numbers such as distances.
     *
     * @param   {string} str - Degrees/minutes/seconds formatted with standard Javascript separators.
     * @returns {string} Degrees/minutes/seconds formatted with locale separators.
     *
     * @example
     *   const Dms.toLocale('123,456.789');                   // '123.456,789' in France
     *   const Dms.toLocale('51°28′40.12″N, 000°00′05.31″W'); // '51°28′40,12″N, 000°00′05,31″W' in France
     */
    static toLocale(str:string): string
    {
        const locale = (123456.789).toLocaleString();
        const separator = { thousands: locale.slice(3, 4), decimal: locale.slice(7, 8) };
        return str.replace(/,([0-9])/, '⁜$1').replace('.', separator.decimal).replace('⁜', separator.thousands);
    }


    /**
     * Returns compass point (to given precision) for supplied bearing.
     *
     * @param   {number} bearing - Bearing in degrees from north.
     * @param   {number} [precision=3] - Precision (1:cardinal / 2:intercardinal / 3:secondary-intercardinal).
     * @returns {string} Compass point for supplied bearing.
     *
     * @example
     *   const point = Dms.compassPoint(24);    // point = 'NNE'
     *   const point = Dms.compassPoint(24, 1); // point = 'N'
     */
    static compassPoint(bearing:number, precision:number=3): string
    {
        if (![ 1, 2, 3 ].includes(Number(precision))) throw new RangeError(`invalid precision ‘${precision}’`);
        // note precision could be extended to 4 for quarter-winds (eg NbNW), but I think they are little used

        bearing = Dms.wrap360(bearing); // normalise to range 0..360°

        const cardinals = [
            'N', 'NNE', 'NE', 'ENE',
            'E', 'ESE', 'SE', 'SSE',
            'S', 'SSW', 'SW', 'WSW',
            'W', 'WNW', 'NW', 'NNW' ];
        const n = 4 * 2**(precision-1); // no of compass points at req’d precision (1=>4, 2=>8, 3=>16)
        const cardinal = cardinals[Math.round(bearing*n/360)%n * 16/n];

        return cardinal;
    }


    /**
     * Constrain degrees to range 0..360 (e.g. for bearings); -1 => 359, 361 => 1.
     *
     * @private
     * @param {number} degrees
     * @returns degrees within range 0..360.
     */
    static wrap360(degrees:number): number
    {
        if (0<=degrees && degrees<360) return degrees; // avoid rounding due to arithmetic ops if within range
        return (degrees%360+360) % 360; // sawtooth wave p:360, a:360
    }

    /**
     * Constrain degrees to range -180..+180 (e.g. for longitude); -181 => 179, 181 => -179.
     *
     * @private
     * @param {number} degrees
     * @returns degrees within range -180..+180.
     */
    static wrap180(degrees:number): number 
    {
        if (-180<degrees && degrees<=180) return degrees; // avoid rounding due to arithmetic ops if within range
        return (degrees+540)%360-180; // sawtooth wave p:180, a:±180
    }

    /**
     * Constrain degrees to range -90..+90 (e.g. for latitude); -91 => -89, 91 => 89.
     *
     * @private
     * @param {number} degrees
     * @returns degrees within range -90..+90.
     */
    static wrap90(degrees:number): number 
    {
        if (-90<=degrees && degrees<=90) return degrees; // avoid rounding due to arithmetic ops if within range
        return Math.abs((degrees%360 + 270)%360 - 180) - 90; // triangle wave p:360 a:±90 TODO: fix e.g. -315°
    }

}

declare global {
    interface Number {
        toRadians: () => number;
        toDegrees:() => number;
    }
}

// Extend Number object with methods to convert between degrees & radians
Number.prototype.toRadians = function():number { 
    return this * Math.PI / 180; 
};
Number.prototype.toDegrees = function(): number { 
    return this * 180 / Math.PI; 
};



const ellipsoids = {
    WGS84: { a: 6378137, b: 6356752.314245, f: 1/298.257223563 },
};

const datums = {
    WGS84: { ellipsoid: ellipsoids.WGS84 },
};

Object.freeze(ellipsoids.WGS84);
Object.freeze(datums.WGS84);

class LatLonEllipsoidal {

    _lat:number;
    _lon:number;
    _height:number;
    _datum:any;

    constructor(lat:number, lon:number, height=0) {
        if (isNaN(lat)) throw new TypeError(`invalid lat ‘${lat}’`);
        if (isNaN(lon)) throw new TypeError(`invalid lon ‘${lon}’`);
        if (isNaN(height)) throw new TypeError(`invalid height ‘${height}’`);

        this._lat = Dms.wrap90(Number(lat));
        this._lon = Dms.wrap180(Number(lon));
        this._height = Number(height);
    }


    /**
     * Latitude in degrees north from equator (including aliases lat, latitude): can be set as
     * numeric or hexagesimal (deg-min-sec); returned as numeric.
     */
    get lat(): number       { return this._lat; }
    get latitude(): number  { return this._lat; }
    set lat(lat:number) 
    {
        this._lat = isNaN(lat) ? Dms.wrap90(Dms.parse(lat)) : Dms.wrap90(Number(lat));
        if (isNaN(this._lat)) throw new TypeError(`invalid lat ‘${lat}’`);
    }
    set latitude(lat:number) 
    {
        this._lat = isNaN(lat) ? Dms.wrap90(Dms.parse(lat)) : Dms.wrap90(Number(lat));
        if (isNaN(this._lat)) throw new TypeError(`invalid latitude ‘${lat}’`);
    }

    /**
     * Longitude in degrees east from international reference meridian (including aliases lon, lng,
     * longitude): can be set as numeric or hexagesimal (deg-min-sec); returned as numeric.
     */
    get lon():number       { return this._lon; }
    get lng():number       { return this._lon; }
    get longitude():number { return this._lon; }
    set lon(lon:number) 
    {
        this._lon = isNaN(lon) ? Dms.wrap180(Dms.parse(lon)) : Dms.wrap180(Number(lon));
        if (isNaN(this._lon)) throw new TypeError(`invalid lon ‘${lon}’`);
    }
    set lng(lon:number) 
    {
        this._lon = isNaN(lon) ? Dms.wrap180(Dms.parse(lon)) : Dms.wrap180(Number(lon));
        if (isNaN(this._lon)) throw new TypeError(`invalid lng ‘${lon}’`);
    }
    set longitude(lon:number) {
        this._lon = isNaN(lon) ? Dms.wrap180(Dms.parse(lon)) : Dms.wrap180(Number(lon));
        if (isNaN(this._lon)) throw new TypeError(`invalid longitude ‘${lon}’`);
    }

    /**
     * Height in metres above ellipsoid.
     */
    get height():number       { return this._height; }
    set height(height:number) { this._height = Number(height); if (isNaN(this._height)) throw new TypeError(`invalid height ‘${height}’`); }


    /**
     * Datum.
     *
     * Note this is replicated within LatLonEllipsoidal in order that a LatLonEllipsoidal object can
     * be monkey-patched to look like a LatLonEllipsoidal_Datum, for Vincenty calculations on
     * different ellipsoids.
     *
     * @private
     */
    get datum()      { return this._datum; }
    set datum(datum) { this._datum = datum; }


    /**
     * Ellipsoids with their parameters; this module only defines WGS84 parameters a = 6378137, b =
     * 6356752.314245, f = 1/298.257223563.
     *
     * @example
     *   const a = LatLon.ellipsoids.WGS84.a; // 6378137
     */
    static get ellipsoids() {
        return ellipsoids;
    }

    /**
     * Datums; this module only defines WGS84 datum, hence no datum transformations.
     *
     * @example
     *   const a = LatLon.datums.WGS84.ellipsoid.a; // 6377563.396
     */
    static get datums() {
        return datums;
    }


    /**
     * Parses a latitude/longitude point from a variety of formats.
     *
     * Latitude & longitude (in degrees) can be supplied as two separate parameters, as a single
     * comma-separated lat/lon string, or as a single object with { lat, lon } or GeoJSON properties.
     *
     * The latitude/longitude values may be numeric or strings; they may be signed decimal or
     * deg-min-sec (hexagesimal) suffixed by compass direction (NSEW); a variety of separators are
     * accepted. Examples -3.62, '3 37 12W', '3°37′12″W'.
     *
     * Thousands/decimal separators must be comma/dot; use Dms.fromLocale to convert locale-specific
     * thousands/decimal separators.
     *
     * @param   {number|string|Object} lat|latlon - Latitude (in degrees), or comma-separated lat/lon, or lat/lon object.
     * @param   {number}               [lon]      - Longitude (in degrees).
     * @param   {number}               [height=0] - Height above ellipsoid in metres.
     * @returns {LatLon} Latitude/longitude point on WGS84 ellipsoidal model earth.
     * @throws  {TypeError} Invalid coordinate.
     *
     * @example
     *   const p1 = LatLon.parse(51.47788, -0.00147);              // numeric pair
     *   const p2 = LatLon.parse('51°28′40″N, 000°00′05″W', 17);   // dms string + height
     *   const p3 = LatLon.parse({ lat: 52.205, lon: 0.119 }, 17); // { lat, lon } object numeric + height
     */
    static parse(...args:any): LatLonEllipsoidal
    {
        if (args.length == 0) throw new TypeError('invalid (empty) point');

        let lat=undefined, lon=undefined, height=undefined;

        // single { lat, lon } object
        if (typeof args[0]=='object' && (args.length==1 || !isNaN(parseFloat(args[1])))) {
            const ll = args[0];
            if (ll.type == 'Point' && Array.isArray(ll.coordinates)) { // GeoJSON
                [ lon, lat, height ] = ll.coordinates;
                height = height || 0;
            } else { // regular { lat, lon } object
                if (ll.latitude  != undefined) lat = ll.latitude;
                if (ll.lat       != undefined) lat = ll.lat;
                if (ll.longitude != undefined) lon = ll.longitude;
                if (ll.lng       != undefined) lon = ll.lng;
                if (ll.lon       != undefined) lon = ll.lon;
                if (ll.height    != undefined) height = ll.height;
                lat = Dms.wrap90(Dms.parse(lat));
                lon = Dms.wrap180(Dms.parse(lon));
            }
            if (args[1] != undefined) height = args[1];
            if (isNaN(lat) || isNaN(lon)) throw new TypeError(`invalid point ‘${JSON.stringify(args[0])}’`);
        }

        // single comma-separated lat/lon
        if (typeof args[0] == 'string' && args[0].split(',').length == 2) {
            [ lat, lon ] = args[0].split(',');
            lat = Dms.wrap90(Dms.parse(lat));
            lon = Dms.wrap180(Dms.parse(lon));
            height = args[1] || 0;
            if (isNaN(lat) || isNaN(lon)) throw new TypeError(`invalid point ‘${args[0]}’`);
        }

        // regular (lat, lon) arguments
        if (lat==undefined && lon==undefined) {
            [ lat, lon ] = args;
            lat = Dms.wrap90(Dms.parse(lat));
            lon = Dms.wrap180(Dms.parse(lon));
            height = args[2] || 0;
            if (isNaN(lat) || isNaN(lon)) throw new TypeError(`invalid point ‘${args.toString()}’`);
        }

        return new this(lat, lon, height); // 'new this' as may return subclassed types
    }


    /**
     * Converts ‘this’ point from (geodetic) latitude/longitude coordinates to (geocentric)
     * cartesian (x/y/z) coordinates.
     *
     * @returns {Cartesian} Cartesian point equivalent to lat/lon point, with x, y, z in metres from
     *   earth centre.
     */
    toCartesian(): Cartesian
    {
        // x = (ν+h)⋅cosφ⋅cosλ, y = (ν+h)⋅cosφ⋅sinλ, z = (ν⋅(1-e²)+h)⋅sinφ
        // where ν = a/√(1−e²⋅sinφ⋅sinφ), e² = (a²-b²)/a² or (better conditioned) 2⋅f-f²
        const ellipsoid = this.datum
            ? this.datum.ellipsoid
            : ellipsoids.WGS84;

        const φ = this.lat.toRadians();
        const λ = this.lon.toRadians();
        const h = this.height;
        const { a, f } = ellipsoid;

        const sinφ = Math.sin(φ), cosφ = Math.cos(φ);
        const sinλ = Math.sin(λ), cosλ = Math.cos(λ);

        const eSq = 2*f - f*f;                      // 1st eccentricity squared ≡ (a²-b²)/a²
        const ν = a / Math.sqrt(1 - eSq*sinφ*sinφ); // radius of curvature in prime vertical

        const x = (ν+h) * cosφ * cosλ;
        const y = (ν+h) * cosφ * sinλ;
        const z = (ν*(1-eSq)+h) * sinφ;

        return new Cartesian(x, y, z);
    }


    /**
     * Checks if another point is equal to ‘this’ point.
     *
     * @param   {LatLon} point - Point to be compared against this point.
     * @returns {bool} True if points have identical latitude, longitude, height, and datum/referenceFrame.
     * @throws  {TypeError} Invalid point.
     *
     * @example
     *   const p1 = new LatLon(52.205, 0.119);
     *   const p2 = new LatLon(52.205, 0.119);
     *   const equal = p1.equals(p2); // true
     */
    equals(point: LatLonEllipsoidal):boolean 
    {
        if (Math.abs(this.lat - point.lat) > Number.EPSILON) return false;
        if (Math.abs(this.lon - point.lon) > Number.EPSILON) return false;
        if (Math.abs(this.height - point.height) > Number.EPSILON) return false;
        if (this.datum != point.datum) return false;
        return true;
    }


    /**
     * Returns a string representation of ‘this’ point, formatted as degrees, degrees+minutes, or
     * degrees+minutes+seconds.
     *
     * @param   {string} [format=d] - Format point as 'd', 'dm', 'dms', or 'n' for signed numeric.
     * @param   {number} [dp=4|2|0] - Number of decimal places to use: default 4 for d, 2 for dm, 0 for dms.
     * @param   {number} [dpHeight=null] - Number of decimal places to use for height; default is no height display.
     * @returns {string} Comma-separated formatted latitude/longitude.
     * @throws  {RangeError} Invalid format.
     *
     * @example
     *   const greenwich = new LatLon(51.47788, -0.00147, 46);
     *   const d = greenwich.toString();                        // 51.4779°N, 000.0015°W
     *   const dms = greenwich.toString('dms', 2);              // 51°28′40″N, 000°00′05″W
     *   const [lat, lon] = greenwich.toString('n').split(','); // 51.4779, -0.0015
     *   const dmsh = greenwich.toString('dms', 0, 0);          // 51°28′40″N, 000°00′06″W +46m
     */
    toString(format:string='d', dp:number|undefined=undefined, dpHeight:number=0) {
        // note: explicitly set dp to undefined for passing through to toLat/toLon
        if (![ 'd', 'dm', 'dms', 'n' ].includes(format)) throw new RangeError(`invalid format ‘${format}’`);

        const height = (this.height>=0 ? ' +' : ' ') + this.height.toFixed(dpHeight) + 'm';
        if (format == 'n') { // signed numeric degrees
            if (dp == undefined) dp = 4;
            const lat = this.lat.toFixed(dp);
            const lon = this.lon.toFixed(dp);
            return `${lat}, ${lon}${dpHeight==null ? '' : height}`;
        }

        const lat = Dms.toLat(this.lat, format, dp ? dp : 0);
        const lon = Dms.toLon(this.lon, format, dp ? dp : 0);

        return `${lat}, ${lon}${dpHeight==null ? '' : height}`;
    }

}


/* Cartesian  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


/**
 * ECEF (earth-centered earth-fixed) geocentric cartesian coordinates.
 *
 * @extends Vector3d
 */
class Cartesian extends Vector3d {

    /**
     * Creates cartesian coordinate representing ECEF (earth-centric earth-fixed) point.
     *
     * @param {number} x - X coordinate in metres (=> 0°N,0°E).
     * @param {number} y - Y coordinate in metres (=> 0°N,90°E).
     * @param {number} z - Z coordinate in metres (=> 90°N).
     *
     * @example
     *   import { Cartesian } from '/js/geodesy/latlon-ellipsoidal.js';
     *   const coord = new Cartesian(3980581.210, -111.159, 4966824.522);
     */
    constructor(x:number, y:number, z:number) {
        super(x, y, z); // arguably redundant constructor, but specifies units & axes
    }


    /**
     * Converts ‘this’ (geocentric) cartesian (x/y/z) coordinate to (geodetic) latitude/longitude
     * point on specified ellipsoid.
     *
     * Uses Bowring’s (1985) formulation for μm precision in concise form; ‘The accuracy of geodetic
     * latitude and height equations’, B R Bowring, Survey Review vol 28, 218, Oct 1985.
     *
     * @param   {LatLon.ellipsoids} [ellipsoid=WGS84] - Ellipsoid to use when converting point.
     * @returns {LatLon} Latitude/longitude point defined by cartesian coordinates, on given ellipsoid.
     * @throws  {TypeError} Invalid ellipsoid.
     *
     * @example
     *   const c = new Cartesian(4027893.924, 307041.993, 4919474.294);
     *   const p = c.toLatLon(); // 50.7978°N, 004.3592°E
     */
    toLatLon(ellipsoid=ellipsoids.WGS84): LatLonEllipsoidal
    {
        // note ellipsoid is available as a parameter for when toLatLon gets subclassed to
        // Ellipsoidal_Datum / Ellipsoidal_Referenceframe.
        if (!ellipsoid || !ellipsoid.a) throw new TypeError(`invalid ellipsoid ‘${ellipsoid}’`);

        const { x, y, z } = this;
        const { a, b, f } = ellipsoid;

        const e2 = 2*f - f*f;           // 1st eccentricity squared ≡ (a²−b²)/a²
        const ε2 = e2 / (1-e2);         // 2nd eccentricity squared ≡ (a²−b²)/b²
        const p = Math.sqrt(x*x + y*y); // distance from minor axis
        const R = Math.sqrt(p*p + z*z); // polar radius

        // parametric latitude (Bowring eqn.17, replacing tanβ = z·a / p·b)
        const tanβ = (b*z)/(a*p) * (1+ε2*b/R);
        const sinβ = tanβ / Math.sqrt(1+tanβ*tanβ);
        const cosβ = sinβ / tanβ;

        // geodetic latitude (Bowring eqn.18: tanφ = z+ε²⋅b⋅sin³β / p−e²⋅cos³β)
        const φ = isNaN(cosβ) ? 0 : Math.atan2(z + ε2*b*sinβ*sinβ*sinβ, p - e2*a*cosβ*cosβ*cosβ);

        // longitude
        const λ = Math.atan2(y, x);

        // height above ellipsoid (Bowring eqn.7)
        const sinφ = Math.sin(φ), cosφ = Math.cos(φ);
        const ν = a / Math.sqrt(1-e2*sinφ*sinφ); // length of the normal terminated by the minor axis
        const h = p*cosφ + z*sinφ - (a*a/ν);

        const point = new LatLonEllipsoidal(φ.toDegrees(), λ.toDegrees(), h);

        return point;
    }


    /**
     * Returns a string representation of ‘this’ cartesian point.
     *
     * @param   {number} [dp=0] - Number of decimal places to use.
     * @returns {string} Comma-separated latitude/longitude.
     */
    toString(dp:number=0):string 
    {
        const x = this.x.toFixed(dp), y = this.y.toFixed(dp), z = this.z.toFixed(dp);
        return `[${x},${y},${z}]`;
    }

}

interface IdirectResult {
    point: LatLonEllipsoidal_Vincenty,
    finalBearing: number,
    iterations: number
}

interface IInverseResult {
    distance: number,
    initialBearing: number,
    finalBearing: number,
    iterations: number
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/* Vincenty Direct and Inverse Solution of Geodesics on the Ellipsoid (c) Chris Veness 2002-2019  */
/*                                                                                   MIT Licence  */
/* www.movable-type.co.uk/scripts/latlong-ellipsoidal-vincenty.html                               */
/* www.movable-type.co.uk/scripts/geodesy-library.html#latlon-ellipsoidal-vincenty                */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

const π = Math.PI;
const ε = Number.EPSILON;

/* LatLonEllipsoidal_Vincenty - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * Extends LatLonEllipsoidal with methods for calculating distances and bearings between points, and
 * destination points given distances and initial bearings, accurate to within 0.5mm distance,
 * 0.000015″ bearing.
 *
 * By default, these calculations are made on a WGS-84 ellipsoid. For geodesic calculations on other
 * ellipsoids, monkey-patch the LatLon point by setting the datum of ‘this’ point to make it appear
 * as a LatLonEllipsoidal_Datum or LatLonEllipsoidal_ReferenceFrame point: e.g.
 *
 *     import LatLon, { Dms } from '../latlon-ellipsoidal-vincenty.js';
 *     import { datums }      from '../latlon-ellipsoidal-datum.js';
 *     const le = new LatLon(50.065716, -5.713824);  // in OSGB-36
 *     const jog = new LatLon(58.644399, -3.068521); // in OSGB-36
 *     le.datum = datums.OSGB36;     // source point determines ellipsoid to use
 *     const d = le.distanceTo(jog); // = 969982.014; 27.848m more than on WGS-84 ellipsoid
 *
 * @extends LatLonEllipsoidal
 */
class LatLonEllipsoidal_Vincenty extends LatLonEllipsoidal {

    /**
     * Returns the distance between ‘this’ point and destination point along a geodesic on the
     * surface of the ellipsoid, using Vincenty inverse solution.
     *
     * @param   {LatLon} point - Latitude/longitude of destination point.
     * @returns {number} Distance in metres between points or NaN if failed to converge.
     *
     * @example
     *   const p1 = new LatLon(50.06632, -5.71475);
     *   const p2 = new LatLon(58.64402, -3.07009);
     *   const d = p1.distanceTo(p2); // 969,954.166 m
     */
    distanceTo(point:LatLonEllipsoidal): number
    {
        try {
            const dist = this.inverse(point).distance;
            return Number(dist.toFixed(3)); // round to 1mm precision
        } catch (e) {
            if (e instanceof EvalError) return NaN; // λ > π or failed to converge
            throw e;
        }
    }


    /**
     * Returns the initial bearing (forward azimuth) to travel along a geodesic from ‘this’ point to
     * the given point, using Vincenty inverse solution.
     *
     * @param   {LatLon} point - Latitude/longitude of destination point.
     * @returns {number} Initial bearing in degrees from north (0°..360°) or NaN if failed to converge.
     *
     * @example
     *   const p1 = new LatLon(50.06632, -5.71475);
     *   const p2 = new LatLon(58.64402, -3.07009);
     *   const b1 = p1.initialBearingTo(p2); // 9.1419°
     */
    initialBearingTo(point:LatLonEllipsoidal): number 
    {
        try {
            const brng = this.inverse(point).initialBearing;
            return Number(brng.toFixed(7)); // round to 0.001″ precision
        } catch (e) {
            if (e instanceof EvalError) return NaN; // λ > π or failed to converge
            throw e;
        }
    }


    /**
     * Returns the final bearing (reverse azimuth) having travelled along a geodesic from ‘this’
     * point to the given point, using Vincenty inverse solution.
     *
     * @param   {LatLon} point - Latitude/longitude of destination point.
     * @returns {number} Final bearing in degrees from north (0°..360°) or NaN if failed to converge.
     *
     * @example
     *   const p1 = new LatLon(50.06632, -5.71475);
     *   const p2 = new LatLon(58.64402, -3.07009);
     *   const b2 = p1.finalBearingTo(p2); // 11.2972°
     */
    finalBearingTo(point:LatLonEllipsoidal): number
    {
        try {
            const brng = this.inverse(point).finalBearing;
            return Number(brng.toFixed(7)); // round to 0.001″ precision
        } catch (e) {
            if (e instanceof EvalError) return NaN; // λ > π or failed to converge
            throw e;
        }
    }


    /**
     * Returns the destination point having travelled the given distance along a geodesic given by
     * initial bearing from ‘this’ point, using Vincenty direct solution.
     *
     * @param   {number} distance - Distance travelled along the geodesic in metres.
     * @param   {number} initialBearing - Initial bearing in degrees from north.
     * @returns {LatLon} Destination point.
     *
     * @example
     *   const p1 = new LatLon(-37.95103, 144.42487);
     *   const p2 = p1.destinationPoint(54972.271, 306.86816); // 37.6528°S, 143.9265°E
     */
    destinationPoint(distance:number, initialBearing:number): LatLonEllipsoidal
    {
        return this.direct(Number(distance), Number(initialBearing)).point;
    }


    /**
     * Returns the final bearing (reverse azimuth) having travelled along a geodesic given by initial
     * bearing for a given distance from ‘this’ point, using Vincenty direct solution.
     * TODO: arg order? (this is consistent with destinationPoint, but perhaps less intuitive)
     *
     * @param   {number} distance - Distance travelled along the geodesic in metres.
     * @param   {LatLon} initialBearing - Initial bearing in degrees from north.
     * @returns {number} Final bearing in degrees from north (0°..360°).
     *
     * @example
     *   const p1 = new LatLon(-37.95103, 144.42487);
     *   const b2 = p1.finalBearingOn(306.86816, 54972.271); // 307.1736°
     */
    finalBearingOn(distance:number, initialBearing:LatLonEllipsoidal): number
    {
        const brng = this.direct(Number(distance), Number(initialBearing)).finalBearing;
        return Number(brng.toFixed(7)); // round to 0.001″ precision
    }


    /**
     * Vincenty direct calculation.
     *
     * Ellipsoid parameters are taken from datum of 'this' point. Height is ignored.
     *
     * @private
     * @param   {number} distance - Distance along bearing in metres.
     * @param   {number} initialBearing - Initial bearing in degrees from north.
     * @returns (Object} Object including point (destination point), finalBearing.
     * @throws  {RangeError} Point must be on surface of ellipsoid.
     * @throws  {EvalError}  Formula failed to converge.
     */
    direct(distance:number, initialBearing:number): IdirectResult
    {
        if (this.height != 0) throw new RangeError('point must be on the surface of the ellipsoid');

        const φ1 = this.lat.toRadians(), λ1 = this.lon.toRadians();
        const α1 = initialBearing.toRadians();
        const s = distance;

        // allow alternative ellipsoid to be specified
        const ellipsoid = this.datum ? this.datum.ellipsoid : LatLonEllipsoidal.ellipsoids.WGS84;
        const { a, b, f } = ellipsoid;

        const sinα1 = Math.sin(α1);
        const cosα1 = Math.cos(α1);

        const tanU1 = (1-f) * Math.tan(φ1), cosU1 = 1 / Math.sqrt((1 + tanU1*tanU1)), sinU1 = tanU1 * cosU1;
        const σ1 = Math.atan2(tanU1, cosα1); // σ1 = angular distance on the sphere from the equator to P1
        const sinα = cosU1 * sinα1;          // α = azimuth of the geodesic at the equator
        const cosSqα = 1 - sinα*sinα;
        const uSq = cosSqα * (a*a - b*b) / (b*b);
        const A = 1 + uSq/16384*(4096+uSq*(-768+uSq*(320-175*uSq)));
        const B = uSq/1024 * (256+uSq*(-128+uSq*(74-47*uSq)));

        let σ = s / (b*A), sinσ = null, cosσ = null, Δσ = null; // σ = angular distance P₁ P₂ on the sphere
        let cos2σₘ = null; // σₘ = angular distance on the sphere from the equator to the midpoint of the line

        let σʹ = null, iterations = 0;
        do {
            cos2σₘ = Math.cos(2*σ1 + σ);
            sinσ = Math.sin(σ);
            cosσ = Math.cos(σ);
            Δσ = B*sinσ*(cos2σₘ+B/4*(cosσ*(-1+2*cos2σₘ*cos2σₘ)-
                B/6*cos2σₘ*(-3+4*sinσ*sinσ)*(-3+4*cos2σₘ*cos2σₘ)));
            σʹ = σ;
            σ = s / (b*A) + Δσ;
        } while (Math.abs(σ-σʹ) > 1e-12 && ++iterations<100);
        if (iterations >= 100) throw new EvalError('Vincenty formula failed to converge'); // not possible?

        const x = sinU1*sinσ - cosU1*cosσ*cosα1;
        const φ2 = Math.atan2(sinU1*cosσ + cosU1*sinσ*cosα1, (1-f)*Math.sqrt(sinα*sinα + x*x));
        const λ = Math.atan2(sinσ*sinα1, cosU1*cosσ - sinU1*sinσ*cosα1);
        const C = f/16*cosSqα*(4+f*(4-3*cosSqα));
        const L = λ - (1-C) * f * sinα * (σ + C*sinσ*(cos2σₘ+C*cosσ*(-1+2*cos2σₘ*cos2σₘ)));
        const λ2 = λ1 + L;

        const α2 = Math.atan2(sinα, -x);

        const destinationPoint = new LatLonEllipsoidal_Vincenty(φ2.toDegrees(), λ2.toDegrees(), 0);

        return {
            point:        destinationPoint,
            finalBearing: Dms.wrap360(α2.toDegrees()),
            iterations:   iterations,
        };
    }


    /**
     * Vincenty inverse calculation.
     *
     * Ellipsoid parameters are taken from datum of 'this' point. Height is ignored.
     *
     * @private
     * @param   {LatLon} point - Latitude/longitude of destination point.
     * @returns {Object} Object including distance, initialBearing, finalBearing.
     * @throws  {TypeError}  Invalid point.
     * @throws  {RangeError} Points must be on surface of ellipsoid.
     * @throws  {EvalError}  Formula failed to converge.
     */
    inverse(point: LatLonEllipsoidal): IInverseResult
    {
        if (!(point instanceof LatLonEllipsoidal)) throw new TypeError(`invalid point ‘${point}’`);
        if (this.height!=0 || point.height!=0) throw new RangeError('point must be on the surface of the ellipsoid');

        const p1 = this, p2 = point;
        const φ1 = p1.lat.toRadians(), λ1 = p1.lon.toRadians();
        const φ2 = p2.lat.toRadians(), λ2 = p2.lon.toRadians();

        // allow alternative ellipsoid to be specified
        const ellipsoid = this.datum ? this.datum.ellipsoid : LatLonEllipsoidal.ellipsoids.WGS84;
        const { a, b, f } = ellipsoid;

        const L = λ2 - λ1; // L = difference in longitude, U = reduced latitude, defined by tan U = (1-f)·tanφ.
        const tanU1 = (1-f) * Math.tan(φ1), cosU1 = 1 / Math.sqrt((1 + tanU1*tanU1)), sinU1 = tanU1 * cosU1;
        const tanU2 = (1-f) * Math.tan(φ2), cosU2 = 1 / Math.sqrt((1 + tanU2*tanU2)), sinU2 = tanU2 * cosU2;

        const antipodal = Math.abs(L) > π/2 || Math.abs(φ2-φ1) > π/2;

        let λ = L, sinλ = null, cosλ = null; // λ = difference in longitude on an auxiliary sphere
        let σ = antipodal ? π : 0, sinσ = 0, cosσ = antipodal ? -1 : 1, sinSqσ = null; // σ = angular distance P₁ P₂ on the sphere
        let cos2σₘ = 1;                      // σₘ = angular distance on the sphere from the equator to the midpoint of the line
        let sinα = null, cosSqα = 1;         // α = azimuth of the geodesic at the equator
        let C = null;

        let λʹ = null, iterations = 0;
        do {
            sinλ = Math.sin(λ);
            cosλ = Math.cos(λ);
            sinSqσ = (cosU2*sinλ) * (cosU2*sinλ) + (cosU1*sinU2-sinU1*cosU2*cosλ) * (cosU1*sinU2-sinU1*cosU2*cosλ);
            if (Math.abs(sinSqσ) < ε) break;  // co-incident/antipodal points (falls back on λ/σ = L)
            sinσ = Math.sqrt(sinSqσ);
            cosσ = sinU1*sinU2 + cosU1*cosU2*cosλ;
            σ = Math.atan2(sinσ, cosσ);
            sinα = cosU1 * cosU2 * sinλ / sinσ;
            cosSqα = 1 - sinα*sinα;
            cos2σₘ = (cosSqα != 0) ? (cosσ - 2*sinU1*sinU2/cosSqα) : 0; // on equatorial line cos²α = 0 (§6)
            C = f/16*cosSqα*(4+f*(4-3*cosSqα));
            λʹ = λ;
            λ = L + (1-C) * f * sinα * (σ + C*sinσ*(cos2σₘ+C*cosσ*(-1+2*cos2σₘ*cos2σₘ)));
            const iterationCheck = antipodal ? Math.abs(λ)-π : Math.abs(λ);
            if (iterationCheck > π) throw new EvalError('λ > π');
        } while (Math.abs(λ-λʹ) > 1e-12 && ++iterations<1000);
        if (iterations >= 1000) throw new EvalError('Vincenty formula failed to converge');

        const uSq = cosSqα * (a*a - b*b) / (b*b);
        const A = 1 + uSq/16384*(4096+uSq*(-768+uSq*(320-175*uSq)));
        const B = uSq/1024 * (256+uSq*(-128+uSq*(74-47*uSq)));
        const Δσ = B*sinσ*(cos2σₘ+B/4*(cosσ*(-1+2*cos2σₘ*cos2σₘ)-
            B/6*cos2σₘ*(-3+4*sinσ*sinσ)*(-3+4*cos2σₘ*cos2σₘ)));

        const s = b*A*(σ-Δσ); // s = length of the geodesic

        // note special handling of exactly antipodal points where sin²σ = 0 (due to discontinuity
        // atan2(0, 0) = 0 but atan2(ε, 0) = π/2 / 90°) - in which case bearing is always meridional,
        // due north (or due south!)
        // α = azimuths of the geodesic; α2 the direction P₁ P₂ produced
        const α1 = Math.abs(sinSqσ) < ε ? 0 : Math.atan2(cosU2*sinλ,  cosU1*sinU2-sinU1*cosU2*cosλ);
        const α2 = Math.abs(sinSqσ) < ε ? π : Math.atan2(cosU1*sinλ, -sinU1*cosU2+cosU1*sinU2*cosλ);

        return {
            distance:       s,
            initialBearing: Math.abs(s) < ε ? NaN : Dms.wrap360(α1.toDegrees()),
            finalBearing:   Math.abs(s) < ε ? NaN : Dms.wrap360(α2.toDegrees()),
            iterations:     iterations,
        };
    }

}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

export { LatLonEllipsoidal_Vincenty as default, Dms };
