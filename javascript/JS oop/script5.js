    // main logic

    class bankAccount {
        customerName;
        #balance = 0;
        accountNumber;
        // accountType;
        // transactionLimit;

        
        constructor(customerName, balance = 0){
            if( new.target === bankAccount ){
            throw new Error(`You can only create savings or current account, there is no account type available named "bankAccount"`)
        }

            this.customerName = customerName;

            if( typeof balance === `number` && balance >= 0 ){
                this.#balance = balance;
            }else{
                console.log(new Error(`input balance is not valid please check`))
            }


            this.accountNumber = Date.now();
        };

        deposit(amount){
            this.#balance += amount;
        };

        withdraw(amount){
            this.#balance -= amount;
        };

        set balance(amount){
            if( typeof amount === `number` && amount >= 0 ){
                this.#balance = amount;
            }else{ console.log(`Error: Input is invalid, balance not updated`) }
        }

        get balance(){
            return this.#balance
        }

    };

    class savingsAccount extends bankAccount{
        accountType = `Savings Account`
        transactionLimit = 10000

        constructor(customerName, balance = 0){
            super(customerName, balance);
        };
    }

    class currentAccount extends bankAccount{
        accountType = `Current Account`
        transactionLimit = 50000

        constructor(customerName, balance){
            super(customerName, balance)
        };
    }

    let accounts = [];

    let acc1 = new savingsAccount(`Rakesh k`);

    acc1.balance = `hello`

    let acc2 = new currentAccount(`Mahesh d`, `hello`);

    let acc3 = new bankAccount(`Suresh`, 2000);

    accounts.push(acc1, acc2, acc3);

    console.log(accounts);