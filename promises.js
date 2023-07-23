const GITHUB_API_URL = "https://api.github.com/users/yusuf64";

const promise = fetch(GITHUB_API_URL);

promise.then((data) => {
  var a = data.json();
  console.log(a);
});

// What is a promise

// Promise is a object that represents of event complettion or failure of an asynchronous operation or promise is a placeholder for a future value that is going to come

// benefits of using promise

// Promises helps us writing a trust worthy code

// Promises solves the problems like passing a callback function inside a function ,i.e inversion of control, losing the control and depending on a fucntion to callback a function whenver it wants any time it wants, how many times it wants, and it also solvs the problems like callback hell or pyramid of doom

// Promises has three states
// 1. fullfilled
// 2. pending
// 3. rejected

// A promise is only resolves at once, it will be either fullfild, pending , or rejectd and the response which we get from promise is immutable

// we can use the then() function to a promise object to pass a callback function whenever we get the promise is fullfiled
