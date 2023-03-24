
import { Account } from "./account.js";

export class SavingsAccount extends Account {
  
    constructor(number,interest) {
       super(number);
        this._interest = interest;

    }
    getInterest() {
        return this._interest;
    
    }
    setInterest(interestRate) {
        this._interest = interestRate;
    
    }
    deposit(amount) {
        super.deposit(amount);


    }
    addInterest() {
        this.deposit(this.getBalance() * (this._interest / 100));
    }
    toString() {
        return "SavingsAccount " + this.getNumber() + ": balance: " + this.getBalance() + " interest: " + this._interest;
    }
    withdraw(amount) {
      
        return this.getBalance() - super.withdraw(amount);

    }
    endOfMonth() {
        this.addInterest();
        return "Interest added SavingsAccount " + this.getNumber() + ": balance: " + this.getBalance() + " interest: " + this._interest;
    }
}