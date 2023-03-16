/*Write a function, flatten, that returns an array that has objects of the form {date: "...", id: 1, amt: 15} for all donations.
flatten(dailyRecord) returns: [
{ date: '01/10/2022', id: 1, amount: 100 },
{ date: '01/10/2022', id: 2, amount: 10 },
{ date: '01/11/2022', id: 3, amount: 1 },
{ date: '01/11/2022', id: 2, amount: 5 },
{ date: '01/11/2022', id: 1, amount: 15 }
]
*/

const donation1 = { funderId: 1, amount: 100 };
const donation2 = { funderId: 2, amount: 10 };
const donation3 = { funderId: 3, amount: 1 };
const donation4 = { funderId: 2, amount: 5 };
const donation5 = { funderId: 1, amount: 15 };
const day1 = { donations: [donation1, donation2], date: "01/10/2022", };
const day2 = { donations: [donation3, donation4, donation5], date: "01/11/2022", };

const dailyRecord = [day1, day2];

console.log(flatten(dailyRecord));
/**
 * 
 * @param {Array} dailyRecord of the day donations
 * @returns {Array}array of objects by date,id and amount
 */
function flatten(dailyRecord) {
    const eachDayRecord = [];
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
  

  function makeCounter() { 

    let count = 0;   
  
    return function(counter=10) { 

        let count1=count;
        count=count+counter;
        if(counter>1){
            return "Warning: "+count;
        }
        return count1; 
    };
  
  }

  let mycount=makeCounter();
  console.log(mycount(5));
  console.log(mycount());
 

  /**
   * 
   * @param {Array} teamStats array of player groups
   * @returns {Array} array of objects
   */
  function findHighScores(teamStats){
    let highScore=[];
    let scores=0;
    for(const score of teamStats){
        for(const highpoint of score.points){
            if(highpoint>scores){
                scores=highpoint;
            }
        }
        highScore.push({jersy:player.jersy,high:highpoint});

    }
    return highScore;

  }