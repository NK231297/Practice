export const cart = [];

export const addToCartArrFunc = (productId)=>{
    let matchedItem;

    cart.forEach((item)=>{
      // matchedItem = item.productId;

      if(item.productId === productId){
        matchedItem = item;
      }
    })
    
    if(matchedItem){
      matchedItem.quantity++;
    }
    else{
      cart.push({
        productId,
        quantity: 1
      })
    }
    
    console.log(cart);
}

export const updateCartNumFunc = ()=>{
    let quantity = 0;

    cart.forEach((item)=>{
      quantity += item.quantity;
    })

    document.querySelector('.js-cart-quantity').innerHTML = quantity;
}