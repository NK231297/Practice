class BankAccount {
    customerName;
    balance = 0;
    accountNumber;

    static account (){
        console.log(acc1)
    };

    constructor(customerName, balance = 0){
        this.customerName = customerName;

        this.balance = balance;

        this.accountNumber = Date.now();
    };


};

// let acc1 = new BankAccount(`Nikhil K`, 1000);

// console.log(acc1);