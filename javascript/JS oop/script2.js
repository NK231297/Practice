//In this version we will use "Prototype" so our methods don't get inserted in every account and through this methode all accounts will share and use single methode and this will save our memory

//Main Function

function BankAccount (CustomerName, Balance = 0){
    this.CustomerName = CustomerName;

    this.Balance = Balance;

    this.AccountNumber = Date.now();
};

BankAccount.prototype.Deposit = function(amount){
    this.Balance += amount;
};

BankAccount.prototype.Withdraw = function(amount){
    this.Balance -= amount;
};

//Account Creation Logic

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

let Withdrawbt = document.getElementById("withdraw");

Withdrawbt.addEventListener(`click`, (e)=>{
    e.preventDefault();

    let Account = Accounts.find( (Account)=> +Account.AccountNumber === +AcNoInput.value )

    Account.Withdraw(+AmountInput.value);

    console.log(Accounts);
});