export function doubleNums(arr){
    return arr.map(num => num * 2);
    }
    
    export function doubleAges(arr){
        return arr.map(person => ({ ...person, age: person.age * 2 }));
    
    }
    
    export function filterEven(arr){
        return arr.filter(num => num % 2 === 0);
    }
    
    export function filterOver10(arr) {
        return arr.filter(person => person.age > 10);
    }
    
    export function findEvenNum(arr){
        return arr.findEvenAge(num => num % 2 === 0);
    
    }
    
    export function findEvenAge(arr){
        return arr.find(person => person.age%2===0);
    }
    
    export function includesEvenNum(arr){
        return arr.includes(2);
    }
    
    export function includesEvenAge(arr){
        return arr.includes(person => person.age%2===0);
    
    }
    export function sum(arr) {
        return arr.reduce((acc, curr) => acc + curr, 0);
      }
      export function average(arr) {
        return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
      }
      export function max(arr) {
        return arr.reduce((acc, curr) => Math.max(acc, curr), arr[0]);
      }
      export function maxAge(arr) {
        return arr.reduce((acc, curr) => Math.max(acc, curr.age), arr[0].age);
      }
      export function sumEvens(arr) {
        return arr.filter(person => person.age % 2 === 0)
                  .map(person => person.age)
                  .reduce((acc, curr) => acc + curr, 0);
      }
      export function sumOdds(arr) {
        return arr.filter(person => person.age % 2 !== 0)
                  .map(person => person.age)
                  .reduce((acc, curr) => acc + curr, 0);
      }
      
      
      
      
      
      