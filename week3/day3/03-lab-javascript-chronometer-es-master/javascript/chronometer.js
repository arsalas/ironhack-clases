class Chronometer {
    currentTime;
    intervalId;

    constructor() {
        // ... your code goes here
        this.currentTime = 0;
        this.intervalId = null;
    }

    start(callback) {
        // ... your code goes here
        this.intervalId = setInterval(() => {
            this.currentTime++;
            if (callback) callback()
        }, 1000)
    }

    getMinutes() {
        // ... your code goes here
        return Math.floor(this.currentTime / 60);
    }

    getSeconds() {
        // ... your code goes here
        return this.currentTime % 60;
    }

    computeTwoDigitNumber(value) {
        // ... your code goes here
        // padStart completa con el '0' hasta llenar los 2 caracteres
        return value.toString().padStart(2, '0')
    }

    stop() {
        // ... your code goes here
        clearInterval(this.intervalId);
    }

    reset() {
        // ... your code goes here
        this.currentTime = 0;
    }

    split() {
        // ... your code goes here
        const min = this.getMinutes();
        const sec = this.getSeconds();
        return `${this.computeTwoDigitNumber(min)}:${this.computeTwoDigitNumber(sec)}`
    }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = Chronometer;
}
