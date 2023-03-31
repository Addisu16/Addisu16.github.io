let head = {
    glasses: 1
    };
    let table = {
    pen: 3
    };
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__:head
   
    };
let pockets = {
    money: 2000,
    __proto__:table
   
    };
   
    console.log("expect 3: ", pockets.pen);
    console.log("expect 1: ", bed.glasses);
    function User(firstname, lastname, birthDate) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthDate = birthDate;
        }
        let user1 = {
           __proto__:User
        };

        let user2={
            name:"  John",
            lastname:"sMITH",
            birthDate:"2000-10-01",
            __proto__:User
        };
        function getFullName() { return this.firstname + ' ' + this.lastname;}
        function getAge() {return new Date().getFullYear() - this.birthDate.getFullYear();}