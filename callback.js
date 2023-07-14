// What is callback function in Javascript
// function xy() {}
// xy(function y() {});

// as you can see we are passing another function inside a function and the responsibility of this fucntion xy() is to callback function y() whenver this xY() is called. thats why it is called as callback fucntion

setTimeout(function () {
  console.log("timer");
}, 5000);
// as you can see we have passed a function inside a fucntion, and in this way we dont have to wait for a task to be completeed as you know all the execution happens in call stack which is also known as main thread

// Now lets assume you have some heavy functions that will take some time to executed, here asynchronous feature will come to rescue it will took that call back fucntion , store it in a different memory phase and attacha timer to it and move to another fucntion , and when the timer got expired it will call that function , until this time all the other functions will be executed. in this way callback functions are really helpful

function z(d) {
  console.log("hello");
  d();
}

z(function () {
  console.log("hello from inner function");
});

// Lets try a important interview question

// Add a event listener on click and on every click it should show how many times it clicked

function clickhandle() {
  let count = 0;
  let b = document.querySelector(".click");
  b.addEventListener("click", function zc() {
    console.log("Button Clicked", ++count);
  });
}

// as you can see we have defined a function clickhandle it has evnet listener that will call a function when someone click the button. and on everyclick we will be adding the count.

// You can see in dev console whenever its click the function xyz get push in call stack and executes the things , here closure plays a great role in remembering the varibalbe postion .

clickhandle();
