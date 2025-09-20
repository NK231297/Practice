import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export class Cart {
    cartItems = undefined;
    #localStorageKey = undefined;

    constructor(localStorageKey){
        this.#localStorageKey = localStorageKey;
        this.loadFromStorage();
    }

    loadFromStorage(){
      this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) || [];
    }

    saveToStorage(){
      localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems))
    }

    addToCartArrFunc(productId){
  
      const quantitySelectorElem = +document.querySelector(`.js-quantity-selector-${productId}`).value;
  
      let matchedItem;
  
      this.cartItems.forEach((item)=>{
        // matchedItem = item.productId;
  
        if(productId === item.productId){
        matchedItem = item;
        }
      })
  
      if(matchedItem){
        matchedItem.quantity += quantitySelectorElem;
      }
      else{
        this.cartItems.push({
        productId,
        quantity: quantitySelectorElem,
        deliveryOptionId: '1'
        })
      }
  
      cart.saveToStorage();
      console.log(this.cartItems);
  
    }

    updateCartNumFunc(){
      let quantity = 0;
  
      let cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
  
      cartFromLocalStorage.forEach((item)=>{
        quantity += item.quantity;
      })
  
      // document.querySelector('.js-cart-quantity').innerHTML = quantity;
      return quantity;
    }

    deleteFromCart(productId){
      let newCart = [];
  
      this.cartItems.forEach((item)=>{
        if(item.productId !== productId){
          newCart.push(item)
        }
      })
  
      this.cartItems = newCart;
  
      cart.saveToStorage();
  
      console.log(this.cartItems);
    }

    updateItemQuantity(productId, newQuantity){
  
      this.cartItems.forEach((item)=>{
  
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
  
      cart.saveToStorage();
  
    }

    updateDeliveryOption(productId, deliveryOptionId){
      let matchingProduct;
  
      this.cartItems.forEach((item)=>{
        if(item.productId === productId){
          matchingProduct = item
        }
      })
  
      matchingProduct.deliveryOptionId = deliveryOptionId;
  
      cart.saveToStorage();
    }

};

export const cart = new Cart('cart');
export const cartBussiness = new Cart('cart-bussiness');

console.log(cart);
console.log(cartBussiness);