<<<<<<< HEAD
// Exporting module
console.log('Exporting module');

// Blocking code
// console.log('Start fetching user');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching user');

const shoppingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
=======
// Exporting module
console.log('Exporting module');

// Blocking code
// console.log('Start fetching user');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching user');

const shoppingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
>>>>>>> cdc36e1388c6b3c9d75db4a89d20a9e71774c53b
