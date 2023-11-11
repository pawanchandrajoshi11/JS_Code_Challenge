// 1. Write a function which returns another function and execute it after calling
function outer() {
  function inner() {
    console.log("This is inside Inner function");
  }
  return inner;
}

var funcInner = outer();
funcInner(); //This is inside Inner function

//2. Write a function which executes another function received as an argument
function callbackExecutor(callback) {
  if (callback === "function") {
    callback();
  }
}

function callbackFunc() {
  console.log("Callback function executed");
}

callbackExecutor(callbackFunc); //Callback function executed

//Create a function having no parameters declared and print all the arguments passed to it.
function func() {
  for (let key in arguments) {
    console.log(arguments[key]);
  }
}

func(1, "Hey", true);
// output:
// 1
// Hey
// true

// note: "arguments" is an array like object accessible inside functions that contains the values of the arguments passed to that function

// 4. Write a function which executes only if the number of arguments match the number of parameters the function is expecting
// note: The number of parameters declared in a function can be obtained by accessing the length property of the function
function tempFunc(a, b, c) {
  if (tempFunc.length === arguments.length) {
    console.log("Number of arguments passed match the expected arguments");
  } else {
    throw new Error(
      "Number of arguments passed do not match the expected arguments"
    );
  }
}

tempFunc(2, 4, 6);

// 5. Design a function which can receive a variable number of arguments in parameters and print them
function varArgsFunc(...params) {
  params.forEach(function (value, index) {
    console.log(index, ":", value);
  });
}

varArgsFunc("Yolo", ",", "World", "!>!");

// 6. Show the most common ways of creating functions in JS
// regular function as a function statement
// function functionName(params) {
//   // code
// }

// // regular function as function expression
// const functionName = function (params) {
//   // code
// };

// // arrow function as a function expression
// const functionName = (params) => {
//   // code
// };

// note: arrow functions are also called fat arrow functions

// 3.Code the different forms of arrow functions for varying number of parameters
const noArgsFunc = () => {
  return "no args passed";
};

const singleArgFunc1 = (arg1) => "arguement is" + arg1;

const singleArgFunc2 = (arg1) => {
  console.log("arg is" + arg1);
};

const twoArgsFunc = (arg1, arg2) => {
  return arg1 + arg2;
};
// same for three args functions

// 8. Write a program where hoisting can be visualized

// In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.
// Basically, it gives us an advantage that no matter where functions and variables are declared,
// they are moved to the top of their scope regardless of whether their scope is global or local.
num = 10;
printHello();
// nonHoistedFunc(); //this will throw an error, that it is not a function

var num;
function printHello() {
  console.log("hello");
}

var nonHoistedFunc = function () {
  //function expressions do not get hoisted
  console.log("Hello");
};

// note: function statement and variable declared with VAR are accessible before they appear in the code

// 9. Code an Immediately invoked function expression (IIFE) and show the different ways of executing it

// IIFE is a JS function that runs as soon it is defined
(function IIFE() {
  console.log("I am an immediately invoked function");
})();

// 10. Create an IIFE which receives arguments and executes

// Arguments can be passed in the same way as when calling a regular functions
// Multiple arguments can be passed similar to function invocation with arguments
(function IIFE(param1, param2) {
  console.log("I am an Immediately invoked function");
  console.log("Parameter 1: " + param1);
  console.log("Parameter 2: " + typeof param2);
  console.log("Parameter 2 output: " + param2());
})("hello", function () {
  return "I am a string from a function passed to IIFE";
}); //a string and a function is passed as arguements to the IIFE

// 11. Show the usage of IIFE to set a value of a variable
var randomNumber = (function () {
  return Math.floor(Math.random() * 100);
})();

// 12. Write a function to return multiple values from a function
// In general functions are designed to return a single value.
// Generators are a special type of functions which return an iterator which in turn can be used to send & receive values.

function multipleValueReturn() {
  const a = 5,
    b = 10;
  return [a, b];
}

const [x, y] = multipleValueReturn();


// 13. Write a function which can set default values to the parameters of function when an argument is not passed. Also show how to use exisiting parameters to set the value of another parameter
// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed
function defaultValueFunc(
  num = 10,
  num2 = 20,
  bool = false,
  sum = num + num2,
  string = "Hello"
) {
  console.log(num, string, bool, sum);
}
 
// driver code
defaultValueFunc(); //  10, 'Hello', false, 30
defaultValueFunc(4, 8); //  4, 'Hello', false, 12
defaultValueFunc(10, 4, true); //  10, 'Hello', true, 14
defaultValueFunc(5, 6, false, 11); //  5, 'Hello', false, 11
defaultValueFunc(undefined, undefined, false); //  10, 'Hello', false, 30

// Notes: The default values are set only for missing or undefined. null and other falsy values are considered as valid arguments and default will not be set

