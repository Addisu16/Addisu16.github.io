
/**
 * 
 * @param {*} str 
 */
export function ucFirst(str) {
  if(str==="")
    return "";
 if(str!==" "){
return str[0].toUpperCase()+str.slice(1);
}
}


  /**
   * 
   * @param {*} str 
   */
  export function checkSpam(str) {
    const toUpper=str.toUpperCase();
    if(toUpper.includes("BUY VIAGRA NOW")||toUpper.includes("FREE XXXXX")){
      return true;
    }
    return false;
 
  }

/**
 * 
 * @param {*} str 
 * @param {*} maxlength 
 */
export function truncate(str, maxlength) {
  if(str.length>maxlength){
    return str.slice(0,maxlength-1)+"…";
  }
  return str;


  }




/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
export function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
}


export function camelize(str) {
  return str.split("-").map((word,index)=>index==0?
  word:word[0].toUpperCase()+word.slice(1)).join("");

  }


export function extractCurrencyValue(str){
  return +str.slice(1);
} 
