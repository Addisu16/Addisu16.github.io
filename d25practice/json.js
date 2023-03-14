const john={
    name:"John",
    surname:"Smith",
    isAdmin:false,
    birthday:{"year":2000,"month":"Febraury","day":3};
    friends:[0,1,2,3];
};
const johnJSON=JSON.stringify(john);
console.log("johnJSON: ",johnJSON);


const johnClone=JSON.parse(johnJSON);
console.log("johnClone: ",johnClone);
console.log("equal??: ",johnClone===johnJSON);
