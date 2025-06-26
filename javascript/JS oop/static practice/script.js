//Main Logic

class bankAccount{
    customerName;
    balance = 0;
    accountNumber;

    constructor(customerName, balance){
        this.customerName = customerName;

        if( typeof balance != `number` || balance < 0 ){
            throw new Error("Input Balance in Invalid")
        }

        this.balance = balance;

        this.accountNumber = Date.now();
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
let savings = document.getElementById("savings");
let current = document.getElementById("current");

let accounts = [];

savings.addEventListener(`click`, function(e){
    e.preventDefault();

    let acc = new bankAccount(customerName.value, balance.value);

    accounts.push(acc);

    console.log(accounts);
});

current.addEventListener(`click`, function(e){
    e.preventDefault();

    let acc = new bankAccount(customerName.value, balance.value);

    accounts.push(acc);

    console.log(accounts);
});

let acc2 = new bankAccount(`hello ji`, `balance`)
// acc2.balance = `hello ji`
console.log(acc2)

