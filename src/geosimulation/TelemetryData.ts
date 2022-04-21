interface ITelemetryData {
    isEnable: boolean;
    sensors: ISensors | null;
}

interface ISensors {
    carSpeed: number;
    time: string;
    lastTweets: Array<string>,
    gaz: number;
    damage: number;
}

class SensorsData implements ISensors {
    carSpeed: number;
    damage: number;
    gaz: number;
    lastTweets: string[];
    time: string;
    constructor() {
        this.carSpeed = 0;
        this.damage = 0;
        this.gaz = 0;
        this.lastTweets = [];
        this.time = '';
    }
}

class TelemetryData implements ITelemetryData {
    isEnable: boolean;
    sensors: ISensors | null;
    constructor() {
        this.isEnable = true;
        this.sensors = new SensorsData();
    }
}

export {ITelemetryData, ISensors, TelemetryData};