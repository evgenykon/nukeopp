class SimulationTimers {
    tickTimeout: number;
    pauseBeforeStart: number;

    tickTimer: number | null;

    onTickCallback: Function;

    constructor(tickTimeout:number, pauseBeforeStart:number, onTickCallback:Function) {
        this.tickTimeout = tickTimeout;
        this.pauseBeforeStart = pauseBeforeStart;
        this.onTickCallback = onTickCallback;
        this.tickTimer = null;
        if (pauseBeforeStart > 0) {
            setTimeout(() => this.runClock(), this.pauseBeforeStart);
        } else {
            this.runClock();
        }
    }

    runClock() {
        this.tickTimer = setInterval(() => this.onTickCallback(), this.tickTimeout);
    }

    stop() {
        if (this.tickTimer) {
            clearInterval(this.tickTimer);
        }
    }
}

export default SimulationTimers;