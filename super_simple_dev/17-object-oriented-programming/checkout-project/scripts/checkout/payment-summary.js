
import { productsInfo } from '../../data/products.js';
import { deliveryOptions } from '../../data/deliveryOptions.js';
import {cart} from '../cart.js';
import { priceFormat } from '../utils/priceFormat.js';
import { formatMoney } from '../../../../13-javascript-amazon-project/scripts/utils/money.js';


export const renderPaymentSummary = ()=>{
    const paymentSummaryElem = document.querySelector('.js-payment-summary');

    let totalItemPrice = 0;
    let totalShippingPrice = 0;
    
    cart.cartItems.forEach((cartItem)=>{
        let matchedItem;
        
        const productId = cartItem.productId;
        const cartItemQuantity = cartItem.quantity;

        productsInfo.forEach((product)=>{
            if(productId === product.id){
                matchedItem = product;
            }
        })

        totalItemPrice += cartItemQuantity * matchedItem.priceCents;

        let deliveryOption;

        deliveryOptions.forEach((option)=>{
            if(cartItem.deliveryOptionId === option.id){
                deliveryOption = option;
            }
        })

        totalShippingPrice += deliveryOption.priceCents;

    })
    
    const totalBeforTaxes = totalItemPrice + totalShippingPrice;
    const taxes = totalBeforTaxes * 0.1;
    const orderTotal = totalBeforTaxes + taxes;
    
    const paymentSummaryHTML = `
       <div class="payment-summary-title">
        Order Summary
        </div>

        <div class="payment-summary-row">
        <div>Items: (${cart.updateCartNumFunc()})</div>
        <div class="payment-summary-money">$${priceFormat(totalItemPrice)}</div>
        </div>

        <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">$${priceFormat(totalShippingPrice)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">$${priceFormat(totalBeforTaxes)}</div>
        </div>

        <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">$${priceFormat(taxes)}</div>
        </div>

        <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">$${priceFormat(orderTotal)}</div>
        </div>

        <button class="place-order-button button-primary">
        Place your order
        </button>
    `

    paymentSummaryElem.innerHTML = paymentSummaryHTML;
}