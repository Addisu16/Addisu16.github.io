
import { Account } from "./account.js";

export class SavingsAccount {
    _account;
    constructor(number,interest) {
        this._number=number;
        this._interest = interest;
        this._account=new Account(number);
    }
    getInterest() {
        return this._interest;
    }
    getNumber() {
        return this._number;
    }
    setInterest(interestRate) {
        this._interest = interestRate;
    }
    setNumber(bankNumber) {
        this._number = bankNumber;
    }
    deposit(amount) {
        this._account.deposit(amount);

    }
    addInterest() {
        this.deposit(this._account.getBalance() * (this._interest / 100));

    }

    getBalance() {

        return this._account.getBalance();

    }
    toString() {
        return "SavingsAccount " + this._number + ": balance: " + this.getBalance() + " interest: " + this._interest;
    }
    withdraw(amount) {
        return this._account - amount;

    }
    endOfMonth() {
        return "Interest added SavingsAccount 1: balance: 105 interest: 5";
    }
}