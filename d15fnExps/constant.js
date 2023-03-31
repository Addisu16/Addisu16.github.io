const num1=10;
const num2=4;
const name="Addis";

function multiply(){
    return num*num;
}
multiply();

function getScore(){
    const num1=1;
    const num2=2;
    function add(){
        return `${name}scored ${num1+num2}`;
    }

    return add();
}
getScore();