// In this chapter we'll learn about javascript engine and its architecture basically to run a javascript you just need a JRE (Javascript Runtime Environment)

// What is Javascript runtime Environment?
// Javascript runtime environment has everything that is required to run a javascirpt code
/* 
Javascript Runtime environment includes
1. Javascript Engine 
2. Apis
3. Event loop
4. microtask queue
5. Callback queue


JAVASCRIPT ENGINE
javascript engine is where our script got executed and it executes in different phases
javascirpt is nothing but a piece of code its not a hardware or something


in js engine it follows three steps for code execution

1. parsing
2. compilation
3. execution

in the first phase we break down our code int small tokens and convert them into AST(Abstract system tree) and sends it to compilation 

Now for Compilation we follow something called as JIT (Just in time compilation) it follows both interpretor + compiler 

Modern JS engine follows JIT compilation, it interprets while it optimises code as much as it can.
 Execution and Compilation are done together.
 Execution has Garbage collector and other optimisation such as inlining, copy elusion, inline caching etc.
Fell in love with JS. ❤❤

Basic idea about Mark & Sweep Algo:
It comprise of 2 phases - 
1. Mark phase
2. Sweep phase

All objects are marked as 0 initially (at creation) and in mark phase the objects that will be accessible are marked as 1 (reachable) by a DFS graph traversal.

During sweep phase, the objects marked with 0 are removed from heap memory. and also all reachable objects are again initialized with 0 (made unreachable) because the algorithm will run again.

So, it's basically tracing garbage collector concept. :)

 */
