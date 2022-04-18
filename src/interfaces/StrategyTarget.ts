
import SimGeolocationCoordinates from "../geosimulation/SimGeolocationCoordinates";

interface IStrategyTarget {
    code: string;
    name: string;
    areaCenter: SimGeolocationCoordinates;
    areaPolygon: Array<SimGeolocationCoordinates>;
    startPoint: SimGeolocationCoordinates;
}

class StrategyTarget implements IStrategyTarget {
    code: string;
    name: string;
    areaCenter: SimGeolocationCoordinates;
    areaPolygon: SimGeolocationCoordinates[];
    startPoint: SimGeolocationCoordinates;
    constructor(code:string, name:string, areaCenter:SimGeolocationCoordinates, areaPolygon:Array<SimGeolocationCoordinates>, startPoint:SimGeolocationCoordinates) {
        this.code = code;
        this.name = name;
        this.areaCenter = areaCenter;
        this.areaPolygon = areaPolygon;
        this.startPoint = startPoint;
    }
}

export {IStrategyTarget, StrategyTarget};
