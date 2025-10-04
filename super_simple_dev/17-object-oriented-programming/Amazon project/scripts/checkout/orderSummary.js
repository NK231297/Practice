/*--- Imports ---*/
import { kart } from '../cart.js';
import { productsInfo } from '../../data/products.js';
import { deliveryOptions, renderDeliveryOptions, getDeliveryOptionById, getDateString } from '../utils/deliveryOptions.js';
import { renderPaymentSummary } from './paymentSummary.js';

export function renderOrderSummary(){

const productContainer = document.querySelector('.js-order-summary');
const checkoutNumElem = document.querySelector('.js-checkout-quantity');

function renderCheckout(){

const renderItemsFunc = ()=>{
    let html = ``;
    kart.cart.forEach((item)=>{
        const productId = item.productId;
    
        let matchedItem;
        productsInfo.forEach((catoItem)=>{
            if(productId === catoItem.id){
                matchedItem = catoItem;
            }
        })

        let selectedOptionDays = getDeliveryOptionById(item.deliveryOptionId).days;
    
        html += `
        <div class="cart-item-container js-item-container-${item.productId}" >
            <div class="delivery-date">
                Delivery date: ${getDateString(selectedOptionDays)}
            </div>
    
            <div class="cart-item-details-grid">
                <img class="product-image"
                src="${matchedItem.image}">
    
                <div class="cart-item-details">
                <div class="product-name">
                    ${matchedItem.name}
                </div>
                <div class="product-price">
                    $${matchedItem.getPrice()}
                </div>
                <div class="product-quantity">
                    <span>
                    Quantity: <span class="quantity-label js-item-quantity-${item.productId}">${item.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary js-update-link" data-product-id = "${item.productId}">
                    Update
                    </span>

                    <input type="number" name="update-quantity" class = "quantity-input js-input-quantity js-input-quantity-${item.productId}" data-product-id = "${item.productId}">
                    <span class="save-quantity-link link-primary js-save-link" data-product-id = "${item.productId}">
                    Save
                    </span>

                    <span class="delete-quantity-link link-primary js-delete-link" data-product-id = "${item.productId}">
                    Delete
                    </span>
                </div>
                </div>
    
                <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                ${renderDeliveryOptions(item.productId, item.deliveryOptionId)}
                </div>
            </div>
        </div>
        `
    })
    
    productContainer.innerHTML = html;
}

const checkoutQuantityUpdate = (productId)=>{
    const itemContainer = document.querySelector(`.js-item-container-${productId}`);

    itemContainer.classList.remove('is-editing-quantity');

    const newQuantity = +document.querySelector(`.js-input-quantity-${productId}`).value;

    kart.updateItemQuantity(productId, newQuantity);

    const itemQuantity = document.querySelector(`.js-item-quantity-${productId}`);

    let abcd = 0;

    kart.cart.forEach((item)=>{
        if(item.productId === productId){
            abcd = item.quantity;
        }
    })

    itemQuantity.innerText = abcd;
    checkoutNumElem.innerText = `${kart.updateCartNumFunc()} Items`;
}

renderItemsFunc();

checkoutNumElem.innerText = `${kart.updateCartNumFunc()} Items`

document.querySelectorAll('.js-delete-link').forEach((link)=>{
    link.addEventListener('click', ()=>{

        const productId = link.dataset.productId;

        kart.deleteFromCart(productId);
       
        // const itemContainer = document.querySelector(`.js-item-container-${productId}`);

        // itemContainer.remove();

        renderCheckout();
        renderPaymentSummary();

        checkoutNumElem.innerText = `${kart.updateCartNumFunc()} Items`

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

document.querySelectorAll('.js-delivery-option').forEach((button)=>{
    button.addEventListener('click', ()=>{
        const productId = button.dataset.productId;
        const deliveryId = button.dataset.deliveryId;

        kart.updateDeliveryOption(deliveryId, productId);

        renderCheckout();
        renderPaymentSummary();
        
    })
})

};

renderCheckout();
};
