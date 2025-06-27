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
let category = document.getElementById("category")
let stationary = document.getElementById("stationary")
let food = document.getElementById("food")
let beverages = document.getElementById("beverages")
let createBT = document.getElementById("create")

let items = [];

createBT.addEventListener(`click`, function(e){
    e.preventDefault();

    let Item = new product(ItemName.value, +ItemPrice.value, category.value)

    items.push(Item);

    console.log(items);

})