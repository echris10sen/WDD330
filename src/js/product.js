import productDetails from "./productDetails.mjs";
import { getParam } from "./utils.mjs";
import { renderHeaderFooter } from "./utils.mjs";

renderHeaderFooter();

const productId = getParam("product");
productDetails(productId, ".product-detail");

