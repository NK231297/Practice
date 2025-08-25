const productGridElem = document.querySelector('.products-grid');
const cartQuantityElem = document.querySelector('.cart-quantity');

let html = ``;
productsInfo.forEach((product)=>{
  html += `
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
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container" >
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

          <div class="product-spacer"></div>

          <div class="added-to-cart add-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-name = "${product.name}" data-product-id = "${product.id}">
            Add to Cart
          </button>
        </div>
  `
})

productGridElem.innerHTML = html;

const timeoutIdObj = {};

document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
  
  button.addEventListener('click', ()=>{

    let productName = button.dataset.productName;

    let productId = button.dataset.productId;
    
    let quantitySelector = +document.querySelector(`.js-quantity-selector-${productId}`).value;
    
    let matchingItem;

    let cartQuantity = 0;

    cart.forEach((item)=>{
      if(item.productId === productId){
        matchingItem = item;
      }

    })

    if(matchingItem){
      matchingItem.quantity += quantitySelector;
    }
    else{
      cart.push({
  
        productName,
        quantity: quantitySelector,
        productId
  
      })
    }

    cart.forEach((item)=>{
      cartQuantity += item.quantity
    })
    

    cartQuantityElem.innerText = cartQuantity
    

    
    
    const addedText = document.querySelector(`.add-to-cart-${productId}`)
    
    addedText.classList.add('added-to-cart-visible')
    
    const previousTimeoutId = timeoutIdObj[productId]

    if(previousTimeoutId){
      clearTimeout(previousTimeoutId)

    }

    let timeoutId = setTimeout(()=>{
      addedText.classList.remove('added-to-cart-visible')
    }, 2000)

    timeoutIdObj[productId] = timeoutId

    console.log(cart)
  
    console.log(timeoutIdObj)
    


  })

})