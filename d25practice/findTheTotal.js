// /*Write a function, flatten, that returns an array that has objects of the form {date: "...", id: 1, amt: 15} for all donations.
// flatten(dailyRecord) returns: [
// { date: '01/10/2022', id: 1, amount: 100 },
// { date: '01/10/2022', id: 2, amount: 10 },
// { date: '01/11/2022', id: 3, amount: 1 },
// { date: '01/11/2022', id: 2, amount: 5 },
// { date: '01/11/2022', id: 1, amount: 15 }
// ]
// */

// const donation1 = { funderId: 1, amount: 100 };
// const donation2 = { funderId: 2, amount: 10 };
// const donation3 = { funderId: 3, amount: 1 };
// const donation4 = { funderId: 2, amount: 5 };
// const donation5 = { funderId: 1, amount: 15 };
// const day1 = { donations: [donation1, donation2], date: "01/10/2022", };
// const day2 = { donations: [donation3, donation4, donation5], date: "01/11/2022", };

// const dailyRecord = [day1, day2];

// console.log(flatten(dailyRecord));
// /**
//  * 
//  * @param {Array} dailyRecord of the day donations
//  * @returns {Array}array of objects by date,id and amount
//  */
// function flatten(dailyRecord) {
//     const eachDayRecord = [];
//     for (const day of dailyRecord) {
//       for (const donation of day.donations) {
//         eachDayRecord.push({
//           date: day.date,
//           id: donation.funderId,
//           amount: donation.amount,
//         });
//       }
//     }
//     return eachDayRecord;
//   }
  

//   function makeCounter() { 

//     let count = 0;   
  
//     return function(counter=10) { 

//         let count1=count;
//         count=count+counter;
//         if(counter>1){
//             return "Warning: "+count;
//         }
//         return count1; 
//     };
  
//   }

//   let mycount=makeCounter();
//   console.log(mycount(5));
//   console.log(mycount());
 




//   const player1={jersy:8,stats:[{game:1,points:6},{game:2,points:7}]};
//   const player2={jersy:12,stats:[{game:1,points:16},{game:2,points:14}]};
//   const player3={jersy:6,stats:[{game:1,points:10},{game:2,points:10}]};
//   const teamStats=[player1,player2,player3];
//   /**
//    * 
//    * @param {Array} teamStats array of player groups
//    * @returns {Array} array of objects
//    */
//   function findHighScores(teamStats){
//     let highScore=[];
   
//     for(let i=0;i<teamStats.length;i++){
//       let scores=0;
//         for(let j=0;j<teamStats[i].stats.length;j++){
//             if(teamStats[i].stats[j].points>scores){
//                 scores=teamStats[i].stats[j].points;
//             }
        
//         }
//         highScore.push({jersy:teamStats[i].jersy,high:scores});

//     }
//     return highScore;

//   }
//   console.log("expect [{jersey:8,high:7},{jersey:12,high:16},{jersey:6,high:10}]:",findHighScores(teamStats));
//   function orderHighScore(arr){
//     let highScore=findHighScores(arr);
//     highScore.sort(highScoreComparator);
//     return highScore;
//   }
//   function highScoreComparator(a,b){
//     return b.high-a.high;
//   }
//   console.log("expect: [{jersey:12,high:16},{jersey:6,high:10},{jersey:8,high:7}]",orderHighScore(teamStats));





//   function cat(abc){
//     if(!abc){
//       abc=console.log("abc");//undefined
//       return abc;
//     }
//     //const xyz=console.log("xyz");//nothing
//     //return xyz;
//   }
//  console.log(cat());//abc


 function User(name){
  console.log("1:" , this);
  this.name = name;
  //console.log("2:" , this);
  }
  tina = {};
  const thisUser = User.bind(tina);
  thisUser("Rujuan");
  thisUser("Tina");
  //console.log("3: ", tina);
  