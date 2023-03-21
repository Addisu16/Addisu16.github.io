
import { Account } from "./account.js";
import { CheckingAccount } from "./checkingaccount.js";
import { SavingsAccount } from "./savingsaccount.js";

export class Bank {
    static accountNumber = 1;
    constructor() {
        this._accounts = []
    }
    addAccount() {
        const number = Bank.accountNumber;
        Bank.accountNumber++;

        const newAccount = new Account(number);
        this._accounts.push(newAccount);

    }
    addSavingsAccount(interestRate) {
        const newSavingAccount = new SavingsAccount(this._accounts.length + 1, interestRate);
        this._accounts.push(newSavingAccount);


    }
    addCheckingAccount(overdraft) {
        const newCheckingAccount = new CheckingAccount(this._accounts.length + 1, overdraft);
        this._accounts.push(newCheckingAccount);
    }
    // closeAccount(number){
    //     number.find((number)=>)




    toString() {
        return;
    }



}
