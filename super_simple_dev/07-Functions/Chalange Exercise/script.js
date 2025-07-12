const view = document.getElementById("view");
const add = document.getElementById("add");
const remove = document.getElementById("remove");
const add2 = document.getElementById("add2");
const add3 = document.getElementById("add3");
const remove2 = document.getElementById("remove2");
const remove3 = document.getElementById("remove3");
const reset = document.getElementById("reset");

let cart = 0;

function addCart (num){
    if(cart < 10){
        let abcd = 10 - cart;
    
        let efgh = Math.min(num, abcd);
        

        cart += efgh;
    
        console.log(`Added ${efgh}pc`);
        // return;
    }
    else{
        console.log("Cart is full");
    }
    

    console.log(`Cart: ${cart}`);
};

function removeCart(num){
    let abcd = 10 - cart;
    
    let ijkl = 10 - abcd;

    let mnop = Math.min(num, ijkl);
    
    if(cart > 9){
        cart -= num;

        console.log(`Removed: ${num}pc`);
    }
    else if(cart > 0){
        cart -= mnop;

        console.log(`Removed: ${mnop}pc`);
    }
    else{
        console.log("Cart is empty");
    }
    console.log(`Cart: ${cart}`);
}

view.addEventListener(`click`, function(e)      {
    e.preventDefault();

    console.log(`Your Cart Quantity is: ${cart}`);
});

add.addEventListener(`click`, function(e)       {
    e.preventDefault();

    addCart(1);
});

remove.addEventListener(`click`, function(e)    {
    e.preventDefault();

    removeCart(1);

});

add2.addEventListener(`click`, function(e)      {
    e.preventDefault();
    
    addCart(2);
    
});

add3.addEventListener(`click`, function(e)      {
    e.preventDefault();
    
    addCart(3);
    
});

remove2.addEventListener(`click`, function(e)   {
    e.preventDefault();
    
    removeCart(2);

});


remove3.addEventListener(`click`, function(e)   {
    e.preventDefault();

    removeCart(3);
});

reset.addEventListener(`click`, function(e)     {
    e.preventDefault();
    cart = 0;
    console.log("Cart is reseted");
    console.log(`Cart Quantity: ${cart}`);
});
