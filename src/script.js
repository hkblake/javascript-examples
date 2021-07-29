let name = "Heather";

// our print name function
function printName(name) {
  console.log(name);
}

// our function that takes a function as a parameter
function func(name, callback) {
  callback("Hello " + name);
}

// call func and pass the printName function
func(name, printName);

// call func and pass a function definition
func("function definition", function (variable) {
  console.log(variable);
});

// call func and pass an arrow function
func("ArrowFunction", (variable) => {
  console.log(variable);
});

// set the arrow function to a variable
// we can put the arrow function on oneline
// because it is a one line function
// we can eliminate the parens around name
// because there is only one parameter
let arrowFunction = (name) => console.log(name);

// call func with arrowFunction variable
func("ArrowFunctionVariable", arrowFunction);

let printHi = (name) => "Hi " + name;

console.log(printHi("another example"));
