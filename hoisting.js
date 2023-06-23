// in this code we will learn what is hoisting in javascript

// console.log(c);
// getName();

console.log(getName);

function getName() {
  console.log("Hello Javascript!");

  console.log(cd);

  var cd = 12;
}

var c = 786;

// &&&&&&&&&& NOTE &&&&&&&&&&&&&&

// As you can see here we are accessing teh variable name first by console.log and then we are declaring it here we can see the the value of c undefinded this is because instead of giving error all the varibale decalre are stored in memorey allocation context where the values of theat variable sets to undefined and when we execute that code the js will execute each code line by line so first it will gets the value undefinde of c variable adn for the function it gets stored as it is

// what is hoisting exactly
// hoisting is something which happens when we run the code a global execution context created in call stack in global execution context we have two component one is memory allocation and tthe other is thread execution when we run the code of js the js will go through the whole code and save all the variables and functions declared in the code in the memory allocation component with variable value undefined and function value as the whole function itself and thats why when u execute the code and u print the variable before declaring it, it will give u undefined and if you call a function before declaring/ calling it will give the main func itslef.
