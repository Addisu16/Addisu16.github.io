

"use strict";

const person={//Person is an object
    name:"Addisu",//property
    age:50,
    email:"addispink16@gmail.com",
    address:{//address is another object and the rest are property
        street:"1000 N 4th street",
        city:"FairField",
        state:"IA",
        zip:"12345"
    }
};
//we can access and modift the object properties using dot or bracket notation

console.log(person.name);//
console.log(person.address.street);//
console.log(person.age=40);
person.phone="571-866-7978";//we can just add new property


//We can loop through an object's properties using a for...in loop:
for(let key in person){
    console.log(key+ " "+person[key]);
}
//In addition to regular properties, JavaScript objects can also have methods, 
//which are functions that are stored as object properties:

const person1={
    name:"John",
    age:30,
    sayHello:function(){
        console.log("Hello,my name is "+this.name+".");

    }
};
person1.sayHello();

function findPros(){
   for(const key in person1){
   console.log(key+""+person1[key]);
   }
}
