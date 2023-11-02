<script>
    import { getLocalStorage } from "../utils.mjs";
    // import {totalCart} from "../cart.js";
    export let key = "";
    let list = [];
    let itemTotal = 0;
    let shipping = 0;
    let tax = 0;
    let orderTotal = 0;
    // let count = 0;
    // let total = 0;
    
    
    const calculateItemSummary = function () {
        const amounts = list.map((item) => item.FinalPrice);
        itemTotal = amounts.reduce((sum, item) => sum + item);
    
        // let tax = 0.06;
        // let shipping = 8 + (2 * count);
        // let ftotal = total + (total * tax) + shipping;
        // return ftotal;
    }
    const calculateOrdertotal = function () {
        shipping = 10 + (list.length - 1) * 2;
        tax = (itemTotal * 0.06).toFixed(2);
        orderTotal = (
        parseFloat(itemTotal) +
        parseFloat(shipping) +
        parseFloat(tax)
        ).toFixed(2);
    };
    function init(){
        list = getLocalStorage("so-cart");
        calculateItemSummary()
        
        // const amounts = cartItems.map((price) => price.FinalPrice);
        // let total = amounts.reduce((sum, price) => sum + price, 0);
        // document.querySelector(".total").innerHTML = `Total: $${total}`;
        // console.log(total);
    }
    init();
    calculateOrdertotal();
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
    <p>Item Subtotal({list.length}):         ${itemTotal}</p>
    <p>Shipping Estimate:               ${shipping}</p>
    <p>Tax:                             ${tax}</p>
    <p>Order Total:                     ${orderTotal}<p>
    
</fieldset>

<style>
    label {
        display: block;
    }
</style>