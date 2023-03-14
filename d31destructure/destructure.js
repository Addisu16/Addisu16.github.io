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







/*Write a function, flatten, that returns an array that has objects of the form {date: "...", id: 1, amt: 15} for all donations.
flatten(dailyRecord) returns: [
{ date: '01/10/2022', id: 1, amount: 100 },
{ date: '01/10/2022', id: 2, amount: 10 },
{ date: '01/11/2022', id: 3, amount: 1 },
{ date: '01/11/2022', id: 2, amount: 5 },
{ date: '01/11/2022', id: 1, amount: 15 }
]

const donation1 = { funderId: 1, amount: 100 };
const donation2 = { funderId: 2, amount: 10 };
const donation3 = { funderId: 3, amount: 1 };
const donation4 = { funderId: 2, amount: 5 };
const donation5 = { funderId: 1, amount: 15 };
const day1 = { donations: [donation1, donation2], date: "01/10/2022", };
const day2 = { donations: [donation3, donation4, donation5], date: "01/11/2022", };

const dailyRecord = [day1, day2];
*/
/**
 * 
 * @param {Array} dailyRecord of the day donations
 * @returns {Array}array of objects by date,id and amount
 */
function flatten(dailyRecord) {
    const eachDayRecord = {};
    for (const day of dailyRecord) {
      for (const donation of day.donations) {
        eachDayRecord.push({
          date: day.date,
          id: donation.funderId,
          amount: donation.amount,
        });
      }
    }
    return eachDayRecord;
  }
  

