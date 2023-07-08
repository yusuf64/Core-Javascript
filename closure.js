// A function bundled with its lexical scope is known as Closure

// function a() {
//   var d = 12;
//   let cd = 100;
//   function b() {
//     console.log(d);
//     console.log(cd);
//   }
//   b();
// }

// a();

// Now lets try to understand a closure

function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}

// As you can see i enclosing a function inside a function and after that i am returning that function when i am initalizing that funciton into a variable let b then the closure comes to rescue, HOW??? because as you know Javscript is synchronous it executes line by line so that means if a function has been executed you can access it , thats where closures come when you ar returning a function you are literally sending a closure of y that has lexical environment of it. Closure is nothing but a bundled functions with its surrounding lexical environment thats what closure is

let b = x();
b();

// Now lets go deep inside by nesting a fcntion inside a funciton and insid a funtion

function gp() {
  var b = 100;
  function p() {
    var c = 200;
    function ch() {
      console.log(b, c);
    }
    ch();
  }
  p();
}

gp();

// Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure and that's where it becomes interesting !! Thank you so much, Akshay for this :) :)
