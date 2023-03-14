//"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { topSalary }; //add all of your function names here that you need for the node mocha tests


export function topSalary(salaries) {

    let json = JSON.stringify(salaries);//convert Object in to JSON
    salaries = JSON.parse(json);//convert JSON back to object
    let maxKey = null;
    let maxValue = 0;
    for (const [key, value] of Object.entries(salaries)) {
        if (value > maxValue) {
            maxKey = key;
            maxValue = salaries[key];
        }
    }
    return maxKey;

};


