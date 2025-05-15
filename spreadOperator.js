// spread operator = ... allows an iterable such as an array or string to be expanded into seperate elements (unpacks the elements)

let numbers = [1, 2, 3, 4, 5, 6];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

// console.log(maximum);

let username = "Faysal Mahmud";
let letters = [...username].join("-");

// console.log(letters);

let fruits = ["Mango", "Jackfruit", "Banana"];
let vegetables = ["Carrot", "Potato", "Onion"];

let foods = [...fruits, ...vegetables, 'Egg', 'Milk'];

console.log(foods);
