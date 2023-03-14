function makeCiunter(){
   let count=0;
    const innerFunc=function(){
        count+=1;
        return count;
    }
    return innerFunc;
    }
    const counter1=makeCiunter();
    const counter2=makeCiunter();
console.log(counter1());
