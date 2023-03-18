"use strict";
function log(...args){
    console.log(this,...args);
}

const boundLog=log.bind("this value",1,2);
const boundLog2=boundLog.bind("this value",3,4);
boundLog2(5,6);//output:this value 1 2 3 4 5 6.

