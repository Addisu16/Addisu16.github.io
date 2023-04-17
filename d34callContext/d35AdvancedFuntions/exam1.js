function compress(args){
    let newArr=[];
    for(const arg of args){
      
        newArr.push(arg.x+arg.y);

    }
    return newArr;
}

const xy=[{x:10,y:20},{x:16,y:4}];
console.log(compress(xy));