class BankAccount {
    customerName;
    balance = 0;
    accountNumber;

    
    constructor(customerName, balance = 0){
        this.customerName = customerName;
        
        this.balance = balance;
        
        this.accountNumber = Date.now();
    };
    
    static account (customerName, balance){
        return new BankAccount(customerName, balance);
    };

};

// let acc1 = new BankAccount(`Nikhil K`, 1000);

// console.log(acc1);

let accounts = [];

accounts.push(BankAccount.account(`Vibhuti`, 1500))
accounts.push(BankAccount.account(`Manmohan`, 2000))
accounts.push(BankAccount.account(`Happu`, 2000))
accounts.push(BankAccount.account(`Prem`, 2000))
accounts.push(BankAccount.account(`Tika`, 100))
accounts.push(BankAccount.account(`Malkhan`, 150))
accounts.push(BankAccount.account(`Tillu`, 250))
accounts.push(BankAccount.account(`Master`, 650))
accounts.push(BankAccount.account(`Doctor`, 250))
accounts.push(BankAccount.account(`Chacha`, 2500))

console.log(accounts)