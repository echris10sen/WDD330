<script>
    import { setLocalStorage, getLocalStorage, formDataToJSON, alertMessage, removeAllAlerts } from "../utils.mjs";
    import { checkout } from "../externalServices.mjs";
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
    };
    const packageItems = function (items) {
        // convert the list of products from localStorage to the simpler 
        //       form required for the checkout process. Array.map would be perfect for this.
        const simplifiedItems = items.map((item) => {
            console.log(item);
            return {
                id: item.Id,
                price: item.FinalPrice,
                name: item.Name,
                quantity: 1,
            };
        });
    return simplifiedItems;
    };
    const handleSubmit = async function (e) {
        const json = formDataToJSON(this);
        // add totals, and item details
        json.orderDate = new Date();
        json.orderTotal = orderTotal;
        json.tax = tax;
        json.shipping = shipping;
        json.items = packageItems(list);
        console.log(json);
        try {
            const res = await checkout(json);
            console.log(res);
            // setLocalStorage("so-cart", []); // clear the cart
            // location.assign("/checkout/success.html"); // redirect user to "Success!" page
        } catch (err) {
            removeAllAlerts();
            for (let message in err.message) {
                alertMessage(err.message[message]);
            }

            console.log(err);
        }   
    };
    init();
    calculateOrdertotal();
</script>

<h2>Review & Place your Order</h2>
<form name="checkout" on:submit|preventDefault={handleSubmit}>
    <fieldset class="shipping">
        <legend>Shipping</legend>
        <label for="firstName">First Name</label>
        <input type="text" name="fname"id="firstName" required>
        
        <label for="lastName">Last Name</label>
        <input type="text" name="lname" id="lastName" required>
        
        <label for="street">Street</label>
        <input type="text" name="street" id="street" required>
        
        <label for="city">City</label>
        <input type="text" name="city" id="city" required>
        
        <label for="state">State</label>
        <input type="text" name="state" id="state" required>
        
        <label for="zip">Zip</label>
        <input type="text" name="zip" id="zip" required> 
    </fieldset>
    <fieldset class="payment">
        <label for="cardNumber">Card Number</label>
        <input type="text" name="cardNumber" id="cardNumber" required
        placeholder="No spaces or dashes!"
        maxlength="16"
        minlength="16">
        
        <label for="expiration">Expiration</label>
        <input type="text" name="expiration" id="expiration" required placeholder="mm/yy" >
        
        <label for="securityCode">Security Code</label>
        <input type="text" name="code" id="securityCode" required placeholder="xxx" maxlength="3" minlength="3" >
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
    </fieldset>
    <button id="checkoutSubmit" type="submit">Checkout</button>
</form>

<style>
    label {
        display: block;
    }
</style>