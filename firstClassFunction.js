// IN This file we will learn about why functions are known as many names

// 1. first is function statement which is also known as function declaration

function xyz() {
  let z = 11;
  console.log(z);
}

// and when we assign a function as a value it is known as function expression

let bak = function () {
  console.log("hi ");
};

bak();
// console.log(bak());

// Anonymous Function is somehting a function with no name

// function(){
//     console.log(true);
// }

// Mostly anonymous function is passed as a value

// Named Function Expression

let dal = function dd() {
  console.log("HI");
};

dal();

// Or
dd();

// The interview startup's name rhymes with "Tomato"

// For Revision
// Function statement / Function Declaration : the function is normally defined and can be used later on
// Function expression : the function is first created and assigned to a variable so that it can be called by its variable name and unless it is defined, it cannot be executed otherwise it throws out "Uncaught TypeError"

// Anonymous function : function where there is no need to define name for the function, it just can be assigned to variable

// Named function : Normal function with its name assigned to a variable !!In this case you cannot call function by its name in outer scope!! (Scope Chain)

// first class Functions / first class citizens :
// 1) used as values
// 2) can be passed as argument
// 3) can be executed inside a closured function
// 4) can be taken as return
