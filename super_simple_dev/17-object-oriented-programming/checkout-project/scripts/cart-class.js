import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

class Cart {
  
};

export const cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCartArrFunc(productId){

  const quantitySelectorElem = +document.querySelector(`.js-quantity-selector-${productId}`).value;

  let matchedItem;

  cart.forEach((item)=>{
    // matchedItem = item.productId;

    if(productId === item.productId){
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

export function updateCartNumFunc(){
  let quantity = 0;

  let cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];

  cartFromLocalStorage.forEach((item)=>{
    quantity += item.quantity;
  })

  // document.querySelector('.js-cart-quantity').innerHTML = quantity;
  return quantity;
}

export function deleteFromCart(productId){
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

export function updateItemQuantity(productId, newQuantity){

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
    }}
  })

  saveToStorage();

}

export function updateDeliveryOption(productId, deliveryOptionId){
  let matchingProduct;

  cart.forEach((item)=>{
    if(item.productId === productId){
      matchingProduct = item
    }
  })

  matchingProduct.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}
