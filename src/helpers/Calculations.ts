export default class Calculations {

    static getRandomIntegerFromRange(min:number, max:number):number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static toRadians(angleInDegrees:number): number {
        return (angleInDegrees * Math.PI) / 180;
    }

    static decToBigNumber(value: number): number {
        return Math.trunc(value * 100000);
    }
}
