"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//add all of your function names here that you need for the node mocha tests

/**
 * @param {number} initialValue is starting amount
   @param {number} increments is amount to add when accumulate called
 * @returns {Accumulator} constructor function
 */
export function Accumulator(initialValue,increment){
this.currentValue=initialValue;
this.increment=increment;
this.accumulate = function(){
   this.currentValue += this.increment;
};
this.report = function(){
    return this.currentValue;
   };


//implement this

}

/**
 * @returns {Calculator} this is a constructor function
 */
 export function Calculator() {
    //implement this
    this.a = 0;
    this.b = 0;
    this.setValues = function(aVal, bVal){
      this.a = aVal;
      this.b = bVal;
    };
    this.sum = function() {
      return this.a + this.b;
   };
    this.mul = function(){
      return this.a * this.b;
   };
     }