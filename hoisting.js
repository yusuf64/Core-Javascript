// in this code we will learn what is hoisting in javascript

console.log(c);
getName();

function getName() {
  console.log("Hello Javascript!");
}

var c = 786;

// &&&&&&&&&& NOTE &&&&&&&&&&&&&&

// As you can see here we are accessing teh variable name first by console.log and then we are declaring it here we can see the the value of c undefinded this is because instead of giving error all the varibale decalre are stored in memorey allocation context where the values of theat variable sets to undefined and when we execute that code the js will execute each code line by line so first it will gets the value undefinde of c variable adn for the function it gets stored as it is
