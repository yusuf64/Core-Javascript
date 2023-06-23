var a;
console.log(a);
a = 12;
console.log(a);

// Summary of this video - As we have already discussed in the last video that everything happens in javascript in the execution environment. So the entire execution happens in two phases as follows
// 1. Memory allocation phase- all the variables  and functions get their memory allocated in the memory with undefined and the entire code  respectively.
// 2. Code execution phase - in this phase  thread execution happens and all the variables get their actual values which were assigned to them and as function is invoked, a new execution environment gets created in the code part, and again there are two phases, memory allocation phase and code execution phase. And the cycle repeats.

// In the global execution context of JavaScript, two primary processes occur: memory allocation and code execution.

// 1. Memory Allocation:
//    During the global execution context, memory is allocated for various components such as variables, functions, objects, and other data structures that are defined in the global scope. This allocation happens in two main steps:

//    - Variable Declaration: Memory space is reserved for variables declared using `var`, `let`, or `const` keywords. These variables are stored in memory, and their initial values are set to `undefined`. The memory allocation allows the program to store and access data when needed.

//    - Function Declaration: Memory space is allocated for function declarations. This process is known as function hoisting, where the function declarations are moved to the top of the global scope. It allows functions to be called before their actual declaration in the code.

// 2. Code Execution:
//    After memory allocation, the JavaScript code in the global execution context is executed line by line. The code execution involves the following steps:

//    - Variable Initialization: If variables have initial values assigned during declaration (`let` and `const` variables are not hoisted with an initial value), those values are assigned during this step.

//    - Function Execution: If there are function calls or function expressions in the global scope, those functions are executed, and their code is run.

//    - Top-Level Statements: The remaining code in the global execution context is executed sequentially. This includes executable statements such as assignments, function calls, conditionals, loops, and any other code present outside of functions.

//    - Event Handlers and Callbacks: In a web browser environment, if there are event handlers or asynchronous callbacks defined in the global scope, they are registered and executed when the respective events occur or the callbacks are triggered.

//    - Error Handling: If an error occurs during code execution, JavaScript's error handling mechanism, such as try-catch blocks or global error handlers, can capture and handle those errors.

//    The code execution in the global execution context continues until all statements have been executed or an error halts the process.

// The combination of memory allocation and code execution in the global execution context allows JavaScript programs to define and initialize variables, execute functions, and perform top-level operations necessary for the program's initial setup and execution.

// If you have any further questions or need additional clarification, feel free to ask!
