
class GearCoefficients {
    readonly coefs = [
        -1, // Reverse (-1)
        0, // N (0)
        1, // 1
        1.5, // 2
        2, // 3
        2.5, // 4
        3, // 5
        3.5 // 6
    ];
    getForGear(gear: number) {
        return this.coefs[gear+1];
    }
}

class MovementParameters {

    gear: number;
    throttle: number;
    direction: number;
    damage: number;

    readonly coefs: GearCoefficients = new GearCoefficients();
    
    readonly maxThrottle:number = 7000; // max rotations per second
    readonly oneDirectRotation = 0.03; // meters per direct rotation

    constructor(direction:number = 0, gear:number = 0, throttle:number = 0, damage:number = 0) {
        this.direction = direction;
        this.gear = gear;
        this.throttle = throttle;
        this.damage = damage;
    }

    incThrottle() {
        if (this.throttle >= this.maxThrottle) {
            this.throttle = this.maxThrottle;
            return;
        }
        this.throttle += 10;
    }

    decThrottle(value:number) {
        if (this.throttle <= 0) {
            this.throttle = 0;
            return;
        }
        this.throttle -= value;
    }

    incGear() {
        if (this.gear >= 6) {
            this.gear = 6;
            return;
        }
        this.gear++;
    }

    decGear() {
        if (this.gear <= -1) {
            this.gear = -1;
            return;
        }
        this.gear--;
    }

    onDriveOn() {
        if (this.gear === 0) {
            this.incGear();
        }
        if (this.throttle >= this.maxThrottle && this.gear > 0) {
            this.throttle = 90;
            this.incGear();
        }
        this.incThrottle();
    }

    onAutoRotation() {
        this.decThrottle(10);
        if (this.throttle < 100 && this.gear > 0) {
            this.decGear();
            this.throttle = this.maxThrottle;
        }
    }

    onStop() {
        this.decThrottle(100);
        if (this.throttle < 100 && this.gear > 0) {
            this.decGear();
            this.throttle = this.maxThrottle;
        }
    }

    onReset() {
        this.throttle = 0;
        this.gear = 0;
        this.direction = 0;
    }

    rotateLeft() {
        this.direction--;
        if (this.direction < -45) {
            this.direction = -45;
        }
    }

    rotateRight() {
        this.direction++;
        if (this.direction > 45) {
            this.direction = 45;
        }
    }

    /**
     * Расстояние в метрах/c при текущей конфигурации (1 m/s = 3.6 km/h)
     */
    get distancePerSecond(): number {
        return this.oneDirectRotation * this.throttle * this.coefs.getForGear(this.gear);
    }

    /**
     * Расстояние в км/час при текущей конфигурации
     */
    get speed(): number {
        return this.distancePerSecond * 60 * 3.6;
    }
}

class MovementSimulator {

    movement:MovementParameters;

    flagGas: boolean;
    flagBrakes: boolean;
    damageLevel: number;
    flagDamaged: boolean;

    constructor() {
        window.addEventListener("keydown", this.keyHandler.bind(this), false);
        this.flagGas = false;
        this.flagBrakes = false;
        this.damageLevel = 0;
        this.flagDamaged = false;
        this.movement = new MovementParameters();
    }

    keyHandler(event: KeyboardEvent) {
        if (event.code == 'ArrowDown') {
            console.log('....down....')
            this.flagGas = false;
            this.flagBrakes = true;
        } else if (event.code == 'ArrowUp') { // ArrowDown, ArrowRight, ArrowLeft, Escape
            console.log('....up....')
            this.flagGas = true;
            this.flagBrakes = false;
        } else if (event.code == 'ArrowLeft') {
            this.movement.rotateLeft();
            console.log('<<----', this.movement.direction);
            
        } else if (event.code == 'ArrowRight') {
            this.movement.rotateRight();
            console.log('---->>', this.movement.direction);
        }
    }

    tick() {
        if (this.flagGas) {
            this.movement.onDriveOn();
        } else if (this.flagBrakes) {
            this.movement.onStop();
        } else if (this.flagDamaged) {
            this.movement.onReset();
        } else {
            this.movement.onAutoRotation();
        }
        this.flagGas = false;
    }

    getParameters(): MovementParameters {
        return this.movement;
    }
}

export {MovementParameters};
export default MovementSimulator;