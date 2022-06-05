class ExplosionParams {
    shockWaveSize:number = 0;
    fireballSize:number = 0;
}

class ExplosionSimulator {
    
    params:ExplosionParams;
    timer:number|null;
    onTick:Function;

    constructor(onTick:Function) {
        this.params = new ExplosionParams();
        window.addEventListener("explode", this.startExplosionHandler.bind(this), false);
        this.timer = null;
        this.onTick = onTick;
    }

    startExplosionHandler() {
        console.log('startExplosionHandler');
        this.params.shockWaveSize = 1;
        this.params.fireballSize = 1;
        this.timer = setInterval(() => {
            this.tick();
        }, 100);
    }

    tick() {
        if (this.params.shockWaveSize > 0) {
            this.params.shockWaveSize += 150;
        }
        if (this.params.fireballSize > 0) {
            this.params.fireballSize += 10;
        }
        if (this.params.shockWaveSize > 10000) {
            this.params.shockWaveSize = 0;
        }
        if (this.params.fireballSize > 1000) {
            this.params.fireballSize = 0;
        }
        this.onTick(this.params);
        if (this.params.shockWaveSize === 0 && this.params.fireballSize === 0) {
            clearInterval(this.timer);
        }
    }
}

export {ExplosionParams};
export default ExplosionSimulator;