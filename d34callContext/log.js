"use strict";
function a() {
console.log(this);}//undefined
const b = {
dog: 'fido',
log: function() {
console.log(this); }}//undefined
//console.log(this);
a();
b.log();
//let mylog = b.log;
//mylog();
