//Main Logic

class bankAccount{
    customerName;
    #balance = 0;
    accountNumber;

    constructor(customerName, balance = 0){
        this.customerName = customerName;

        if( typeof balance != `number` || balance < 0 ){
            console.log(new Error("Input Balance in Invalid Balance Not updated"))
        }else{
            this.#balance = balance;

        }


        this.accountNumber = Date.now();
    };

    deposit(amount){
        this.#balance += amount;
    };

    withdraw(amount){
        this.#balance -= amount;
    };
};

let customerName = document.getElementById("name");
let balance = document.getElementById("balance");
let savings = document.getElementById("savings");
let current = document.getElementById("current");

let accounts = [];

savings.addEventListener(`click`, function(e){
    e.preventDefault();

    let acc = new bankAccount(customerName.value, +balance.value);

    accounts.push(acc);

    console.log(accounts);
});

current.addEventListener(`click`, function(e){
    e.preventDefault();

    let acc = new bankAccount(customerName.value, +balance.value);

    accounts.push(acc);

    console.log(accounts);
});

let accNo = document.getElementById(`account`);
let amount = document.getElementById(`amount`);
let depositBT = document.getElementById(`deposit`);
let withdrawBT = document.getElementById(`withdraw`);

depositBT.addEventListener( `click`, function(e){
    e.preventDefault();
    
    let account = accounts.find( (account)=> +account.accountNumber === +accNo.value)

    account.deposit(+amount.value);

    console.log(accounts);
} )

withdrawBT.addEventListener( `click`, function(e){
    e.preventDefault();
    
    let account = accounts.find( (account)=> +account.accountNumber === +accNo.value)

    account.withdraw(+amount.value);

    console.log(accounts);
} )

