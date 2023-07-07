// IN this file we will learn about are let and const are hoisted
// Let start
console.log(a);
console.log(b);
console.log(c);

// As you can see the variables which are declared under let and const are hoisted and has a value of undefined until its intitalized but we cant access it because its in temporal dead zone. what is temporal dead zone it is time between hositing of variables and its initialization
// If you access let and const before initialization it will give you a reference error. A reference error means you are tying to acces aa variable which is in a temporal dead zone

// if you try to access a using window object i.e Window.a it will give you the value because the var variables are stored in global memory space but let and const are not stored in global memory space but it is stored in reserved memory space if you try to access that in window.b you will get undefined.

var a = 10;
let b = 100;
const c = 200;
