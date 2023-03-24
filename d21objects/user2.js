// "use strict";
// function birthday(){
//     console.log(this);
//     this.age=this.age+1;

//     console.log(this.age);
//     const person={name:"Bob",age:10,birthday:birthday};
//     console.log(person.birthday());


//"use strict";
// function birthday(){
//     console.log(this);

//     this.age=this.age+1;
//     console.log(this.age);
//     const person={name:"Bob",age:10,birthday:birthday};
//     console.log(person.birthday());
// }
function callBack(signal,input,call1,call2){
if(signal){
    return call1(input);
}else{
    return call2(input);
}
}
console.log(callBack(true,100,apple,banana));//expect: 
console.log(callBack(false,200,apple,banana));
function apple(input){
        return input*2;
}
function banana(input){
    return input/2;
}


