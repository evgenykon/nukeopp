class MovementParameters {
    speed: number;
    direction: number;

    constructor(speed:number, direction:number) {
        this.speed = speed;
        this.direction = direction;
    }
}

class MovementSimulator {

    speed: number;
    throttle: number;
    directionAngle: number;

    flagGas: boolean;
    flagBrakes: boolean;
    damageLevel: number;
    flagDamaged: boolean;

    constructor() {
        window.addEventListener("keydown", this.keyHandler.bind(this), false);
        this.speed = 0;
        this.throttle = 0;
        this.flagGas = false;
        this.flagBrakes = false;
        this.directionAngle = 0;
        this.damageLevel = 0;
        this.flagDamaged = false;
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
            console.log('<<----', this.directionAngle);
            this.directionAngle--;
        } else if (event.code == 'ArrowRight') {
            console.log('---->>', this.directionAngle);
            this.directionAngle++;
        }
    }

    tick() {
        /*if (this.directionAngle > 0) {
            this.directionAngle--;
        } else if (this.directionAngle < 0) {
            this.directionAngle++;
        }
        if (this.flagGas) {
            this.speed++;
        } else if (this.speed > 0) {
            this.speed--;
        }
        this.flagGas = false;*/
        if (this.flagGas) {
            this.throttle++;
            if (this.speed === 0) {
                this.speed = 1;
            }
        } else if (this.throttle > 0) {
            this.throttle--;
        }
        this.flagGas = false;
        this.checkGear();
        
    }

    checkGear() {
        if (this.throttle > 10) {
            this.speed++;
            this.throttle = 1;
        }
        if (this.throttle <= 0 && this.speed > 0) {
            this.speed--;
            this.throttle = 10;
        }
        //console.log('movement.checkGear', this.speed, this.throttle);
    }

    getParameters(): MovementParameters {
        return new MovementParameters(this.speed, this.directionAngle);
    }


}

export {MovementParameters};
export default MovementSimulator;