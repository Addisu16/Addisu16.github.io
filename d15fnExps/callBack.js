// write a function, multiplyEvens, that can be
// called with any number of arguments and returns
// the product of the even arguments
// • do first using the arguments object
// • then using …rest parameter
// multiplyEvens(1, 6, 3, 4, 17, 2) → 48


// function multiplyEvens(){
//     let product=1;
//     for(let i=0;i<arguments.length;i++){
//         if(arguments[i]%2===0){
//             product=product*arguments[i];
//         } 
//     }
//     return product;
    
// }
// function multiplyEvens1(...rest){
//     return rest.map((element)=>element%2===0);
    
//     }

// console.log(multiplyEvens(1,2,3,4,5,6));
// console.log(multiplyEvens1(1,2,3,4,5,6));

// const user = {
//     name: "Lachlan Morris",
//     address: { street: "Original Road", city: "Placeshire" },
//     };
// let user2=structuredClone(user);

// user.address.city="FairField";

// console.log(user2.address.city);

// //lost "this "problem 
// const abc={
//     a:1,
//     b:0,
//     add:function(){
//         console.log(this.a+this.b);

//     }
// };
// abc.add()
// //fix this: setTimeout(abc.add,1000);
// setTimeout(function() {abc.add.call(abc)},2000);//Nan
// setTimeout (function(){abc.add.apply(abc)},2000);


// ///example 2: fix lost "this" problem

// let user4={
//     name:"john",
//     sayHi:function(){
//         console.log(`Heloo ${this.name}`);
//     }
// };
// setTimeout(user4.sayHi,2000); //Hello undefined

// //fix using bind
// setTimeout(user4.sayHi.bind(user4),2000);
// //fix using wrapper function
// setTimeout(function(){
//     user4.sayHi();
// },2000);

// //fix using call function
// setTimeout(function(){
//     user4.sayHi.call(user4);
// },2000);
// //using apply function

// setTimeout(function(){
//     user4.sayHi.apply(user4);

// },2000);
// //fixing using arrow function

// setTimeout(()=>{
// user4.sayHi();},2000
// );
"use strict";
function a() {
console.log(this);}
const b = {
dog: 'fido',
log: function() {
console.log(this); }}
console.log(this);//undefined
a();//undefined
b.log();//{dog:'fido,log:[Function:log]};
let mylog = b.log;
mylog();//undefined

// function area(){
//     console.log(this);// 
//     return this.side * this.side;
//     }
//     const square1 = {side: 5, area: area};
//     console.log(square1.area());


    // function area(){
    //     console.log(this); 
    //     console.log(this.side)
    //     return this.side * this.side;
    //     }
    //     const square1 = {side: 5, area: area};
    //     console.log(area());

        const abc = {
            salute: "",
            greet: function() {
            this.salute = "Hello";
            console.log(this.salute); //Hello
            let self=this;
            const setFrench = function(newSalute) { //inner function
            self.salute = newSalute;
            };
            setFrench("Bonjour");
            console.log(this.salute); //Bonjour??
            }
            };
            abc.greet(); //Hello Hello ???
