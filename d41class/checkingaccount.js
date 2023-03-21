
import { Account } from "./account.js";

export class CheckingAccount {
    _account;
    constructor(number, overdraft) {
        this._number = number;
        this._overdraft = overdraft;
        this._account = new Account(number);
    }
    getOverdraft() {
        return this._overdraft;
    }
    setOverdraft(amount) {
        this._overdraft = amount;
    }
    getNumber() {
        return this._number;
    }
    setNumber(accountNumber) {
        this._number = accountNumber;
    }
    withdraw(amount) {

        if ((this.getBalance() - amount) < (-this.getOverdraft())) {
            throw Error("you can't withdrwal ");
        } else {
            this._account.setBalance(this.getBalance() - amount);
        }
    }
    getBalance() {
        return this._account.getBalance();
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new RangeError("Deposit amount has to be greater than zero");
        }
        this._account.getBalance() += amount;
    }

    toString() {
        return `CheckingAccount ${this._number}: balance: ${this.getBalance()} overdraft limit: ${this._overdraft}`;
    }
    endOfMonth() {
        if (this._account.getBalance()<0) {
            return `Warning, low balance CheckingAccount ${this._number}: balance: ${this.getBalance()} overdraft limit: ${this._overdraft}`;
        }
        return " ";
        }
    }
    










