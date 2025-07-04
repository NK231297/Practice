//Main Logic

class bankAccount{
    customerName;
    #balance = 0;
    accountNumebr;

    static id = 1;
    
    constructor(customerName, balance = 0){

        this.id = "NK" + bankAccount.id++

        if( new.target === bankAccount ){
            throw new Error("Invalid Account Type")
        }

        this.customerName = customerName;

        if( typeof balance != `number` || balance < 0 ){
            throw new Error(`Invalid Account Balance`);
        }
        else{
            this.#balance = balance;
        }


        this.accountNumebr = Date.now()
    };

    deposit(amount){
        this.#balance += amount;
    };

    withdraw(amount){
        this.#balance -= amount;
    };

    set balance(amount){

        if( typeof amount != `number` || amount < 0 ){
            throw new Error("Balance Input is invalid");
        }
        else{

            this.#balance = amount;
        }

    };

    get balance(){
        return this.#balance;
    };

    static createAccount(type, customerName, balance){
        if( type === `savings` ){
            return new savingsAC(customerName, balance)
        }
        else if( type === `current` ){
            return new currentAC(customerName, balance)
        }
        else{
            return `invalid account`
        }
    }

    static sortByBalance(a, b){
        return a.balance - b.balance
    }
};

class savingsAC extends bankAccount{
    accountType = `Savings Account`
    transactionLimit = 10000;
    constructor(customerName, balance){
        super(customerName, balance)
    }
}

class currentAC extends bankAccount{
    accountType = `Current Account`
    transactionType = 50000;

    constructor(customerName, balance){
        super(customerName, balance)
    }
}

let customerName = document.getElementById("name");
let balance = document.getElementById("balance");
let savingsBT = document.getElementById("savings");
let currentBT = document.getElementById("current");

let accounts = [];

savingsBT.addEventListener( `click`, function(e){
    e.preventDefault()
    
    let account = bankAccount.createAccount(`savings`, customerName.value, +balance.value);
    
    accounts.push(account);
    
    console.log(accounts);
} )

currentBT.addEventListener( `click`, function(e){
    e.preventDefault()
    
    let account = bankAccount.createAccount(`current`, customerName.value, +balance.value);
    
    accounts.push(account);
    
    console.log(accounts);
} )

let accNo = document.getElementById(`account`);
let amount = document.getElementById(`amount`);
let depositBT = document.getElementById(`deposit`);
let withdrawBT = document.getElementById(`withdraw`);

depositBT.addEventListener( `click`, function(e){
    e.preventDefault()
    
    let account = accounts.find( (account)=>account.accountNumebr === +accNo.value )
    
    account.deposit(+amount.value);
    
    console.log(accounts);
} )

withdrawBT.addEventListener( `click`, function(e){
    e.preventDefault()
    
    let account = accounts.find( (account)=>account.accountNumebr === +accNo.value )
    
    account.withdraw(+amount.value);
    
    console.log(accounts);
} )

let sortBT = document.getElementById(`sort`);

sortBT.addEventListener( `click`, function(e){
    e.preventDefault();

    accounts.sort(bankAccount.sortByBalance);

    console.log(accounts);
} )