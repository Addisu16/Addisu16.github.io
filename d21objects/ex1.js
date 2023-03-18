let user={
name:"john",
surname:"smith",
};
user.name="Pete";
console.log(user.name);
//delete user.surname;//deletes the surname from the proprty;
for(const key in user){
    console.log(key+" "+user.key);//name:undefined//surname: undefined
}

for(const key in user){
    console.log(key+" "+user[key]);//usrename:pete,surname:smith
}