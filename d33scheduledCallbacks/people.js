function map(people){
    return people.map(person=>({name:person.name.toUpperCase(),surname:person.surname.toUpperCase(),age:person.age}));
}
let john = { name: "John", surname: "Smith", age: 10 };
let pete = { name: "Pete", surname: "Hunt", age: 20 };
let people = [ john, pete];

console.log(map(people));