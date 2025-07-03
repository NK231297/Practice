let one = document.getElementById(`show`);
let two = document.getElementById(`add`);
let three = document.getElementById(`add2`);
let four = document.getElementById(`add3`);
let five = document.getElementById(`reset`);

let cartQuantity = 0;

one.addEventListener    (`click`, function(e){
    console.log(`Cart Quantity is: ${cartQuantity}`);
});

two.addEventListener    (`click`, function(e){
    cartQuantity = cartQuantity + 1;
    console.log(`Cart Quantity is: ${cartQuantity}`);
});

three.addEventListener  (`click`, function(e){
    cartQuantity = cartQuantity + 2;
    console.log(`Cart Quantity is: ${cartQuantity}`);
});

four.addEventListener   (`click`, function(e){
    cartQuantity = cartQuantity + 3;
    console.log(`Cart Quantity is: ${cartQuantity}`);
});

five.addEventListener   (`click`, function(e){
    cartQuantity = 0;
    console.log(`Cart was reset.`);
    console.log(`Cart Quantity is: ${cartQuantity}`);
});
