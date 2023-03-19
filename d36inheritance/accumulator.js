

/**
 * 
 * @param {number} initialValue is starting value
 * @param {number} increment is amount added each call to accumulate
 * @returns {Accumulator} constructor function
 */
export function Accumulator(initialValue, increment) {
    this.increment = increment;
    this.initialValue=initialValue;
    this.currentValue = initialValue;
    this.accumulate = function () {
        this.currentValue = this.currentValue + increment;
    };

    this.report = function () {
        return this.currentValue;
    };

}

