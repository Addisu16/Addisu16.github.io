let user={};
[user.name,user.last]="Addis Alemayehu".split('');
console.log(user);
//console.log(user[1]);

let person={name:"Addis",country:"Ethiopia",job:"Developer"};
//assign in destructuring form
let{name,country,job}=person;
console.log(job);

const team = ["Bob", "Fred", "Jim"];

let[bob,fred,jim]=team;

console.log("Expect Bob ",bob);

const team1 = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" }
// 1. destructure the team object onto variables with the same names as the properties
//let{point,shooting,power,small,center}=team1;
// console.log("expect Big Sleep: ",center);
// console.log("expect Jim: ",power);



//destructure the team onto variables: one (point guard), two (shooting guard), three (small
    //forward), four (power forward) and five (center)




    let{point:one,shooting:two,power:four}=team1;
    console.log("expect Jim: ",four);
    console.log("expect Bob: ",one);

    const user2={
        name:"Addis",
        age:27,
        toString:function(){
            return `{name:${this.name},age:${this.age}}`;
        }

    };
    console.log(user2);

    //create and log to the console a JSON string from john. Then create a new instance of john, johnClone, using
//JSON.parse on the JSON string you created. Is john === johnClone?
let john = {
name: "John",
surname: "Smith",
isAdmin: false,
birthday: {"year": 2000, "month": "February", "day": 3},
friends: [0,1,2,3]
};

john=JSON.stringify(john);
console.log("log in to the console john",john);

const johnClone=JSON.parse(john);
console.log("Return the JSON string to oobject ",johnClone);
console.log("Check johnClone and john is equal",johnClone==john);//false

const jsonString='{"window": { "title": "Sample Widget", "width": 500,"height": 500},"image":{ "coords": [250, 150, 350, 400],"alignment": "center"},
    "messages": [
    {"text": "Save", "offset": [10, 30]},
    {"text": "Help", "offset": [0, 50]},
    {"text": "Quit", "offset": [30, 10]},
    ],
    "debug":true}';
  
    const data = JSON.parse(jsonString);