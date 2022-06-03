
class GearCoefficients {
    readonly coefs = [
        -1, // Reverse (-1)
        0, // N (0)
        1, // 1
        1.5, // 2
        2, // 3
        3.5, // 4
        4.5, // 5
        5.5 // 6
    ];
    readonly maxGear = 6;
    readonly minGear = -1;
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
    readonly oneDirectRotation = 1.7; // meters per direct rotation
    readonly minThrottleOnGear = 90;
    readonly throttleStepOnDrive = 2500;
    readonly autoRotationThrottleDecrementForward = 2000;
    readonly autoRotationThrottleDecrementBackward = 1000;
    readonly autoRotationThrottleDecrementStopping = 3000;

    readonly maxRotationAngle = 3;

    constructor(direction:number = 0, gear:number = 0, throttle:number = 0, damage:number = 0) {
        this.direction = direction;
        this.gear = gear;
        this.throttle = throttle;
        this.damage = damage;
    }

    incThrottle() {
        this.throttle += this.throttleStepOnDrive;
        if (this.throttle >= this.maxThrottle) {
            this.throttle = this.maxThrottle;
            return;
        }
    }

    decThrottle(value:number) {
        if (this.throttle <= 0) {
            this.throttle = 0;
            return;
        }
        this.throttle -= value;
    }

    incGear() {
        if (this.gear >= this.coefs.maxGear) {
            this.gear = this.coefs.maxGear;
            return;
        }
        this.gear++;
    }

    decGear() {
        if (this.gear <= this.coefs.minGear) {
            this.gear = this.coefs.minGear;
            return;
        }
        this.gear--;
    }

    onDriveOn() {
        if (this.gear === 0) {
            this.incGear();
        }
        if (this.throttle >= this.maxThrottle && this.gear > 0 && this.gear < this.coefs.maxGear) {
            this.throttle = this.minThrottleOnGear;
            this.incGear();
        } else {
            this.incThrottle();
        }
    }

    onAutoRotation() {
        this.decThrottle(this.autoRotationThrottleDecrementForward);
        if (this.throttle < (this.minThrottleOnGear + 10)) {
            if (this.gear > 1) {
                this.decGear();
                this.throttle = this.maxThrottle;
            } else if (this.gear == 1) {
                this.throttle = 0;
                this.gear = 0;
            }
        }
        if (this.gear < 0) {
            this.decThrottle(this.autoRotationThrottleDecrementBackward);
        }
    }

    restoreDirection() {
        if (this.direction >= 2) {
            this.direction = this.direction - 2;
        } else if (this.direction <= -2) {
            this.direction = this.direction + 2;
        } else {
            this.direction = 0;
        }
    }

    onStop() {
        this.decThrottle(this.autoRotationThrottleDecrementStopping);
        if (this.throttle < this.minThrottleOnGear && this.gear > 0) {
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
        if (this.direction < -this.maxRotationAngle) {
            this.direction = -this.maxRotationAngle;
        }
    }

    rotateRight() {
        this.direction++;
        if (this.direction > this.maxRotationAngle) {
            this.direction = this.maxRotationAngle;
        }
    }

    /**
     * Расстояние в метрах/c при текущей конфигурации (1 m/s = 3.6 km/h)
     */
    get distancePerSecond(): number {
        return this.oneDirectRotation * (this.coefs.getForGear(this.gear) + (this.throttle / this.maxThrottle)) * 4;
    }

    /**
     * Расстояние в км/час при текущей конфигурации
     */
    get speed(): number {
        return this.distancePerSecond * 3.6;
    }
}

class MovementSimulator {

    movement:MovementParameters;

    flagGas: boolean;
    flagBrakes: boolean;
    damageLevel: number;
    flagDamaged: boolean;
    flagRotateLeft: boolean;
    flagRotateRight: boolean;

    constructor() {
        window.addEventListener("keydown", this.keyHandler.bind(this), false);
        this.flagGas = false;
        this.flagBrakes = false;
        this.damageLevel = 0;
        this.flagDamaged = false;
        this.flagRotateLeft = false;
        this.flagRotateRight = false;
        this.movement = new MovementParameters();
    }

    keyHandler(event: KeyboardEvent) {
        if (event.code == 'ArrowDown') {
            this.flagGas = false;
            this.flagBrakes = true;
        } else if (event.code == 'ArrowUp') { // ArrowDown, ArrowRight, ArrowLeft, Escape
            this.flagGas = true;
            this.flagBrakes = false;
        } else if (event.code == 'ArrowLeft') {
            this.flagRotateLeft = true;
            this.flagRotateRight = false;
            
        } else if (event.code == 'ArrowRight') {
            this.flagRotateRight = true;
            this.flagRotateLeft = false;
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
        if (this.flagRotateLeft) {
            this.movement.rotateLeft();
        } else if (this.flagRotateRight) {
            this.movement.rotateRight();
        } else {
            //this.movement.restoreDirection();
        }
        this.flagGas = false;
        this.flagRotateLeft = false;
        this.flagRotateRight = false;
    }

    getParameters(): MovementParameters {
        return this.movement;
    }
}

export {MovementParameters};
export default MovementSimulator;