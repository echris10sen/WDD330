import CheckoutForm from "./components/CheckoutForm.svelte"
import { renderHeaderFooter } from "./utils.mjs";

renderHeaderFooter();
new CheckoutForm ({
    target: document.querySelector(".checkout-form"),
    props: { key: "so-cart" }
})
