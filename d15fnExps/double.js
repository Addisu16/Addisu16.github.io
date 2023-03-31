/**
 * 
 * @param {number} number that is given by the user
 * @returns {number} 2 times number will be returned
 */

function double(number){
    return 2*number;
}
/**
 * 
 * @param {number} number that is given by the user
 * @returns {number}100 times the given number
 */

function times100(number){
return 100*number;
}
/**
 * 
 * @param {Array} array given by the user
 * @param {function} func takes the given array and put in a new array
 * @returns {Array} returns the new array
 */
function myMap(array,func){

const inputArray=[];
for(let i=0;i<array.length;i++){
inputArray.push(func(array[i]));
}
    return inputArray;
}
 

const givenArray=[1,2,3,4,5,6];
console.log("Using myMap function: ",myMap(givenArray,double));
console.log("Using myMap function: ",myMap(givenArray,times100));

/**
 * 
 * @param {Array} arr takes given by the user
 * @param {function} func that returns the given array times by three
 * @returns {Array} returns the new array
 */
const myAnnon=function(arr, func) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(3*func(arr[i]));
    }
    return result;
  }
  /**
 * 
 * @param {Array} arr takes given by the user
 * @param {function} func that returns the given array times by three
 * @returns {Array} returns the new array
 */

const myArrow=(arr, func)=>{
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(3*func(arr[i]));
    }
    return result;
  }
  function myReduce(arr,myFun){
    const newArray=[];
    for(let i=0;i<arr.length;i++){
      newArray.push(myFun(arr[i]));
    }
    return newArray;
  }


  function myFilter(arr,fun){
    for(let i=0;i<arr.length;i++){
      return fun(arr[i]);
    }
    return -1;
  }
const Array=[1,2,3,4,5,6];
console.log("Using anonymous function: ",myAnnon(Array,double));
console.log("Using anonymous function: ",myAnnon(Array,times100));

console.log("Usig arrow function: ",myArrow(Array,double));
console.log("Using arrow function: ",myArrow(Array,times100));
console.log("Using reduce function: ",myReduce(Array,times100));
console.log("Using myFilter: ",myFilter(Array,times100));


function myFun(a,b){
  return a*b;
}
console.log("Invoking a function",myFun(5,2));

const person={
  firstName:"Addisu",
  lastName:"Alemayehu",
  display:function(){
    return this.firstName+ " "+this.lastName;
  }
}

let pp=person.display.bind(person);
setTimeout(person.display,3000);


const myObj=[{x:1,y:4},{x:2,y:6}];
function myArr(obj){
  const newArray=[];
for(const value of obj){
     newArray.push(value.x+value.y); 
}
return newArray;
}
console.log("array push method",myArr(myObj));

