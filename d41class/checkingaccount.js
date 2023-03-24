
import { Account } from "./account.js";

export class CheckingAccount extends Account{
 
    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
        
    }
    getOverdraft() {
        return this._overdraft;
    }
    setOverdraft(amount) {
        this._overdraft = amount;
    }
    withdraw(amount) {
        if ((this.getBalance() - amount) < (-this.getOverdraft())) {
            throw Error("Insufficient funds, cannot withdraw beyond overdraft limit");
        } else {
            this.setBalance(this.getBalance() - amount);
        }
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new RangeError("Deposit amount has to be greater than zero");
        }
        super.deposit(amount);
    }

    toString() {
        return `CheckingAccount ${this.getNumber()}: balance: ${this.getBalance()} overdraft limit: ${this._overdraft}`;
    }
    endOfMonth() {
           
     if((this.getBalance())>0){
            return "";
     }
            return `Warning, low balance CheckingAccount ${this.getNumber()}: balance: ${this.getBalance()} overdraft limit: ${this._overdraft}`;
       }
 
}

    










