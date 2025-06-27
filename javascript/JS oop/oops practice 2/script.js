class product{
    itemName;
    itemPrice;
    category;
    static id = 1;

    constructor(itemName, itemPrice, category, id){
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.category = category;
        this.id = product.id++;
    };
}

let ItemName = document.getElementById("name")
let ItemPrice = document.getElementById("price")
let stationary = document.getElementById("stationary")
let food = document.getElementById("food")
let beverages = document.getElementById("beverages")