<script>
    import { getLocalStorage } from "../utils.mjs";
    // import {totalCart} from "../cart.js";
    export let key = "";
    let list = [];
    let itemTotal = 0;
    let shipping = 0;
    let tax = 0;
    let orderTotal = 0;
    
    
    const calculateItemSummary = function () {
        const amounts = list.map((item) => item.FinalPrice);
        itemTotal = amounts.reduce((sum, item) => sum + item);
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
    }
    function packageItems(items){
        // convert the list of products from localStorage to the simpler 
        //       form required for the checkout process. Array.map would be perfect for this.
    }
    function handleSubmit(e) {
        // build the data object from the calculated fields, the items in the cart, and the information entered into the form
        // remember that the form that was submitted can be found two ways...this or e.target 
        // call the checkout method in our externalServices module and send it our data object.
    }
    init();
    calculateOrdertotal();
</script>

<h2>Review & Place your Order</h2>
<fieldset class="shipping">
    <!-- need names: orderDate, items, orderTotal, shipping, tax -->
    <legend>Shipping</legend>
    <label for="firstName">First Name</label>
    <input type="text" name="fname"id="firstName">
    
    <label for="lastName">Last Name</label>
    <input type="text" name="lname" id="lastName">
    
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
    <input type="text" name="cardNumber" id="cardNumber">
    
    <label for="expiration">Expiration</label>
    <input type="text" name="expiration" id="expiration">
    
    <label for="securityCode">Security Code</label>
    <input type="text" name="code" id="securityCode">
</fieldset>

<fieldset class="checkout-summary">
    <legend>Order Summary</legend>
    <ul>
        <li>
            <label for="cartTotal">Item Subtotal({list.length})</label>
            <p name="cartTotal" id="cartTotal">${itemTotal}</p>
        </li>
        <li>
            <label for="shipping">Shipping Estimate</label>
            <p name="shipping" id="shipping">${shipping}</p>
        </li>
        <li>
            <label for="tax">Tax</label>
            <p name="tax" id="tax">${tax}</p>
        </li>
        <li>
            <label for="orderTotal"><b>Order Total</b></label>
            <p name="orderTotal" id="orderTotal">${orderTotal}</p>
        </li>
    </ul>
    <button id="checkoutSubmit" type="submit">Checkout</button>
    
    
</fieldset>

<style>
    label {
        display: block;
    }
</style>