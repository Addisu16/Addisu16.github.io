function map(people){
    let properties=[];
    for(const person of people){
    properties.push({name:person.name,surname:person.surname,age:person.age});
    }
    return properties;
}
let john = { name: "John", surname: "Smith", age: 10 };
let pete = { name: "Pete", surname: "Hunt", age: 20 };
let people = [ john, pete];

console.log(map(john));