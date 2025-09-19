/*--- Imports ---*/
import {cart} from '../cart.js';
import { productsInfo } from '../../data/products.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { deliveryOptions, calculateDeliveryDate } from '../../data/deliveryOptions.js';
import { priceFormat } from '../utils/priceFormat.js';
import { renderPaymentSummary } from './payment-summary.js';
import renderCheckoutHeader from './checkoutHeader.js';

export const renderOrderSummary = ()=>{

const productContainer = document.querySelector('.js-order-summary');
// const checkoutNumElem = document.querySelector('.js-checkout-quantity');

const deliveryOptionHTML = (matchingItem, cartItem)=>{
    let html = ''; 
    deliveryOptions.forEach((deliveryOption)=>{
    //For date
        const dateString = calculateDeliveryDate(deliveryOption);
    
    //For delivery charge
        const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `$${priceFormat(deliveryOption.priceCents)}`;

    
    //For Auto selected delivery option
        const selectedOption = deliveryOption.id === cartItem.deliveryOptionId;
    

        html += `
        <div class="delivery-option js-delivery-option"
        data-product-id = "${matchingItem.id}"
        data-delivery-option-id = "${deliveryOption.id}"
        >
            <input type="radio" ${selectedOption ? 'checked' : ''} class="delivery-option-input" name="${matchingItem.id}">
            <div>
                <div class="delivery-option-date">
                    ${dateString}
                </div>
                <div class="delivery-option-price">
                    ${priceString} - Shipping
                </div>
            </div>
        </div>
        `
    })
    return html;
}



let html = ``;
cart.cartItems.forEach((item)=>{
    const productId = item.productId;

    let matchedItem;
    productsInfo.forEach((catoItem)=>{
        if(productId === catoItem.id){
            matchedItem = catoItem;
        }
    })

    const deliveryOptionId = item.deliveryOptionId;

    let deliveryOption;

    deliveryOptions.forEach((option)=>{
        if(option.id === deliveryOptionId){
            deliveryOption = option;
        }
    })

    const dateString = calculateDeliveryDate(deliveryOption);

    html += `
    <div class="cart-item-container js-item-container-${item.productId}" >
        <div class="delivery-date">
            Delivery date: ${dateString}
        </div>

        <div class="cart-item-details-grid">
            <img class="product-image" src="${matchedItem.image}">

            <div class="cart-item-details">
                <div class="product-name">
                    ${matchedItem.name}
                </div>
                <div class="product-price">
                    $${(matchedItem.priceCents / 100).toFixed(2)}
                </div>
                <div class="product-quantity">
                    <span>Quantity: <span class="quantity-label js-item-quantity-${item.productId}">${item.quantity}</span></span>

                    <span class="update-quantity-link link-primary js-update-link" data-product-id = "${item.productId}">Update</span>

                    <input type="number" name="update-quantity" class = "quantity-input js-input-quantity js-input-quantity-${item.productId}" data-product-id = "${item.productId}">
                    
                    <span class="save-quantity-link link-primary js-save-link" data-product-id = "${item.productId}">Save</span>

                    <span class="delete-quantity-link link-primary js-delete-link" data-product-id = "${item.productId}">Delete</span>
                </div>
            </div>

            <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                
                ${deliveryOptionHTML(matchedItem, item)}

            </div>
        </div>
    </div>
    `
})

productContainer.innerHTML = html;















const checkoutQuantityUpdate = (productId)=>{
    const itemContainer = document.querySelector(`.js-item-container-${productId}`);

    itemContainer.classList.remove('is-editing-quantity');

    const newQuantity = +document.querySelector(`.js-input-quantity-${productId}`).value;

    cart.updateItemQuantity(productId, newQuantity);

    const itemQuantity = document.querySelector(`.js-item-quantity-${productId}`);

    let abcd = 0;

    cart.cartItems.forEach((item)=>{
        if(item.productId === productId){
            abcd = item.quantity;
        }
    })

    itemQuantity.innerText = abcd;
    // checkoutNumElem.innerText = `${updateCartNumFunc()} Items`;
    renderCheckoutHeader();
}





document.querySelectorAll('.js-delete-link').forEach((link)=>{
    link.addEventListener('click', ()=>{

        const productId = link.dataset.productId;

        cart.deleteFromCart(productId);
       
        const itemContainer = document.querySelector(`.js-item-container-${productId}`);

        // itemContainer.remove();
        renderOrderSummary();

        // checkoutNumElem.innerText = `${updateCartNumFunc()} Items`
        renderCheckoutHeader();

        renderPaymentSummary();

    })
})

document.querySelectorAll('.js-update-link').forEach((link)=>{
    link.addEventListener('click', ()=>{
        const productId = link.dataset.productId;

        const itemContainer = document.querySelector(`.js-item-container-${productId}`)

        itemContainer.classList.add('is-editing-quantity');
    })
})

document.querySelectorAll(`.js-save-link`).forEach((link)=>{
    link.addEventListener('click', ()=>{
        
        const productId = link.dataset.productId;

        checkoutQuantityUpdate(productId);

        renderPaymentSummary();

    })
})

document.querySelectorAll('.js-input-quantity').forEach((link)=>{
    link.addEventListener('keydown', (e)=>{
        const productId = link.dataset.productId;

        if(e.key === 'Enter'){
            checkoutQuantityUpdate(productId);
            renderPaymentSummary();
        }

    })

})

document.querySelectorAll('.js-delivery-option').forEach((element)=>{
    element.addEventListener('click', ()=>{
        const {productId, deliveryOptionId} = element.dataset;

        cart.updateDeliveryOption(productId, deliveryOptionId);

        renderOrderSummary();
        renderPaymentSummary();
    })
})

}

