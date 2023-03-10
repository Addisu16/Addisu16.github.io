export function filterRange(arr, a, b) {
  return arr.filter(x => a <= x && x <= b);
}

export function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

export function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = function(str) {
    let split = str.split(" ");
    let a = +split[0];
    let op = split[1];
    let b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

export function unique(arr) {
  return Array.from(new Set(arr));
}

export function groupById(array) {
  return array.reduce((acc, obj) => {
    acc[obj.id] = obj;
    return acc;
  }, {});
}
