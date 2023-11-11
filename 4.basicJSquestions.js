// 1. Explain the concepts of call, apply, and bind in JavaScript. Provide examples
// call, apply and bind are methods which are used to change "this" value in functions
const person = { name: "Alice" };

function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

greet.call(person, "Hello"); //Hello, Alice!
greet.apply(person, ["Hey"]); //Hey, Alice!

const newGreet = greet.bind(person);
newGreet("Hii"); //Hii, Alice!


//difference between == and === keyword
const a = 5, b = "5";
console.log(a === b);

