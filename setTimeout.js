// setTimeOut() = function in JS that allows you to schedule.
//                The execution of a function after an amount of time (ms)
//                Times are approximate (varies based on the workload of the JS runtime env.)

//                setTimeout(callback, delay)

// setTimeout w/callback
// function sayHello() {
//   console.log("Hello");
// }

// setTimeout(sayHello, 3000);

// setTimeout w/anonymous func
// setTimeout(function () {
//   console.log("Hello");
// }, 3000);

// setTimeout w/arrow func
setTimeout(() => {
  console.log("Hello");
}, 3000);
