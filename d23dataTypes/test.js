// function sumPoints(players) {
//     let totalPoints = 0;
//     for (let i = 0; i < players.length; i++) {
//         let points = players[i].points;
//         for (let j = 0; j < points.length; j++) {
//             totalPoints += points[j];
//         }
//     }
//     return totalPoints;
// }






// const player1 = { name: "Bob", points: [1, 2, 1] };
// const player2 = { name: "Andre", points: [2, 0, 1] };
// const player3 = { name: "Max", points: [1, 1, 1] };
// const players = [player1, player2, player3];

// console.log("expect 10: ", sumPoints(players));


// const array=[1,5,16,3,108];
// array.forEach(array=>console.log(array));

// // const newArr=[];
// // [1,5,16]


const ss="abc123";
const ss1=ss.split('');
const ss3=ss1.filter(typeof Number);
const ss4=ss3.join('');
console.log(ss4);