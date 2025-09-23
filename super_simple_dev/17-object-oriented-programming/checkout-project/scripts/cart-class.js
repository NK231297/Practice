import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

class Cart {
  cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  };

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
  
    this.saveToStorage();
    console.log(this.cartItems);
  
  };

  updateCartNumFunc(){
    let quantity = 0;

    let cartFromStorage = JSON.parse(localStorage.getItem('cart')) || [];
  
    this.cartItems

    cartFromStorage.forEach((item)=>{
      quantity += item.quantity;
    })
  
    // document.querySelector('.js-cart-quantity').innerHTML = quantity;
    return quantity;
  };

  deleteFromCart(productId){
    let newCart = [];
  
    this.cartItems.forEach((item)=>{
      if(item.productId !== productId){
        newCart.push(item)
      }
    })
  
    this.cartItems = newCart;
  
    this.saveToStorage();
  
    console.log(this.cartItems);
  };

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
  
    this.saveToStorage();
  
  };

  updateDeliveryOption(productId, deliveryOptionId){
    let matchingProduct;
  
    this.cartItems.forEach((item)=>{
      if(item.productId === productId){
        matchingProduct = item
      }
    })
  
    matchingProduct.deliveryOptionId = deliveryOptionId;
  
    this.saveToStorage();
  }
  
};

export let cart = new Cart();