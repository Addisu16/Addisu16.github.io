const friend1='Michael';
const friend2='steven';
const friend3='peter';

//two most importantdata structure in javascript is arrays and objects

//let's put the above friends in array
const friends=['Micahel','steven','peter'];
console.log(friends);
//another declaration of arrays
const years=new Array(1991,2000,2001,2002);
console.log(years);
//let's log the first name from friends

console.log(friends[0]);
console.log(friends.length);//the length of elements in the array
console.log(friends[friends.length-1]);//to print the last item from the array
//let's modify the value from the array index 3
friends[2]='jay';
console.log(friends);


const jonas=['jonas','schown',2037-1991,friends];
console.log(jonas);

//Exercise:
const calAge=function(birthYear){
    return 2037-birthYear;
}
const year=[1990,1967,2002,2010,2018];

console.log(calAge(year));
