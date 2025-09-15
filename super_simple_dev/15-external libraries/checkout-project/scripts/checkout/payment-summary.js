import { cart } from '../cart.js';
import { productsInfo } from '../../data/products.js';
import { deliveryOptions } from '../../data/deliveryOptions.js';
import { updateCartNumFunc } from '../cart.js';


export const renderPaymentSummary = ()=>{
    const elem1o1 = document.querySelector('.js-total-items');
    const elem1o2 = document.querySelector('.js-total-item-price');

    const elem2 = document.querySelector('.js-total-shipping-charges');
    const elem3 = document.querySelector('.js-total-before-taxes');
    const elem4 = document.querySelector('.js-estimated-taxes');

    let totalItemPrice = 0;
    let totalShippingPrice = 0;
    
    cart.forEach((cartItem)=>{
        let matchedItem;
        
        const productId = cartItem.productId;
        const cartItemQuantity = cartItem.quantity;

        productsInfo.forEach((product)=>{
            if(productId === product.id){
                matchedItem = product;
            }
        })

        totalItemPrice += cartItemQuantity * ((matchedItem.priceCents / 100).toFixed(2));

        let deliveryOption;

        deliveryOptions.forEach((option)=>{
            if(cartItem.deliveryOptionId === option.id){
                deliveryOption = option;
            }
        })

        totalShippingPrice += deliveryOption.priceCents / 100


    })

    elem1o1.innerText = updateCartNumFunc();
    elem1o2.innerText = (`$${totalItemPrice}`);
    elem2













































    console.log(totalItemPrice);
    console.log(totalShippingPrice);

    const totalBeforTaxes = totalItemPrice + totalShippingPrice;

    console.log(totalBeforTaxes);

    const taxes = +((((totalBeforTaxes * 100) * 0.1) / 100).toFixed(2));

    console.log(taxes);

    const orderTotal = totalBeforTaxes + taxes;

    console.log(orderTotal);

}