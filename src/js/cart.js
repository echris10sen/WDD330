import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");

  // Error Checking: If Local Storage is Null Do Nothing
  if (cartItems === null) {
    return;
  }

  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  // Getting the delete button working for the remove from cart trello card
  var deleteButtons = document.getElementsByClassName("cart-card__remove");
    for (var i = 0; i < deleteButtons.length; i++) {
      // this is not perfect, but add the deleting function to the buttons.
      deleteButtons[i].addEventListener("click", removeItem.bind(i));
    }
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"                         
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <button class="cart-card__remove" id="${item.Id}" >X</button> <!-- Remove Item Trello Card Button -->
  </li>
</li>`;

  return newItem;
}

/***********************************************
 * Remove Item from cart function for trello card
 ***********************************************/
function removeItem() {
  // Select the item that will be removed
  let cartArray = getLocalStorage("so-cart");

  // remove the item from local storage
  cartArray.splice(this, 1);
  setLocalStorage("so-cart", cartArray);

  // re-render the cart contents, done by reloading the page
  location.reload();
}


renderCartContents();
