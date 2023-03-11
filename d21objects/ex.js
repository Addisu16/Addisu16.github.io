function longestWord(str){
    const word=str.split(" ");
    const max=0;
    let count=0;

    if(word.length-1===0)return 0;
    for(let i=0;i<word.length;i++){
        if(word[i].length>max){
            return word[i].length;
           
        }else{
            return max;
        }
    }
}

console.log(longestWord("Thisss is a test"));



function averageLength(str){
    const word=str.split(" ");
    let sum=0;
    if(str.length===0)return 0;
    for(let i=0;i<word.length;i++){
        sum+=word[i].length;
    
}
if (sum!=0){
    let average=sum/word.length;
    return average;
}
return 0;
}
console.log(averageLength("Thisss is a test"));


const arr1=[1,10];
const arr2=[1,10];
const arr3=arr1;

console.log("I expect: false ",arr1===arr2);

console.log("I expect: false ",arr2===arr3);

console.log("I expect: true ",arr1===arr3);

console.log("I expect: false ",arr1==arr2);

console.log("I expect: false ",arr2==arr3);

console.log("I expect: false ",arr1==arr2);

console.log("I expect: true ",arr2[1]==arr3[1]);

console.log("I expect: true ",arr2[1]===arr3[1]);


function reverseAll(str){
    let rev="";
    for(let i=str.length-1;i>=0;i--){
     rev=rev+str[i];        
    }
    return rev;

    }
console.log(reverseAll("you are"));


let numArray=[55,4,11,3];
let result=numArray.reduce((max,current)=>{
    return Math.max(max,current);
},-Infinity);

//"use strict";
function area(){
    console.log(this);
    return 3.14*this.radius*this.radius;
}
const circle={
    radius:1,
    area:area
};
//circle.area();

// const myArea=circle.area;
// console.log(myArea());

// let area=(width,length)=>{
//     return width*length;
// };

//const apple={name:"john",age:10};
//const banana={name:"john",age:10};
// console.log(apple==banana);
// const x={y:5};
// x.y=6;
// console.log(x);

let student={id:1234,name:"Thomas"};
const{id,name}=student;

console.log('expect thomas:',name);
console.log('expect 1234;',id)

//write a function,vowelCount,(or functions)that will take a string as input and return an object that has properties
//a,e,i,o,u.The object property values will be the count of the instances of that vowel in the string.Infinity
    
    function vowelCount(str) {
        const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };
        for (let i = 0; i < str.length; i++) {
          const char = str.charAt(i).toLowerCase();
          if (char==='a'||char==='e'||char==='i'||char==='o'||char==='u') {
            vowels[char]++;
          }
        }
        return vowels;
      }
      console.log(vowelCount("you are special "));

function vowelcount2(str){
    let count={ a: 0, e: 0, i: 0, o: 0, u: 0 };
    let vowels=['a','e','i','o','u'];
    for(const char of str){
        if(vowels.includes(char)){
            count[char]++;
        }
    }
    return count;
}
console.log("😂😂😂😂",vowelcount2("you are special "));









/*assignment question*/
//const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
const peopleArray = [
  { name: "Sam", age: 15 },
  { name: "William", age: 6 },
  { name: "Lucy", age: 13 },
  { name: "Barney", age: 80 },
];

function doubleNumbers(arr) {
  return arr.map((num) => num * 2);
}

function doubleAges(arr) {
  return arr.map((person) => ({ ...person, age: person.age * 2 }));
}

function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

function filterAgesGreaterThanTen(arr) {
  return arr.filter((person) => person.age > 10);
}

function findEvenNumber(arr) {
  return arr.find((num) => num % 2 === 0);
}

function findAgeGreaterThanTen(arr) {
  return arr.find((person) => person.age > 10);
}

function includeEvenNumber(arr, num) {
  return arr.includes(num % 2 === 0);
}

function includeAgeGreaterThanTen(arr, age) {
  return arr.some((person) => person.age > age);
}

function sumNumbers(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function averageNumbers(arr) {
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}

function maxNumber(arr) {
  return arr.reduce((max, num) => (num > max ? num : max), -Infinity);
}

function maxAge(arr) {
  return arr.reduce((max, person) => (person.age > max ? person.age : max), -Infinity);
}

function sumEvens(arr) {
  return arr
    .filter((person) => person.age % 2 === 0)
    .map((person) => person.age)
    .reduce((sum, age) => sum + age, 0);
}

function sumEvenAges(arr) {
  return arr
    .filter((person) => person.age % 2 === 1)
    .map((person) => person.age)
    .reduce((sum, age) => sum + age, 0);
}
  