//Main Logic

class bankAccount{
    customerName;
    balance = 0;
    accountNumebr;

    constructor(customerName, balance = 0){
        this.customerName = customerName;

        this.balance = balance;

        this.accountNumebr = Date.now()
    };
};

















let customerName = document.getElementById("name");
let balance = document.getElementById("balance");
let savings = document.getElementById("savings");
let current = document.getElementById("current");


let accounts = [];



let accNo = document.getElementById(`account`);
let amount = document.getElementById(`amount`);
let depositBT = document.getElementById(`deposit`);
let withdrawBT = document.getElementById(`withdraw`);
