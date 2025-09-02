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

export const updateCartQuantity = (productId, inputedQuantity)=>{

  let matchingItem;
  
  cart.forEach((item)=>{
      if(item.productId === productId){
          matchingItem = item
      }
  })
  /*
  let maxPcs = 10;
  let remainingPcs = maxPcs - matchingItem.quantity;
  */
  if(inputedQuantity < 0){
      console.log('please enter valid quantity');
      return;
  }

  /*
  else if(matchingItem.quantity < 10 && inputedQuantity > 10){

      matchingItem.quantity += remainingPcs;

      document.querySelector(`.js-quantity-label-${productId}`).innerHTML = matchingItem.quantity;

      console.log(`${remainingPcs} Added`)
      console.log(`Max limit reached.`)
  }
  */

// This code is short alternative of adding remaining pcs to quantity to the maximum limit
  if(inputedQuantity > 10){
    console.log('Max limit reached, setting to 10pc')
    matchingItem.quantity = 10;
  }
  /*
  // Decrease from max.
  else if(matchingItem.quantity === 10 && inputedQuantity < 10){

      let newQuantity = inputedQuantity;
      
      matchingItem.quantity = newQuantity;
      
      document.querySelector(`.js-quantity-label-${productId}`).innerHTML = matchingItem.quantity;
  }
  */

  // Alternate of Decrease from max code:
  if(matchingItem === 10 && inputedQuantity < 10){
    matchingItem.quantity = inputedQuantity;
  }

  // Normal update
  else if(matchingItem.quantity < 10){      

      matchingItem.quantity = inputedQuantity;
  
  }
  // already max    
  else{
    console.log('Max quantity reached')
    
  }
  document.querySelector(`.js-quantity-label-${productId}`).innerHTML = matchingItem.quantity;

  saveToStorage();
}
