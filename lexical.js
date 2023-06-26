// In this file we will learn about Lexical environment

var a = 12;

console.log(a);
// O: undefined
// Here i am printing a before declaring it, so obviously it will get stored in memory component of EC and value will be a placeholder called as undefined.
count();

function count() {
  var a = 16;

  console.log(a);
  secondcount();
  function secondcount() {
    console.log(a);
  }
  //   O: 16
  // As u can see when we are printing the val of a we inside athis count function we are gtting the value 16 which we have declared inside this function this is because when this function evoked and the value initalized it will create its own executional context and in that function's EC memory commponet we will store its own variable .not the variable which we have declared in global EC. IF THAT variable is missing in the local scope it will search for that variable in memory component of GEC. As you can see in the second count function.
}

// To concise things:

// 0) Lexical environment = EC's Local Memory + Reference to Lexical Environment of its parent.

// 1) Lexical Environment of its parent is the scope where a function is physically present or defined. So, suppose a function x(), is defined and invoked in the GEC, when function x()'s EC is pushed in the call stack, it stores a reference to its parent's lexical environment i.e. the GEC's memory.

// 2) Whenever a new Execution Context is pushed in the Call Stack it holds a reference to the Lexical Environment of its parent, i.e. the EC's memory from where it was invoked.

// 3) Global execution context holds reference to null.

// 4)  Javascript engine first looks for the variable/function being accessed in the local scope of the function, and if not found, it keeps on searching the lexical environment of its parent until it finds the variable/function being accessed.

// 5) The mechanism mentioned in point 4 above is called SCOPE CHAIN.

// 6) If the variable accessed is not found in the Scope Chain, then you will get the variable is not defined error in the  browser's console.
