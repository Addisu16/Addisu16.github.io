export function doubleNums(arr){
    return arr.map(num => num * 2);
    }
    
    export function doubleAges(arr){
        return arr.map(person => ({ ...person, age: person.age * 2 }));
    
    }
    
    export function filterEven(arr){
      if(number%2===0){
        return number;
    }
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
   function sum(arr) {
        return arr.reduce((acc, curr) => acc + curr, 0);
      }
     function average(arr) {
        return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
      }
function max(arr) {
        return arr.reduce((acc, curr) => Math.max(acc, curr), arr[0]);
      }
    function maxAge(arr) {
        return arr.reduce((acc, curr) => Math.max(acc, curr.age), arr[0].age);
      }
      function sumEvens(arr) {
        return arr.filter(person => person.age % 2 === 0)
                  .map(person => person.age)
                  .reduce((acc, curr) => acc + curr, 0);
      }
      function sumOdds(arr) {
        return arr.filter(person => person.age % 2 !== 0)
                  .map(person => person.age)
                  .reduce((acc, curr) => acc + curr, 0);
      }
      
      
      
      
      
      