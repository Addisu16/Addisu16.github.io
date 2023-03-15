

/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
export function inArray(array) {
  return function (arr) {
    const filter1to7 = array.filter(item => item == arr);
    return filter1to7.length > 0;
  }
};
/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
export function inBetween(low, high) {
  return function (number) {
    return number >= low && number <= high;
  }

}

/**
 * 
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
export function byField(fieldName) {
  return function (a, b) {

    if (a[fieldName] > b[fieldName]) {
      return 1;
    }
    if (a[fieldName] < b[fieldName]) {
      return -1;
    }
    return 0;
  }
}


/**
 * @returns {Function} closure that returns it's number
 */
export function makeArmy() {
  let shooters = [];
  let i = 0;
  while (i < 10) {
    let shooter = function (i) {
      return function() {
        return i;
      };
    };
    shooters.push(shooter(i));
    i++;
  }
  return shooters;


}

let army = makeArmy();

  //army[0](); // the shooter number 0 shows 10
  //army[5](); // and number 5 also outputs 10...
