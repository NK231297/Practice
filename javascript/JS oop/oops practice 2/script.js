//Main logic

class shopping{
    itemName;
    itemPrice;
    category;
    static id = 1;

    constructor(itemName, itemPrice, category, id){
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.category = category;
        this.id = id++;
    };
};

let items = [];

let itt1 = new shopping(`Soap`, 20, `TnW`);

items.push(itt1);

console.log(items);