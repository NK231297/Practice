//This is first Draft where our Methods like: Deposit and Withdraw loads with every account which is memory consuming and it is not necessary to load with every account.

// Main Logic

function BankAccount (CustomerName, Balance = 0){
    this.CustomerName = CustomerName;
    this.Balance = Balance;
    this.AccountNumber = Date.now();

    this.Deposit = function(amount){
        this.Balance += amount;
    };

    this.Withdraw = function(amount){
        this.Balance -= amount;
    };
};

// Account Creation Logic

let NameInput       = document.getElementById("name");
let BalanceInput    = document.getElementById("balance");
let Createbt        = document.getElementById("submit");

let Accounts = [];

Createbt.addEventListener( `click`, (e)=>{
    e.preventDefault();

    let Account = new BankAccount(NameInput.value, +BalanceInput.value);

    Accounts.push(Account);

    console.log(Accounts);
} );

// Deposit Logic

let AcNoInput       = document.getElementById("accountnumber");
let AmountInput     = document.getElementById("amount");
let Depositbt       = document.getElementById("deposit");


Depositbt.addEventListener( `click`, (e)=>{
    e.preventDefault();

    let Account = Accounts.find( (Account)=> +Account.AccountNumber === +AcNoInput.value )

    Account.Deposit(+AmountInput.value);

    console.log(Accounts);
} );

//Withdraw Logic

let Withdrawbt       = document.getElementById("withdraw");


Withdrawbt.addEventListener( `click`, (e)=>{
    e.preventDefault();

    let Account = Accounts.find( (Account)=> +Account.AccountNumber === +AcNoInput.value )

    Account.Withdraw(+AmountInput.value);

    console.log(Accounts);
} );