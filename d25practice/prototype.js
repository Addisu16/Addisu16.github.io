const Person=function(name,birthYear){
    this.name=name;
    this.birthYear=birthYear;
};

const jonas=new Person('Addis',1994);
Person.prototype.calAge=function(){
    console.log(2037-this.birthYear);

};
jonas.calAge();
console.log(jonas__proto__===Person.prototype);