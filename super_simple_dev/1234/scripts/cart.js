export let cart = JSON.parse(localStorage.getItem('cart')) || [];

const saveToStorage = ()=>{
  localStorage.setItem('cart', JSON.stringify(cart))
}

export const addToCartArrFunc = (productId)=>{

    const quantitySelectorElem = +document.querySelector(`.js-quantity-selector-${productId}`).value;

    let matchedItem;

    cart.forEach((item)=>{
      // matchedItem = item.productId;

      if(item.productId === productId){
        matchedItem = item;
      }
    })
    
    if(matchedItem){
      matchedItem.quantity += quantitySelectorElem;
    }
    else{
      cart.push({
        productId,
        quantity: quantitySelectorElem
      })
    }
    
    saveToStorage();
    console.log(cart);

}

export const updateCartNumFunc = ()=>{
    let quantity = 0;

    let cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];

    cartFromLocalStorage.forEach((item)=>{
      quantity += item.quantity;
    })

    // document.querySelector('.js-cart-quantity').innerHTML = quantity;
    return quantity;
}

export const deleteFromCart = (productId)=>{
        let newCart = [];

        cart.forEach((item)=>{
            if(item.productId !== productId){
                newCart.push(item)
            }
        })
        
        cart = newCart;

        saveToStorage();

        console.log(cart);
}