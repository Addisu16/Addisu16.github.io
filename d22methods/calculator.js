"use strict";

export const Calculator = {
    a:0,
    b:0,
    setValues: function(aValue,bValue){
      this.a=aValue;
      this.b=bValue;
    },  

sum:function(){
    return this.aValue+this.bValue;// implement this
},
mul:function(){
    return this.aValue*this.bValue;
}
};
