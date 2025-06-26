//Main Logic

class bankAccount{
    customerName;
    balance = 0;
    accountNumebr;

    constructor(customerName, balance = 0){
        
        if( new.target === bankAccount ){
            throw new Error("Invalid Account Type")
        }

        this.customerName = customerName;

        if( typeof balance != `number` || balance < 0 ){
            throw new Error(`Invalid Account Balance`);
        }
        else{
            this.balance = balance;
        }


        this.accountNumebr = Date.now()
    };

    deposit(amount){
        this.balance += amount;
    };

    withdraw(amount){
        this.balance -= amount;
    };
};

let customerName = document.getElementById("name");
let balance = document.getElementById("balance");
let savingsBT = document.getElementById("savings");
let currentBT = document.getElementById("current");

let accounts = [];

savingsBT.addEventListener( `click`, function(e){
    e.preventDefault()

    let account = new bankAccount(customerName.value, +balance.value);

    accounts.push(account);

    console.log(accounts);
} )

currentBT.addEventListener( `click`, function(e){
    e.preventDefault()

    let account = new bankAccount(customerName.value, +balance.value);

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

