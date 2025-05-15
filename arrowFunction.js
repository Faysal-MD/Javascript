// arrow function = a concise way to write function expressions good for simple function that u use only once

const hello = (name, age) => {
  console.log(`Hello ${name}`);
  console.log(`You are ${age} years old`);
};

hello("Faysal", 28);

const num = [1, 2, 3, 4];

const squares = num.map((element) => Math.pow(element, 2));

console.log(squares);
