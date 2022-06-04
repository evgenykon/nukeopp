
class GearCoefficients {
    readonly coefs = [
        1, // Reverse (-1)
        0, // N (0)
        0.1, // 1
        0.6, // 2
        1.2, // 3
        1.8, // 4
        2, // 5
        2.2 // 6
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
    readonly throttleStepOnDrive = 200;
    readonly autoRotationThrottleDecrementForward = 1000;
    readonly autoRotationThrottleDecrementBackward = 500;
    readonly throttleDecrementStopping = 3000;

    readonly maxRotationAngle = 6;

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
        if (this.throttle < 0) {
            this.throttle = 0;
        }
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
        if (this.throttle < (this.minThrottleOnGear + 1000)) {
            if (this.gear > 1) {
                this.decGear();
                this.throttle = this.maxThrottle;
            }
        }
        if (this.gear < 0) {
            this.decThrottle(this.autoRotationThrottleDecrementBackward);
        }
    }

    restoreDirection() {
        if (this.direction > 0) {
            this.direction--;
        } else if (this.direction < 0) {
            this.direction++;
        }
    }

    onStop() {
        //console.log('onStop', this.throttle, this.gear);
        this.decThrottle(this.throttleDecrementStopping);
        if (this.throttle < this.minThrottleOnGear && this.gear >= 1) {
            this.decGear();
            this.throttle = this.maxThrottle;
        }
        if (this.gear === 0) {
            this.throttle = 0;
        }
    }

    onReset() {
        this.throttle = 0;
        this.gear = 0;
        this.direction = 0;
    }

    onDamage() {
        this.gear = 1;
        this.throttle = 200;
        this.damage++;
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
        return this.oneDirectRotation * (this.coefs.getForGear(this.gear) + (this.throttle / this.maxThrottle)) ;
    }

    /**
     * Расстояние в км/час при текущей конфигурации
     */
    get speed(): number {
        return this.distancePerSecond * 10;
    }
}

class KeyActive {
    up: boolean = false;
    down: boolean = false;
    left: boolean = false;
    right: boolean = false;
}

class MovementSimulator {

    movement:MovementParameters;

    flagGas: boolean;
    flagBrakes: boolean;
    damageLevel: number;
    flagDamaged: boolean;
    flagRotateLeft: boolean;
    flagRotateRight: boolean;

    keyActive: KeyActive = new KeyActive();

    constructor() {
        window.addEventListener("keydown", this.keyHandlerPress.bind(this), false);
        window.addEventListener("keyup", this.keyHandlerRelease.bind(this), false);
        window.addEventListener('collision', this.collisionHandler.bind(this), false);
        this.flagGas = false;
        this.flagBrakes = false;
        this.damageLevel = 0;
        this.flagDamaged = false;
        this.flagRotateLeft = false;
        this.flagRotateRight = false;
        this.movement = new MovementParameters();
    }

    keyHandlerPress(event: KeyboardEvent) {
        if (event.code == 'ArrowDown') {
            this.keyActive.down = true;
        } else if (event.code == 'ArrowUp') { 
            this.keyActive.up = true;
        } else if (event.code == 'ArrowLeft') {
            this.keyActive.left = true;
        } else if (event.code == 'ArrowRight') {
            this.keyActive.right = true;
        }
    }

    keyHandlerRelease(event: KeyboardEvent) {
        if (event.code == 'ArrowDown') {
            this.keyActive.down = false;
            
        } else if (event.code == 'ArrowUp') { 
            this.keyActive.up = false;
            
        } else if (event.code == 'ArrowLeft') {
            this.keyActive.left = false;
            
        } else if (event.code == 'ArrowRight') {
            this.keyActive.right = false;
        }
    }

    collisionHandler() {
        this.flagGas = false;
        this.flagBrakes = false;
        this.movement.onDamage();
    }

    setFlasgByKeys() {
        if (this.keyActive.down) {
            this.flagGas = false;
            this.flagBrakes = true;
            if (this.keyActive.left) {
                this.movement.rotateLeft();
            } else if (this.keyActive.right) {
                this.movement.rotateRight();
            }

        } else if (this.keyActive.up) {
            this.flagGas = true;
            this.flagBrakes = false;
            if (this.keyActive.left) {
                this.movement.rotateLeft();
            } else if (this.keyActive.right) {
                this.movement.rotateRight();
            }
        } else {
            this.flagGas = false;
            this.flagBrakes = false;
            if (this.keyActive.left) {
                this.movement.rotateLeft();
            } else if (this.keyActive.right) {
                this.movement.rotateRight();
            }
        }
    }

    tick() {
        this.setFlasgByKeys();

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
            
        }
    }

    afterMove() {
        if (this.movement.direction > 0 || this.movement.direction < 0) {
            this.movement.restoreDirection();
        }
    }

    getParameters(): MovementParameters {
        return this.movement;
    }
}

export {MovementParameters};
export default MovementSimulator;