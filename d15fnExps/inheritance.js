class Person{
    constructor(name){
        this._name=name;

    }
    greeting(){
        return `Hi,My name is ${this._name}`;
    }
}
class Professor extends Person{
    constructor(name,office){
        super(name);
        this._office=office;
    }

    greeting(){
        return `${super.greeting()},My office is ${this._office}`;
    }
}
const ruby=new Professor("Clyde","MCL225");
const greet=ruby.greeting();
console.log(greet);//My name is Clyde,My office number is MCL225