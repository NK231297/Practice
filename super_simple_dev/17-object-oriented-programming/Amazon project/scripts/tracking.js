import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import { orders } from "../data/orders.js";
import { getDeliveryOptionById } from "./utils/deliveryOptions.js";
import { kart } from "./cart.js";
import { loadProductsFetch } from "../data/products.js";
import { skipWeekend } from "./utils/skipWeekend.js";

async function renderTracking(){
  
    await loadProductsFetch();

    const url = new URL(window.location.href);

    const orderId = url.searchParams.get('orderId');
    const productId = url.searchParams.get('productId');

    let matchedOrder;
    let matchedProduct;

    orders.forEach((order)=>{
        if(orderId === order.id){
            matchedOrder = order;
        }
    })

    matchedOrder.products.forEach((product)=>{
        if(productId === product.productId){
            matchedProduct = product;
        }
    })

    const today = dayjs();

    const orderTime = dayjs(matchedOrder.orderTime);

    const deliveryDate = dayjs(matchedProduct.estimatedDeliveryTime);

    const skipedWeekend = skipWeekend(deliveryDate);

    const dateString = dayjs(skipedWeekend).format('dddd, MMMM D');

    console.log(matchedOrder);
    console.log(matchedProduct);

    const product = kart.cartItemFullInfo(productId);

    const deliveryProgress = ((today - orderTime)/(skipedWeekend - orderTime))*100;

    
    console.log(deliveryProgress);
    console.log(skipedWeekend)
    

    document.querySelector('.js-main').innerHTML = `
      <div class="order-tracking">
        <a class="back-to-orders-link link-primary" href="orders.html">
          View all orders
        </a>
        <div class="delivery-date">
          Arriving on ${dateString}
        </div>

        <div class="product-info">
          ${product.name}
        </div>

        <div class="product-info">
          Quantity: ${matchedProduct.quantity}
        </div>

        <img class="product-image" src=${product.image}>

        <div class="progress-labels-container">
          <div class="progress-label">
            Preparing
          </div>
          <div class="progress-label current-status">
            Shipped
          </div>
          <div class="progress-label">
            Delivered
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar"></div>
        </div>
      </div>
    `
    
};
renderTracking();