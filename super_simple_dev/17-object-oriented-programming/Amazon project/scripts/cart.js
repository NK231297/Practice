import { productsInfo } from "../data/products.js";
import { getDeliveryOptionById } from "./utils/deliveryOptions.js";
import { formatMoney } from "./utils/money.js";

class Cart {
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  saveToStorage (){
    localStorage.setItem('cart', JSON.stringify(this.cart))
  };

  addToCartArrFunc (productId){

    const quantitySelectorElem = +document.querySelector(`.js-quantity-selector-${productId}`).value;

    let matchedItem;

    this.cart.forEach((item)=>{
      // matchedItem = item.productId;

      if(item.productId === productId){
        matchedItem = item;
      }
    })
    
    if(matchedItem){
      matchedItem.quantity += quantitySelectorElem;
    }
    else{
      this.cart.push({
        productId,
        quantity: quantitySelectorElem,
        deliveryOptionId: '1'
      })
    }
    
    this.saveToStorage();
    console.log(this.cart);

  };

  updateCartNumFunc (){
    let quantity = 0;

    let cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];

    cartFromLocalStorage.forEach((item)=>{
      quantity += item.quantity;
    })

    // document.querySelector('.js-cart-quantity').innerHTML = quantity;
    return quantity;
  };

  deleteFromCart = (productId)=>{
    let newCart = [];

    this.cart.forEach((item)=>{
        if(item.productId !== productId){
            newCart.push(item)
        }
    })
    
    this.cart = newCart;

    this.saveToStorage();

    console.log(this.cart);
  };

  updateItemQuantity (productId, newQuantity){
        
    this.cart.forEach((item)=>{

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

  this.saveToStorage();

  };

  updateDeliveryOption(deliveryId, productId){
    const selectedOption = getDeliveryOptionById(deliveryId);

    this.cart.forEach((cartItem)=>{
      if(cartItem.productId === productId){
          cartItem.deliveryOptionId = selectedOption.id;
      }
    })

    // localStorage.setItem('cart', JSON.stringify(cart));
    this.saveToStorage();
  };

  cartItemFullInfo(productId){
    let matchedItem;

    productsInfo.forEach((product)=>{

      if(productId === product.id){
          matchedItem = product;
      }

    })

    return matchedItem;
  };

//This provides amount without including taxes and delivery charges
  tic(){

    let total = 0;
    this.cart.forEach((cartItem)=>{
      
    let productId = cartItem.productId;
    
    let matchedItem = this.cartItemFullInfo(productId);

    let amount = matchedItem.priceCents * cartItem.quantity;

    total += amount;
    })

  // let priceString = formatMoney(total);

    return total;
  };

//This provides total delivery charges
  tdc(){

    let total = 0;
    this.cart.forEach((cartItem)=>{
        let productId = cartItem.productId;
        let deliveryOptionId = cartItem.deliveryOptionId;
    
        let selectedOption = getDeliveryOptionById(deliveryOptionId);
    
        total += selectedOption.priceCents;
    })
    
    // let deliveryChargeString = formatMoney(total);

    return total;
  };

  taxes(){
    let total = +this.tic() + +this.tdc();

    let tax = total * 0.1;

    return tax;
  };

  orderTotal(){
    let totalAmount = +this.tic() + +this.tdc() + +this.taxes();

    return totalAmount;
  };

};

export let kart = new Cart();