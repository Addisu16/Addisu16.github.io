let text="Addisu";
console.log("length method ",text.length);

/* Extrating string methods
1. slice(start,end);
2. substring(start,end);
3. substr(start,length);
*/
let fruits="Apple,Bannana,Kiwi";

console.log("Slice usage 1 ",fruits.slice(6,13));//Bannnan
console.log("Slice usage 2 ",fruits.slice(6));//Bannnana,Kiwi
console.log("slice usage 3 ",fruits.slice(-19,-13));//Apple(if it's negative it slices from end to start)
console.log(fruits.replace("Apple", "Grape"));//"Grape,Bannana,Kiwi"
/*
Note
The replace() method does not change the string it is called on.

The replace() method returns a new string.

The replace() method replaces only the first match

If you want to replace all matches, use a regular expression with the /g flag set. See examples below.
By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
*/
let fruits1="Apple,Apple,Bannana,Kiwi";
console.log(fruits1.replace(/Apple/g, "Grape"));//Grape,Grape,Bannana,Kiwi

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log('concat() ',text3);//Hello World
/*
Note
All string methods return a new string. They don't modify the original string.

Formally said:

Strings are immutable: Strings cannot be changed, only replaced.*/
let text4 = "      Hello World!      ";
console.log("trim usage",text4.trim());//Hello world replaces the space
console.log("trimStart() usage ",text4.trimStart());//note:The trim start only removes the space from the start
console.log("trimEnd() usage ",text4.trimEnd());//only removes space from the end
/*If you want to work with a string as an array, you can convert it to an array.
by usind split() Method
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
If the separator is omitted, the returned array will contain the whole string in index [0].

If the separator is "", the returned array will be an array of single characters:
/*
JavaScript Search Methods
String indexOf()//both index of method accepts when the search starts as an index ex text.indexOf("java",0);
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()
The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).
*/
let text5 = "The rain in SPAIN stays mainly in the plain";
console.log("match usage" ,text5.match(/ain/gi));// [ 'ain', 'AIN', 'ain', 'ain' ]
/*
The includes() method returns true if a string contains a specified value.

Otherwise it returns false.*/
let text6 = "Hello world, welcome to the universe.";
console.log("Text includes method" ,text6.includes("world"));//true
/*
The startsWith() method returns true if a string begins with a specified value.

Otherwise it returns false:
*/
let text7 = "Hello world, welcome to the universe.";
console.log("starts with usage" ,text7.startsWith("Hello"));//true