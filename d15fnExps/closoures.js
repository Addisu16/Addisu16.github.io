function makeCounter(){
    let count=0;
    function innerFunc(){
        return count=count+1;
    }
    return innerFunc();
}

let counter=makeCounter();
console.log(counter);
console.log(counter);

// function a() {
//     console.log(x); // consult Global for x and print 20 from Global
//     }
//     function b() {
//     const x = 10;
//     a(); // consult Global for a
//     }
//     const x = 20;
//     b();
    // function b() {
    //     function a() {
    //     console.log(x);
    //     }
    //     let x = 10;
    //     a();
    //     }
    //     const x = 20;
    //     b(); 

        // function b() {
        //     function a() {
        //     console.log(x);
        //     }
        //     a();
        //     }
        //     const x = 20;
        //     b();

            function makeYounger(age) {
                function b() { 
                    console.log("Original age is :" + age); 
                }
                b();
                return(function() { 
                    return age / 2;
                }); 
            }
            var displayAge = makeYounger(20); 
            console.log(displayAge());

//  let name = "John";
// function sayHi() {
// console.log("Hi, " + name);
// }
// name = "Pete";
// sayHi(); // what will it show: "John" or "Pete"?



function makeWorker() {
    let name = "John";
    return function() {
    console.log(name);
    };
    }
    //name = "Pete";
    // create a function
    let work = makeWorker();
    // call it
    console.log(work());
    

    // function sayHi() {
    //     alert("Hi");
    //     }
    //     alert(sayHi.name); // sayHi