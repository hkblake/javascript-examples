function printVariable(variable) {
  console.log(variable);
}

let name = "Heather";

function func(name, callback) {
  callback("Hello " + name);
}

func(name, printVariable);
