
//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj){
    for(key in obj){
        return false;//if there is one property it returns false;
    }
    return true;
    }

/*    We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.*/
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  let sum=0;
for(const key in salaries){
  sum+=salaries[key];
}
console.log(sum);

//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu={
    width:200,
    height:300,
    title:"My menu"
};
let product=1;
for(let key in menu){
    if(typeof key[menu]!==NaN){
        product=key[menu]*2;
    }
}
console.log(product);