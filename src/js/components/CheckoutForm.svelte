<script>
    import { getLocalStorage } from "../utils.mjs";
    import {totalCart} from "../cart.js";
    export let key = "";
    let tax = 0;
    let count = 0;
    let shipping = 0;
    let total = totalCart();
    
    
    function calculateItemSummary(){
        let tax = 0.06;
        let shipping = 8 + (2 * count);
        let ftotal = total + (total * tax) + shipping;
        return ftotal;
    }
    function init(){
        let cartItems = getLocalStorage("so-cart") || [];
  
        
        // const amounts = cartItems.map((price) => price.FinalPrice);
        // let total = amounts.reduce((sum, price) => sum + price, 0);
        // document.querySelector(".total").innerHTML = `Total: $${total}`;
        // console.log(total);
    }
    init();
    let orderTotal = calculateItemSummary();
</script>

<h2>Review & Place your Order</h2>
<fieldset class="shipping">
    <legend>Shipping</legend>
    <label for="firstName">First Name</label>
    <input type="text" name="firstName"id="firstName">
    
    <label for="lastName">Last Name</label>
    <input type="text" name="lastName" id="lastName">
    
    <label for="street">Street</label>
    <input type="text" name="street" id="street">
    
    <label for="city">City</label>
    <input type="text" name="city" id="city">
    
    <label for="state">State</label>
    <input type="text" name="state" id="state">
    
    <label for="zip">Zip</label>
    <input type="text" name="zip" id="zip"> 
</fieldset>
<fieldset class="payment">
    <label for="cardNumber">Card Number</label>
    <input type="text" id="cardNumber">
    
    <label for="expiration">Expiration</label>
    <input type="text" id="expiration">
    
    <label for="securityCode">Security Code</label>
    <input type="text" id="securityCode">
</fieldset>

<fieldset class="checkout-summary">
    <legend>Order Summary</legend>
    <p>Item Subtotal({count}):         ${total}</p>
    <p>Shipping Estimate:               ${shipping}</p>
    <p>Tax:                             ${tax}</p>
    <p>Order Total:                     ${calculateItemSummary()}<p>
    
</fieldset>

<style>
    label {
        display: block;
    }
</style>