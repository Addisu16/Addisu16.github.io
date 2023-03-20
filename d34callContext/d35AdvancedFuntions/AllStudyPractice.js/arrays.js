const array=[1,2,3,4,5];

console.log("test is it's array ",Array.isArray(array));
console.log("toString() method ",array.toString());
console.log("join array method ",array.join("=>"));
const myarray=array.forEach(myFunction);

function myFunction(myarray){
    let text="";
    return text+myarray;
}

console.log(myFunction(array));
/*
The Difference Between Arrays and Objects
In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.
//When to Use Arrays. When to use Objects.
JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.

//shift() removes the first element from the start
//push() adds elements at the end
//pop() removes elements from last
//unshift() adds elements at the beginning
*/
//merging arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log("merging arrays ",myChildren);
/*Splicing and Slicing Arrays
The splice() method adds new items to an array.

The slice() method slices out a piece of an array.*/

const fruit = ["Banana", "Orange", "Apple", "Mango"];
const fruit2=fruit.splice(2,0,"Lemon", "Kiwi");
console.log(fruit2);
/*The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items:*/

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log("slice usage ",citrus);// [ 'Orange', 'Lemon' ]

const ct=fruits.slice(3);
console.log("The slice usage 2",ct);

//sort method sorts the array in asceding order and the reverse() method sorts descending 

//for numbers the sort() method is not working so we have to use like
const points = [40, 100, 1, 5, 25, 10];
const myPoints=points.sort(function(a, b){return a - b});

console.log("comapre method ",myPoints);

/*
The Compare Function
The purpose of the compare function is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments:
*/
const compare=function(c, d){return c - d};
//sorting arrays in random order
const points1 = [40, 100, 1, 5, 25, 10];
const myPoints1=points1.sort(function(){return 0.5 - Math.random()});
console.log("Random sorting ",myPoints1);

/*
The Fisher Yates Method
The above example, array.sort(), is not accurate. It will favor some numbers over the others.

The most popular correct method, is called the Fisher Yates shuffle, and was introduced in data science as early as 1938!

In JavaScript the method can be translated to this:
*/
const points2 = [40, 100, 1, 5, 25, 10];

for (let i = points2.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points2[i];
  points2[i] = points2[j];
  points2[j] = k;
}

/*Find the Highest (or Lowest) Array Value
There are no built-in functions for finding the max or min value in an array.

However, after you have sorted an array, you can use the index to obtain the highest and lowest values.

Sorting ascending:
*/
const points4 = [40, 100, 1, 5, 25, 10];
points4.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value
/*
Using Math.max() on an Array
You can use Math.max.apply to find the highest number in an array:
*/
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
  }

  let arr=[1,2,3,4,50,60];
  console.log("Max value is: ",myArrayMax(arr));


  //comparing and sorting strings 

  const cars=[{name:"corolla",year:2005},{name:"Hyundi",year:2013},{name:"ford",year:2014}];
//now let's sort car objects 
// function myFunction2(){
// cars.sort(function(a,b){
//     let x=a.type.toLowerCase();
//     let y=b.type.toLowerCase();
//     if (x < y) {return -1;}
//     if (x > y) {return 1;}
//     return 0;
// });

// }

/*
Array iteration methods operate on every array item.*/

//Note that the function takes 3 arguments:
const numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction4);
function myFunction4(value){
  if(value>18){
console.log("The value graeter than 18 is",value);
  }
}
const numbers2=[4,5,6,7,8,9];

numbers2.map(myFunction5);
function myFunction5(value,index,array){
    if(index>0){
        
        
    }
    console.log(value*2,index,array);
}
const numbers3 = [45, 4, 9, 16, 25];
const over18 = numbers3.filter(myFunction6);

function myFunction6(value, index, array) {
  console.log(value > 18,index,array.length);
}


const numbers6 = [45, 4, 9, 16, 25];
let sum=numbers6.reduce(myFunction7,0);
function myFunction7(total,value) {
  
 return total+value;
}
console.log(sum);
//The item value
//The item index
//The array itself




// function myFunction3(value, index, array) {
//   txt += value + "<br>";
// }
const numbers8 = [45, 4, 9, 16, 25];
const a=numbers8.every(myFunction8);

function myFunction8(value,index) {
  if(value > 18){
 
  console.log(value,index);
  }

}


/*
array.copyWithin(target, start, end)
*/

//entries() method returns an object with key values

let names=["addis","addisu","adda"];
let entry=names.entries();
for(let entries of entry){
  console.log(entries);//[ 0, 'addis' ]
 // [ 1, 'addisu' ]
  //[ 2, 'adda' ]
}
//fill()value fills the array by the given value;
/*Definition and Usage
The fill() method fills specified elements in an array with a value.

The fill() method overwrites the original array.

Start and end position can be specified. If not, all elements will be filled.
*/
//syntax:array.fill(value, start, end)//start:start index and end:is end index

//return value is the array with filled value
/*
Definition and Usage
The filter() method creates a new array filled with elements that pass a test provided by a function.

The filter() method does not execute the function for empty elements.

The filter() method does not change the original array.
*/

const ages=[10,23,14,20];

const age=ages.find((value)=>{if(value>18){
    console.log(value);
}
});


const myTimeOut=setTimeout(() => {//The setTimeOut() method executes only once
  console.log("Happy birth day");
  
},3000);
//if you need to execute for different times use setInterval()method 