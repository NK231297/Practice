class BankAccount {
    customerName;
    balance = 0;
    accountNumber;

    static account (){
        return new BankAccount(customerName, balance);
    };

    constructor(customerName, balance = 0){
        this.customerName = customerName;

        this.balance = balance;

        this.accountNumber = Date.now();
    };


};

// let acc1 = new BankAccount(`Nikhil K`, 1000);

// console.log(acc1);

let acc1 = BankAccount.account