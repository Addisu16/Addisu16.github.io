//First, let's define our bank account object literal with a balance
// property and two methods for crediting and debiting the account:

const bankAccount={
    balance:0,
    credit:function(amount){
        this.balance+=amount;
        console.log(`Credited ${amount}.New Balance is ${this.balance}.`);
    },
    debit:function(amount){
        if(amount>this.balance){
          console.log(`Debit amount exceeds balance.current balance is ${this.balance}`);  
        }else{
            this.balance-=amount;
            console.log(`Debited ${amount}.new balance is ${this.balance}`);
        }
    }
};

//Next, we can create an instance of this bank account object literal and perform some credit and debit operations on it:

const myBankAccount=Object.create(bankAccount);
myBankAccount.credit(1000);
myBankAccount.debit(500);
myBankAccount.debit(700);