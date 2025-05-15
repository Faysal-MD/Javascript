// .reduce() = reduce the elements of an array to a single value

const grades = [70, 80, 90, 100];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}
function getMin(accumulator, element) {
  return Math.min(accumulator, element);
}
