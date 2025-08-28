export let cart = JSON.parse(localStorage.getItem('cart')) || [{
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity: 2
}, {
  productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity: 1
}];

const saveToStorage = ()=>{
  localStorage.setItem('cart', JSON.stringify(cart));
}

export const addToCart = (productId)=>{
  const selectedQuantity = +document.querySelector(`.js-quantity-selector-${productId}`).value

  let matchingProduct;

    cart.forEach((item)=>{
      if(item.productId === productId){
        matchingProduct = item
      }
    })

    if(matchingProduct){
      matchingProduct.quantity += selectedQuantity;
    }
    else{
      cart.push({
        productId,
        // productName,
        quantity: selectedQuantity
      })
    }

    saveToStorage();
    
};

export const deleteFromCart = (productId)=>{
  const newCart = [];
  
  cart.forEach((cartItem)=>{
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  })

  cart = newCart;

  saveToStorage();

  console.log(cart)
}