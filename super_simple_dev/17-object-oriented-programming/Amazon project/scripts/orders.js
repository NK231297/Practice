import { orders } from "../data/orders.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import { formatMoney } from "./utils/money.js";
import { kart } from "./cart.js";
import { loadProductsFetch } from "../data/products.js";
import { skipWeekend } from "./utils/skipWeekend.js";


async function renderOrder(){

  await loadProductsFetch();

  let html = '';

  
  orders.forEach((order)=>{

    const dateString = dayjs(order.orderTime).format('MMMM D');
    
    html += `
      <div class="order-container">
          
        <div class="order-header">
          <div class="order-header-left-section">
            <div class="order-date">
              <div class="order-header-label">Order Placed:</div>
              <div>${dateString}</div>
            </div>
            <div class="order-total">
              <div class="order-header-label">Total:</div>
              <div>$${formatMoney(order.totalCostCents)}</div>
            </div>
          </div>

          <div class="order-header-right-section">
            <div class="order-header-label">Order ID:</div>
            <div>${order.id}</div>
          </div>
        </div>
        <div class="order-details-grid js-order-details-grid">
          ${renderProducts(order)}
        </div>
      </div>
  `

  

  });

  

  document.querySelector('.js-cart-quantity').innerText = kart.updateCartNumFunc();

  document.querySelector('.js-order-grid').innerHTML = html;

  document.querySelectorAll(`.js-buy-again`).forEach((button)=>{
    button.addEventListener('click', ()=>{
      const productId = button.dataset.productId;

      let matchedItem;

      kart.cart.forEach((cartItem)=>{
        if(cartItem.productId === productId){
          matchedItem = cartItem;
        }
      })

      if(matchedItem){
        matchedItem.quantity += 1;
      } else{
        kart.cart.push({
          productId: productId,
          quantity: 1,
          deliveryOptionId: '1'
        })
      }

      

      kart.saveToStorage();

      document.querySelector('.js-cart-quantity').innerText = kart.updateCartNumFunc();
      
      console.log(kart.cart);
      
    })
  })
  
  
  
};

function renderProducts(order){
  let productHtml = '';

  order.products.forEach((product)=>{

    const date = dayjs(product.estimatedDeliveryTime);

    const isWeekend = skipWeekend(date);

    const dateString = dayjs(isWeekend).format('dddd MMMM D');
  
    const item = kart.cartItemFullInfo(product.productId);

    productHtml += `
      <div class="product-image-container">
        <img src= ${item.image} >
      </div>

      <div class="product-details">
        <div class="product-name">
          ${item.name}
        </div>
        <div class="product-delivery-date">
          Arriving on: ${dateString}
        </div>
        <div class="product-quantity">
          Quantity: ${product.quantity}
        </div>
        <button class="buy-again-button button-primary js-buy-again" data-product-id = "${item.id}">
          <img class="buy-again-icon" src="images/icons/buy-again.png">
          <span class="buy-again-message">Buy it again</span>
        </button>
      </div>

      <div class="product-actions">
        <a href="tracking.html?orderId=${order.id}&productId=${product.productId}">
          <button class="track-package-button button-secondary">
            Track package
          </button>
        </a>
      </div>
  `
  

})
return productHtml;

};

renderOrder();


