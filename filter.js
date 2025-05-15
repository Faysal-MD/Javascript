// .filter() = creates a new array br filtering out new elements

let num = [1, 2, 3, 4, 5, 6, 7];
let evenNums = num.filter(isEven);
let oddNums = num.filter(isOdd);

console.log(oddNums);

function isEven(element) {
  return element % 2 === 0;
}
function isOdd(element) {
  return element % 2 !== 0;
}
