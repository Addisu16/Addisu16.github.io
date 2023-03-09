let car={
    make:"Ford",
    model:"Mustag",
    year:2002,

    sayHi:function(){
         console.log(`The company ${this.make}} is model ${this.model} and year ${this.year}`);
    }
};


for(const key in car){
    console.log(key+" "+car[key]);
}




for(const key1 in car){
    if(car.hasOwnProperty(key1)){
        console.log(key1+""+car[key1])
    }
}