class ma__class {}

function sayHello() {
  return "Hello";
}

var variable = {
  a: "Lionnel"
};

console.log("Function call  : ", variable);

variable = 1;
console.log("Function call_2  : ", variable);

variable = function() {
  return 2;
};
console.log("Function call_2  : ", variable());

console.log("Function call  : ", sayHello());
