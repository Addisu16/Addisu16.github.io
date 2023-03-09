/*function checkNumber(number1,number2){
    let sum=number1+number2;
    if(sum===100 ||number1===100||number2===100){
        return true;
    }
    return false;
}

console.log(checkNumber(50,50));

*/

const isEqualTo100=function(a,b)=>{
        a+b===100||a===100||b===100;
}
console.log(isEqualTo100(50,50));