import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";
let product = {};

export default async function productDetails(productId, selector){
    // use findProductById to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    product = await findProductById(productId);
    // once we have the product details we can render out the HTML
    const el = document.querySelector(selector);
    el.insertAdjacentHTML("afterBegin", productDetailsTemplate(product));
    // add a listener to Add to Cart button
    document.getElementById("addToCart").addEventListener("click", addToCart);

}

async function addToCart(e) {
    //Initialize the Cart if not already done so
    initCart();    
    
    // Get the selected product
    product = await findProductById(e.target.dataset.id);
    
    // Get the cart contents
    let cart = getCart();

    // Add product to the cart
    cart.push(product);

    // Add cart to Local Storage;
    setCart(cart);
}

function productDetailsTemplate() {
    return `<h3>${product.Brand.Name}</h3>
        <h2 class="divider" id="productNameWithoutBrand">${product.NameWithoutBrand}</h2>
        <img
          id="productImage"
          class="divider"
          src="${product.Image}"
          alt=""${product.Name}
        />
        <p class="product-card__price" id="productFinalPrice">${product.FinalPrice}</p>
        <p class="product__color" id="productColorName">${product.Colors[0].ColorName}</p>
        <p class="product__description" id="productDescriptionHtmlSimple">${product.DescriptionHtmlSimple}</p>
        <div class="product-detail__add">
            <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
        </div> `;
}

/************************** 
 * Cart handling functions 
 *************************/

// gets Cart from LocalStorage
function getCart() {
    return getLocalStorage("so-cart"); 
}

// Sets Cart to Local storage
function setCart(cart) {
    setLocalStorage("so-cart", cart);  
}

// Initializes Cart to an array
function initCart() {
    const cart = [];
    if (getCart() === null){
      setCart(cart);
    };
}