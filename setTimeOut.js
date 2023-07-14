// // In this chapter we will learn about setTimeOut and how closure works inside it

// // function x() {
// //   var i = 10;
// //   setTimeout(function () {
// //     console.log(i);
// //   }, 3000);
// //   console.log("Hello Javascript");
// // }

// // x();

// // AS you can see here when we are executing this Javscript doesnt wait for setimeout funciton to execute it goes to another line and print "Hello Javascript" and setTimout will save at some place with its timer and after the timesup it will execute its function and it will remmber its refernce to it because of closures and it will print

// // Problem Statement: Print 1 to 6 after each second using Settime out

// function timeoutVar() {
//   for (var b = 0; b <= 5; b++) {
//     setTimeout(function () {
//       console.log(b);
//     }, 1000);
//   }
// }

// timeoutVar();

// // Guess the output , you might be thingking it will print each number after 1 seconds incrementing it but you are wrong, it will print 6 all the 5 times, because var has a global scope and whenever its iterating it is pointing out to same "i" and just changes it value so the value is already gone to 6 becuase setTimeout takes 1 second and until then the forloop has already iterated

// // How to solve this - We can solve this by using let because let has a block scope whenver it will encouter a let it will gets stored in its own reserved memory that why for each iteration of closure it will reference to its specific version of varialbe value and it will printout the output which we are expecting.

// function timeoutLet() {
//   for (let b = 0; b <= 5; b++) {
//     setTimeout(function () {
//       console.log(b);
//     }, 1000);
//   }
// }

// timeoutLet();

// // Now lets assume the interviewer told you to not use let declaration

// function parent() {
//   for (var a = 0; a <= 6; a++) {
//     function clouse(a) {
//       setTimeout(function () {
//         console.log(a);
//       }, 1000);
//     }
//   }
//   clouse(a);
// }
// parent();

// var a = 10;

// function h() {
//   if (a) {
//     var a = 11;
//     console.log(a);
//   }
// }
// h();
let a = 122;
function h() {
  console.log(a);
  if (a) {
    // console.lo
    let a = 11;
    console.log(a);
  }
  console.log(a);
}
h();
console.log(a);

// let a = 10;

// if (a) {
//   let a = 100;
//   console.log(a);
// }

// console.log(a);

// let a = 100;
// console.log(a);

// a = 3000;
// console.log(a);

// const b = 200;
// console.log(b);

// b = 400;
// console.log(b);
