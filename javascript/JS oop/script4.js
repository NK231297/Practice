class BankAccount {
    customerName;
    balance;
    accountNumber;
    // accountType;

    constructor (customerName, balance = 0, accountType){
        this.customerName = customerName;

        this.balance = balance;

        this.accountNumber = Date.now();

        // this.accountType = accountType;
    };

    Deposit(amount){
        this.balance += amount;
    };

    Withdraw(amount){
        this.balance -= amount;
    };


};

class savingsAccount extends BankAccount {

    transactionLimit = 10000;

    accountType = "Savings Account"

    constructor(customerName, balance = 0){
        super(customerName, balance)
    };

    takePersonalLoan (amount){
        console.log(`Taking personal Loan` + amount);
    };
};

class currentAccount extends BankAccount {
    transactionLimit = 50000;

    accountType = "Current Account"

    constructor(customerName, balance){
        super(customerName, balance);
    };

    takeBussinessLoan(amount){
        console.log(`Taking Bussiness Loan` + amount);
    };
};


let NameInput       = document.getElementById("name");
let BalanceInput    = document.getElementById("balance");
let savingsAC       = document.getElementById("sa");
let currentAC       = document.getElementById("ca");

let Accounts = [];

savingsAC.addEventListener(`click`, (e)=>{
    e.preventDefault();

    let Account = new savingsAccount(NameInput.value, +BalanceInput.value);

    Accounts.push(Account);

    console.log(Accounts);
});
currentAC.addEventListener(`click`, (e)=>{
    e.preventDefault();

    let Account = new currentAccount(NameInput.value, +BalanceInput.value);

    Accounts.push(Account);

    console.log(Accounts);
});

let AcNoInput       = document.getElementById("accountnumber");
let AmountInput     = document.getElementById("amount");
let Depositbt       = document.getElementById("deposit");

Depositbt.addEventListener(`click`, (e)=>{
    e.preventDefault();

    let Account = Accounts.find( (Account)=> +Account.accountNumber === +AcNoInput.value );

    Account.Deposit(+AmountInput.value)

    console.log(Accounts);
});

let Withdrawbt       = document.getElementById("withdraw");

Withdrawbt.addEventListener(`click`, (e)=>{
    e.preventDefault();

    let Account = Accounts.find( (Account)=> +Account.accountNumber === +AcNoInput.value );

    Account.Withdraw(+AmountInput.value)

    console.log(Accounts);
});