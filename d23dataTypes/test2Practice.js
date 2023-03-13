const donation1={funderId:1,amount:100};
const donation2={funderId:2,amount:10};
const donation3={funderId:3,amount:1};
const donation4={funderId:4,amount:5};
const donation5={funderId:5,amount:15};
const day1={donations:[donation1,donation2],date:"03/9/2023"};
const day2={donations:[donation3,donation4,donation5],date:"03/10/2023"};

const dailyRecord=[day1,day2];

//use for loop in a function,dailyTotal to find the total amount donated for a given day

//console.log("expect 21:",dailyTotal(day2.donations));


function dailyTotal(donations){
let totalAmount=0;
for(let i=0;i<donations.length;i++){
    totalAmount+=donations[i].amount
    }

return totalAmount;
}
console.log("expect 21:",dailyTotal(day2.donations));

//use reduce in a function,dailyTotalReduce,to find the total amount donated for a given day.
//console.log("expect 110.",dailyTotalReduce(day1.donations));
function dailyTotalReduce(donations){
    return donations.reduce((total,current)=>total+current.amount,0);
}
console.log("expect 110.",dailyTotalReduce(day1.donations));

//write a function totalDonations using a for loop what will find the total donations across all days in the dailyRecord array.
//console.log("expect 131:",totalDonations(dailyRecord));

function totalDonations(dailyRecord){
        let total = 0;
        for (let i = 0; i < dailyRecord.length; i++) {
          const day = dailyRecord[i];
          const dayTotal = dailyTotal(day.donations);
          total += dayTotal;
        }
        return total;
      }
      function dailyTotall(donations) {
        let total = 0;
        for (let i = 0; i < donations.length; i++) {
          total += donations[i].amount;
        }
        return total;
      }
      
      
console.log("expect 131:",totalDonations(dailyRecord));

//write a function,findBigDonations,that will return an array with all the dates that daily donations exceeded the maximum amount
//goal.Each entry in the array should be an object that contains the date,and the total amount donated.The second parameter for your function should
//be the maximum amount goal.For the example below,the result should return the date and amounts for every donations that had an amount>10.
//in this example those are donation 1 and 2.
//console.log(`expect[{day:"03/9/2023",amount:100}]),
//{day:"03/10/2023",amount:15}:`,findBigDonations(dailyRecord,10));

function findBigDonations(dailyRecord,maxAmount){
    const bigDonations=[];
    for(let i=0;i<dailyRecord.length;i++){
        const day=dailyTotal(day.donations);
        if(dailyTotal>maxAmount){
            bigDonations.push({day:day.date,amount:dailyTotal});
        }

    }
    return bigDonations;
}
console.log("expect[{day:03/9/2023,amount:100}]),{day:03/10/2023,amount:15}:",findBigDonations(dailyRecord,10));

function averageDonations(dailyRecord) {
    const averages = {};
  
    for (let i = 0; i < dailyRecord.length; i++) {
      const day = dailyRecord[i];
      const dayTotal = dailyTotalReduce(day.donations);
      const numDonations = day.donations.length;
      const average = numDonations > 0 ? dayTotal / numDonations : 0;
  
      averages[day.date] = average;
    }
  
    return averages;
  }
  // write a function, sortByAverage,that sorts the daily records by average donation in ascending order.

  function sortByAverage(dailyRecord) {
    const averages = [];
  
    for (let i = 0; i < dailyRecord.length; i++) {
      const day = dailyRecord[i];
      const dayTotal = dailyTotalReduce(day.donations);
      const numDonations = day.donations.length;
      const average = numDonations > 0 ? dayTotal / numDonations : 0;
  
      averages.push({ date: day.date, average: average });
    }
  
    averages.sort((a, b) => a.average - b.average);
  
    const sortedRecord = [];
  
    for (let i = 0; i < averages.length; i++) {
      const { date } = averages[i];
      const day = dailyRecord.find((d) => d.date === date);
  
      sortedRecord.push(day);
    }
  
    return sortedRecord;
  }
  