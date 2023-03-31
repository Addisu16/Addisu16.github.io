
/*Be sure to use meaningful variable names and write JSdoc comments for 
findTotalScores and any helper functions such as findTotalPlayerPoints.
Try to use map and reduce in your functions as appropriate. */


export function findTotalPlayerPoints(player) {
    let totalScore=0;
    for(const stat of player.stats){
        totalScore+=stat.points;
    }
    return totalScore;
}
export function findTotalScores(players) {
    let totalpts=[];
    for(const player of players){
        totalpts.push({jersey: player.jersey, total: findTotalPlayerPoints(player)});  
    }
    return totalpts;
}