
const baseURL = import.meta.env.VITE_SERVER_URL

function convertToJson(res) {
    if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export async function getProductsByCategory(category) {
  const response = await fetch(baseURL + `products/search/${category}`);
  const data = await convertToJson(response);
  return data.Result;
}
// export function getProductsByCategory(category = "tents") {
//   return fetch(`../json/${category}.json`)
//     .then(convertToJson)
//     .then((data) => data);
// }

export async function findProductById(id) {
  const response = await fetch(baseURL + `product/${id}`);
  const products = await convertToJson(response);
  return products.Result;
  // return products;
  // const products = await getData();
  // return products.find((item) => item.Id === id);
} 
