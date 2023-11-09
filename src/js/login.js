import { renderHeaderFooter } from "./utils.mjs";
import LoginForm from "./components/LoginForm.svelte";
import { getParam } from "./utils.mjs";

renderHeaderFooter();
new LoginForm({
    target: document.querySelector(".login"),
    props: {redirect: getParam("redirect") }
})
