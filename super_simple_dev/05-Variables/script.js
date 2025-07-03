
let one = document.getElementById(`show`);
let two = document.getElementById(`add`);
let three = document.getElementById(`add2`);
let four = document.getElementById(`add3`);
let seven = document.getElementById(`reset`);

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

seven.addEventListener   (`click`, function(e){
    cartQuantity = 0;
    console.log(`Cart was reset.`);
    console.log(`Cart Quantity is: ${cartQuantity}`);
});


//Exercise:-
//5a.
const Name = `Nikhil`;
//5b.
console.log(`My name is ${Name}`);
//5c.
const coffee = `$5`;
const bagels = `$3`;
const soup = `$9`;
const Cost = 5 + 3 * 2 + 9;
//5d.
console.log(`Cost of food $${Cost}`);
//5e.
const tax = Cost * 0.1
//5f.
console.log(`tax amount is: $${tax}`);
//5g.
const totalCost = Cost + tax;
console.log(`Your total payable amount is: $${totalCost}`);
//5h.
let five = document.getElementById(`add4`);
let six = document.getElementById(`add5`);

five.addEventListener   (`click`, function(e){
    cartQuantity += 4;
    console.log(`Cart Quantity is: ${cartQuantity}`);
});

six.addEventListener   (`click`, function(e){
    cartQuantity += 5;
    console.log(`Cart Quantity is: ${cartQuantity}`);
});
//5i.
let eight = document.getElementById(`remove`);

eight.addEventListener   (`click`, function(e){
    cartQuantity;
    if(cartQuantity > 0){
        cartQuantity -= 1
    }
    else{
        console.log(`relax bro cart is empty.`)
    }
    
    
    console.log(`Cart Quantity is: ${cartQuantity}`);
    
});
//5j.
let nine = document.getElementById(`remove2`);
let ten = document.getElementById(`remove3`);

nine.addEventListener(`click`, function(e){
    e.preventDefault();
    cartQuantity;
    if(cartQuantity === 1){
        cartQuantity -= 1
        console.log(`Cart Quantity is: ${cartQuantity}`);
    }
    else if(cartQuantity > 1){
        cartQuantity -= 2;
        console.log(`Cart Quantity is: ${cartQuantity}`);
    }
    else{
        console.log(`Cart is empty now stop clicking button stupid`);
    }
})

ten.addEventListener(`click`, function(e){
    e.preventDefault();
    cartQuantity;
    if(cartQuantity === 1){
        cartQuantity -= 1;
        console.log(`Cart Quantity is ${cartQuantity}`);
    }
    else if(cartQuantity === 2){
        cartQuantity -= 2;
        console.log(`Cart Quantity is ${cartQuantity}`);
    }
    else if(cartQuantity > 3){
        cartQuantity -= 3;
        console.log(`Cart Quantity is ${cartQuantity}`);
    }
    else{
        console.log(`Cart is Empty, please don't click agian and again.`);
        
    }
})