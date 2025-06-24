class BankAccount {
    customerName;
    balance = 0;
    accountNumber;
    static id = 1;
    
    
    constructor(customerName, balance = 0, age){
        this.customerName = customerName;
        
        this.balance = balance;
        
        this.accountNumber = Date.now();

        this.id = BankAccount.id++;

        this.age = age;
    };
    
    static account (customerName, balance, age){
        return new BankAccount(customerName, balance, age);
    };

    static sortByBalance (a, b){
        return a.balance - b.balance
    };

};

// let acc1 = new BankAccount(`Nikhil K`, 1000);

// console.log(acc1);

let accounts = [];

accounts.push(BankAccount.account(`Vibhuti`, 1500, 30))
accounts.push(BankAccount.account(`Manmohan`, 2000, 32))
accounts.push(BankAccount.account(`Happu`, 2000, 35))
accounts.push(BankAccount.account(`Prem`, 2000, 31))
accounts.push(BankAccount.account(`Tika`, 100, 29))
accounts.push(BankAccount.account(`Malkhan`, 150, 28))
accounts.push(BankAccount.account(`Tillu`, 250, 30))
accounts.push(BankAccount.account(`Master`, 650, 32))
accounts.push(BankAccount.account(`Doctor`, 250, 33))
accounts.push(BankAccount.account(`Chacha`, 2500, 50))

accounts.sort(BankAccount.sortByBalance);

console.log(accounts)