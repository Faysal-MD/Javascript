// .map() = accepts a callback and applies that function to each Element of an array, then return a new array
const num = [1, 2, 3, 4, 5];
const squares = num.map(square);

console.log(squares);

function square(element) {
  return Math.pow(element, 2);
}
