import { productsInfo } from "../data/products.js";
import { getDeliveryOptionById } from "./utils/deliveryOptions.js";
import { formatMoney } from "./utils/money.js";

class Cart {
  
};



export let cart = JSON.parse(localStorage.getItem('cart')) || [];

/*{
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity: 1,
  deliveryOptionId: '1'
}, {
  productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity: 2,
  deliveryOptionId: '2'
}*/


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
        quantity: quantitySelectorElem,
        deliveryOptionId: '1'
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

export const updateItemQuantity = (productId, newQuantity)=>{
        
    cart.forEach((item)=>{

    let remainingSpace = 10 - item.quantity;

    if(item.productId === productId){

      if(newQuantity < 0){
        console.log('invalid input')
        return
      }

      if(item.quantity <= 10 && newQuantity > 10){
        item.quantity = 10;

        console.log('setting to 10')
      }
      else if(item.quantity < 10 && newQuantity <= 10){
        item.quantity = newQuantity;
      }
      else if(item.quantity === 10 && newQuantity < 10){
        item.quantity = newQuantity;
      }

    }

})

saveToStorage();

}

export function updateDeliveryOption(deliveryId, productId){
  const selectedOption = getDeliveryOptionById(deliveryId);

  cart.forEach((cartItem)=>{
    if(cartItem.productId === productId){
        cartItem.deliveryOptionId = selectedOption.id;
    }
  })

  // localStorage.setItem('cart', JSON.stringify(cart));
  saveToStorage();
}

export function cartItemFullInfo(productId){
  let matchedItem;

  productsInfo.forEach((product)=>{

      if(productId === product.id){
          matchedItem = product;
      }

  })

  return matchedItem;
};










//This provides amount without including taxes and delivery charges
export function tic(){

  let total = 0;
  cart.forEach((cartItem)=>{
      
      let productId = cartItem.productId;
      
      let matchedItem = cartItemFullInfo(productId);

      let amount = matchedItem.priceCents * cartItem.quantity;

      total += amount;
  })

  // let priceString = formatMoney(total);

  return total;
};

//This provides total delivery charges
export function tdc(){

    let total = 0;
    cart.forEach((cartItem)=>{
        let productId = cartItem.productId;
        let deliveryOptionId = cartItem.deliveryOptionId;
    
        let selectedOption = getDeliveryOptionById(deliveryOptionId);
    
        total += selectedOption.priceCents;
    })
    
    // let deliveryChargeString = formatMoney(total);

    return total;
};

export function taxes(){
  let total = +tic() + +tdc();

  let tax = total * 0.1;

  return tax;
};

export function orderTotal(){
  let totalAmount = +tic() + +tdc() + +taxes();

  return totalAmount;
};