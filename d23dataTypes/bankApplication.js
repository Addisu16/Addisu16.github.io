 export let bank={
    accounts:[],
    createAccount:function(name,balance){
        let account={
            name:name,
            balance:balance,
            deposit:function(amount){
                this.balance+=amount;
                console.log(`Deposit successful !Your balance is now ${this.balance}.`);
            },
          withdraw:function(amount){
                if(this.balance<amount){
                    console.log("Insufficient Transaction");
                }else{
                    this.balance-=amount;
                    console.log(`withdraw successful ! your balance is now ${this.balance} `);
                }
            },
            checkBalance:function(){
               return this.balance;
            }

        };

        this.accounts.push(account);
        console.log(`Account created for ${name}`);

    },
    transfer:function(from,to,amount){
        let fromAccount=this.accounts.find(account=>account.name===from);
        let toAccount=this.accounts.find(account=>account.name===to);
        if(!fromAccount||!toAccount){
            console.log("Account Not Found !");
        }else if(fromAccount.balance<amount){
            console.log("Insufficient funds");

        }else{
            fromAccount.withdraw(amount);
            toAccount.deposit(amount);
            console.log(`Transfer of ${amount} from ${from} to ${to} was successfull.`);
        }
    }
}
//creating accounts

bank.createAccount("Addisu Alemayehu",200);
bank.createAccount("Alemayehu Belay",800);
bank.transfer("Addisu Alemayehu","Alemayehu Belay",100);