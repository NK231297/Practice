/*--- Imports ---*/
import { cart, updateCartNumFunc, deleteFromCart, updateItemQuantity } from './cart.js';
import { productsInfo } from '../data/products.js';

const productContainer = document.querySelector('.js-order-summary');
const checkoutNumElem = document.querySelector('.js-checkout-quantity');


const renderItemsFunc = ()=>{
    let html = ``;
    cart.forEach((item)=>{
        const productId = item.productId;
    
        let matchedItem;
        productsInfo.forEach((catoItem)=>{
            if(productId === catoItem.id){
                matchedItem = catoItem;
            }
        })
    
        html += `
        <div class="cart-item-container js-item-container-${item.productId}" >
            <div class="delivery-date">
                Delivery date: Tuesday, June 21
            </div>
    
            <div class="cart-item-details-grid">
                <img class="product-image"
                src="${matchedItem.image}">
    
                <div class="cart-item-details">
                <div class="product-name">
                    ${matchedItem.name}
                </div>
                <div class="product-price">
                    $${(matchedItem.priceCents / 100).toFixed(2)}
                </div>
                <div class="product-quantity">
                    <span>
                    Quantity: <span class="quantity-label js-item-quantity-${item.productId}">${item.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary js-update-link" data-product-id = "${item.productId}">
                    Update
                    </span>

                    <input type="number" name="update-quantity" class = "quantity-input js-input-quantity-${item.productId}">
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
                <div class="delivery-option">
                    <input type="radio" checked
                    class="delivery-option-input"
                    name="${item.productId}">
                    <div>
                    <div class="delivery-option-date">
                        Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                        FREE Shipping
                    </div>
                    </div>
                </div>
                <div class="delivery-option">
                    <input type="radio"
                    class="delivery-option-input"
                    name="${item.productId}">
                    <div>
                    <div class="delivery-option-date">
                        Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                        $4.99 - Shipping
                    </div>
                    </div>
                </div>
                <div class="delivery-option">
                    <input type="radio"
                    class="delivery-option-input"
                    name="${item.productId}">
                    <div>
                    <div class="delivery-option-date">
                        Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                        $9.99 - Shipping
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        `
    })
    
    productContainer.innerHTML = html;
}

renderItemsFunc();
// @ts-ignore
checkoutNumElem.innerText = `${updateCartNumFunc()} Items`

document.querySelectorAll('.js-delete-link').forEach((link)=>{
    link.addEventListener('click', ()=>{

        const productId = link.dataset.productId;

        // console.log(productId);

        deleteFromCart(productId);
       
        const itemContainer = document.querySelector(`.js-item-container-${productId}`);

        itemContainer.remove();

        checkoutNumElem.innerText = `${updateCartNumFunc()} Items`

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

        const itemContainer = document.querySelector(`.js-item-container-${productId}`);

        itemContainer.classList.remove('is-editing-quantity');

        const newQuantity = +document.querySelector(`.js-input-quantity-${productId}`).value;

        updateItemQuantity(productId, newQuantity);

        const itemQuantity = document.querySelector(`.js-item-quantity-${productId}`);

        let abcd = 0;

        cart.forEach((item)=>{
            if(item.productId === productId){
                abcd = item.quantity;
            }
        })

        itemQuantity.innerText = abcd;
        checkoutNumElem.innerText = `${updateCartNumFunc()} Items`

    })
})