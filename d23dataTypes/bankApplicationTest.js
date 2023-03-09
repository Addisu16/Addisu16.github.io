
import {bank} from"./bankApplication.js";

describe("Test the bank application",function(){
    it("create account ",function(){
        assert.deepStrictEqual(createAccount("Addisu Alemayehu",500),"Addisu Alemayehu",500);
    });
    it("expected deposit 500",function(){
        assert.deepStrictEqual(deposit(500),500);
    });
    it("expected withdrwal,300 ",function(){
        assert.deepStrictEqual(withdraw(200),300);
    })
})