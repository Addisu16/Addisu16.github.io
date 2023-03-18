
export function askPassword(ok,fail,password) {
    if(password==="rockstar"){
        return ok();
    }else{
        return fail();
    }
}
 export let user = {
    userName:"John",
    password:"rockstar",

    loginOk(){
        return `${this.userName} logged in`;
    },
    loginFail(){
        return `${this.userName} failed to log in`
    },
};

 export function askPassword2(ok, fail, password) {

    if(password==='rockstar'){
        return ok();
    }else{
        return fail();
}
}
 export let user2 = {
    userName:"John",
    password:"rockstar",
    loginOk(){
        return `${this.userName} logged in`;
    },
    loginFail(){
        return `${this.userName} failed to log in`;
    }
};

