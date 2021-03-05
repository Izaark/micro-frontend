import faker from "faker";

const CartName = `<h3>Cart: ${faker.commerce.productName()}<h3/>`;
const cartText = `<div>You have ${faker.random.number()} items in your cart</diV>`;

document.querySelector("#dev-cart").innerHTML = cartText;
document.querySelector("#cart-name").innerHTML = CartName;
