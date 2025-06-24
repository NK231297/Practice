//In this version we will use "Classes" which works like "Prototype" but classes organise the code not just like normal and prototype version in which our extra functionalities like deposit and withdraw are redeclaring every functionality or write outside of main function like in prototype. This code looks like all in one plus saving memory also.

//Main Logic

class BankAccount {
    CustomerName;
    Balance;
    AccountNumber;

    constructor(CustomerName, Balance = 0){
        this.CustomerName = CustomerName;

        this.Balance = Balance;

        this.AccountNumber = Date.now();
    };

    Deposit(amount){
        this.Balance += amount;
    };

    Withdraw(amount){
        this.Balance -= amount;
    };
};


//Account Creation Logic

let NameInput       = document.getElementById("name");
let BalanceInput    = document.getElementById("balance");
let Createbt        = document.getElementById("submit");

let Accounts = [];

Createbt.addEventListener(`click`, (e)=>{
    e.preventDefault();

    let Account = new BankAccount(NameInput.value, +BalanceInput.value);

    Accounts.push(Account);

    console.log(Accounts);
});

//Deposit Logic

let AcNoInput       = document.getElementById("accountnumber");
let AmountInput     = document.getElementById("amount");
let Depositbt       = document.getElementById("deposit");

Depositbt.addEventListener(`click`, (e)=>{
    e.preventDefault();

    let Account = Accounts.find( (Account)=> +Account.AccountNumber === +AcNoInput.value )

    Account.Deposit(+AmountInput.value);

    console.log(Accounts);
});

//Withdraw Logic

let Withdrawbt       = document.getElementById("withdraw");

Withdrawbt.addEventListener(`click`, (e)=>{
    e.preventDefault();

    let Account = Accounts.find( (Account)=> +Account.AccountNumber === +AcNoInput.value )

    Account.Withdraw(+AmountInput.value);

    console.log(Accounts);
});
