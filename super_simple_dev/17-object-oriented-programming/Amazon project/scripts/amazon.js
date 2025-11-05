/*--- Imports ---*/
import { productsInfo, loadProductsFetch } from '../data/products.js'; //theise are imported things from other files of there respected work.
import { kart } from './cart.js';

loadProductsFetch().then(()=>{
  renderProductsGrid();
});

function renderProductsGrid(){
  const productGrideElem = document.querySelector('.products-grid'); //this is an container which will contains all the products

  let timeOutIdObj = {};
  const addedTextFunc = (productId)=>{
    const addedTextElem = document.querySelector(`.js-added-text-${productId}`);
    
    addedTextElem.classList.add('js-visible');
    
    let existingTimeout = timeOutIdObj[productId];
    
    if(existingTimeout){
      clearTimeout(existingTimeout);
    }
    
    let timeoutId = setTimeout(()=>{
      addedTextElem.classList.remove('js-visible');
    }, 2000);
    
    timeOutIdObj[productId] = timeoutId;
  }

  let html = ``;
  productsInfo.forEach((product)=>{
    html += 
    `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src= ${product.getStarsUrl()}>
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${product.getPrice()}
      </div>

      <div class="product-quantity-container">
        <select class = "js-quantity-selector-${product.id}">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      ${product.extraInfoHTML()}

      <div class="product-spacer"></div>

      <div class="added-to-cart js-added-text-${product.id}">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id = "${product.id}">
        Add to Cart
      </button>
    </div>
    `
  })
  productGrideElem.innerHTML = html;

  document.querySelector('.js-cart-quantity').innerText = kart.updateCartNumFunc();

  /*Interactive elements*/
  document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
    button.addEventListener('click', ()=>{
      const {productId} = button.dataset;

      addedTextFunc(productId);

      kart.addToCartArrFunc(productId);

      document.querySelector('.js-cart-quantity').innerText = kart.updateCartNumFunc();

    })
  })
};

document.querySelector('.js-search-button').addEventListener('click', ()=>{
  const search = document.querySelector('.js-search-bar').value;
  window.location.href = `amazon.html?search=${search}`;
});