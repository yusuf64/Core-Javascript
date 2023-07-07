// IN this file we will learn about are let and const are hoisted
// Let start
// console.log(a);
// console.log(b);
// console.log(c);

// As you can see the variables which are declared under let and const are hoisted and has a value of undefined until its intitalized but we cant access it because its in temporal dead zone. what is temporal dead zone it is time between hositing of variables and its initialization
// If you access let and const before initialization it will give you a reference error. A reference error means you are tying to acces aa variable which is in a temporal dead zone

// if you try to access a using window object i.e Window.a it will give you the value because the var variables are stored in global memory space but let and const are not stored in global memory space but it is stored in reserved memory space if you try to access that in window.b you will get undefined.

// one more difference between var and let is you cannot redeclare the let but you can redeclare var.

// var a = 10;
// let b = 100;
// const c = 200;

console.log(a);

var a = 20;
var a = 40;

// Same is the const keyword if you compare const with let it is pretty much tthe same even more stricter than const

// you cannot just declare a const and use it afterwards it should delcare and initalized at the same time if you try to change it or declare it after wards it will give you SyntaxError and if you try to change the const value it will give you typeerror and when u try to access a let or const variable before decalring or initialzing it , it will give u a reference error.
// There are three types of error: [1] referenceError {given where variable does not have memory allocation} [2] typeError {given when we change type that is not supposed to be changed} [3] syntaxError {when proper syntax(way of writing a statement) is not used}.

const aa = "baba";
console.log(aa);

aa = "haha";
console.log(aa);

// if you want to avoid temporal dead zones initalzied all the variables as soon as u declare them, because temporal zone is create betweeen the time where the let variables is declared but initialized later.
