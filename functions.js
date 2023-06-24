// IN this part we will learn about functions in deep
var x = 10;
var sec = 122;
a();
b();
console.log(x);

function a() {
  var x = 12;
  console.log(x);
  console.log(sec);
}

// Point to note : as you can see in func a when i am printing out sec even though its not defined anywhere in the func itself it still printing out/ this is because every function has acces to global memory compponent

function b() {
  var x = 15;
  console.log(x);
}

// 1. We learnt how functions work in JS.
// 2. At first a global execution context is created, which consists of Memory and code and has 2 phases: Memory allocation phase and code execution phase.
// 3. In the first phase, the variables are assigned "undefined" while functions have their own code.
// 4. Whenever there is a function declaration in the code, a separate local execution context gets created having its own phases and is pushed into the call stack.
// 5. Once the function ends, the EC is removed from the call stack.
// 6. When the program ends, even the global EC is pulled out of the call stack.
