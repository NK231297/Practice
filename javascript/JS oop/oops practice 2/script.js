//Main logic

class product{
    itemName;
    itemPrice;
    category;
    static id = 1;

    constructor(itemName, itemPrice, category, id){
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        // this.category = category;
        this.id = product.id++;
    };
};

let items = [];

let itt1 = new product(`Soap`, 20);

items.push(itt1);

console.log(items);