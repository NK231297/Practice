class BankAccount {
    customerName;
    balance = 0;
    accountNumber;

    
    constructor(customerName, balance = 0){
        this.customerName = customerName;
        
        this.balance = balance;
        
        this.accountNumber = Date.now();
    };
    
    static account (){
        return new BankAccount(customerName, balance);
    };

};

// let acc1 = new BankAccount(`Nikhil K`, 1000);

// console.log(acc1);

let acc1 = BankAccount.account(`nikhil k`, 1000);

console.log(acc1);