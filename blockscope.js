// In this chapter we will learn about blockscope

// block scope is also known as compound statement where it compounds all the multiple statement and give it as a one statement which is needed and anything which is written under {} curlly braces is a block

// if (false) console.log("hello");
// console.log("fello");

// ifyou try see in the console u will see that even though the consiton is false it still printign out 'fello' its because javascript only want one single statement after if.

// as you can see here after if condition it requuires a single statement which we can write easily but what if we have mulitple statements then block sccopes comes to rescue it compounds multiple statement and give them as one single statement.

// if (false) {
//   console.log("hello");
//   console.log("fello");
// }

// Now lets explain block scope with this example

// {
//   var a = 12;
//   let b = 21;
//   const c = 100;

//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

//   Now when u try to print all the values u will find that var a has a global scope and it is accessible anywhere but var and const is only accesible in the block it is defined and after the block has done executing it no longer exist it

// Now lets try shadowing using another example
var javascript = 100;
let b = 22;
const c = 1000;

{
  var javascript = 120;
  let b = 21;
  const c = 100;

  console.log(javascript);
  console.log(b);
  console.log(c);
}
console.log(javascript);
console.log(b);
console.log(c);

// as you can see before the block scope the var variable value was 100 but after the block scope has executed it changed to 120, this is called shadowing and the thing is both variables are pointing in memory so thats why we are facing this issue

// but if u try to do this using let u cant do thsi because let has its own reserved meomory and it will give you the desired out put

// 888888888888888888888
// 1. Code inside curly bracket is called block.
// 2. Multiple statements are grouped inside a block so it can be written where JS expects single statements like in if, else, loop, function etc.
// 3. Block values are stored inside separate memory than global. They are stored in block. (the reason let and const are called block scope)
// 4. Shadowing of variables using var, let and const.
// 5. The shadow should not cross the scope of original otherwise it will give error.
// 6. shadowing let with var is illegal shadowing and gives error.
// 7. var value stored in global memory and hence can be accessed outside block as well whereas same is not the case with let and const.
