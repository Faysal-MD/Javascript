// callback = a function that is passed as an argument to another function.
// used to handle async operations: reading a File, network request, Interacting with databases
// !Hey when u are done call this next

sum(displayConsole, 1, 2);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}
