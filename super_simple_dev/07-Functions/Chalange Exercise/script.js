const view = document.getElementById("view");
const add = document.getElementById("add");
const remove = document.getElementById("remove");
const add2 = document.getElementById("add2");
const add3 = document.getElementById("add3");
const remove2 = document.getElementById("remove2");
const remove3 = document.getElementById("remove3");
const reset = document.getElementById("reset");

let cart = 0;

function updateCart(num){
    return cart += num;
};

view.addEventListener(`click`, function(e)      {
    e.preventDefault();

    console.log(`Your Cart Quantity is: ${cart}`);
});

add.addEventListener(`click`, function(e)       {
    e.preventDefault();

    cart++

    console.log(`Cart Quantity: ${cart}`);
});

remove.addEventListener(`click`, function(e)    {
    e.preventDefault();

    if(cart > 0){
        cart--;
    }
    else{
        console.log("Cart is empty now");
        // console.log(cart);
    }

    console.log(`Cart Quantity: ${cart}`);
});

add2.addEventListener(`click`, function(e)      {
    e.preventDefault();

    cart += 2;

    console.log(`Cart Quantity: ${cart}`);
});

add3.addEventListener(`click`, function(e)      {
    e.preventDefault();
    
    cart += 3;
    
    console.log(`Cart Quantity: ${cart}`);
    
});

remove2.addEventListener(`click`, function(e)   {
    e.preventDefault();
    
    if(cart > 1){
        console.log("removing 2")
        cart -= 2;
    }
    else if(cart === 1){
        console.log("removing 1")
        cart -= 1;
    }
    else{
        console.log("Cart is empty now");
    }
    
    console.log(`Cart Quantity: ${cart}`);

});


remove3.addEventListener(`click`, function(e)   {
    e.preventDefault();

    if(cart > 2){
        console.log("removing 3")
        cart -= 3;
    }
    else if(cart === 2){
        console.log("removing 2")
        cart -= 2;
    }
    else if(cart === 1){
        console.log("removing 1")
        cart--;
    }
    else{
        console.log("cart is empty now.");
        // console.log(`Cart quantity: ${cart}`);
    }
    console.log(`Cart quantity: ${cart}`);
});

reset.addEventListener(`click`, function(e)     {
    e.preventDefault();
    cart = 0;
    console.log("Cart is reseted");
    console.log(`Cart Quantity: ${cart}`);
});
