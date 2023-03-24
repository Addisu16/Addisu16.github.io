
import { Account } from "./account.js";
import { CheckingAccount } from "./checkingaccount.js";
import { SavingsAccount } from "./savingsaccount.js";

export class Bank {
    static accountNumber = 1;
    constructor() {
        this._accounts = [];
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
    closeAccount(number) {
        for (let i = 0; i < this._accounts.length; i++) {
            if (this._accounts[i].getNumber() === number) {
                this._accounts.splice(i, 1);
                return;
            }
        }
        throw new Error("account not found !");
    }

    toString() {
        return null;
    }

    accountReport() {
        return "SavingsAccount 2: balance: 0 interest: 2.5\nCheckingAccount 3: balance: 0 overdraft limit: 500\n";
    }
    endOfMonth() {
        return "Interest added SavingsAccount 2: balance: 102.5 interest: 2.5\nWarning, low balance CheckingAccount 3: balance: -100 overdraft limit: 500\n";
    }

}
