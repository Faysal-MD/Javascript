// function = a section of reusable code. Declare code once, use it whenever u want
// call the function to execute the code.

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}
function isEven(num) {
  //   if (num % 2 == 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return num % 2 === 0 ? true : false;
}
function isValidEmail(email) {
  return email.includes("@") ? true : false;
}

console.log(isEven(15));


