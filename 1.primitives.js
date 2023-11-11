// Typeof Operator

typeof 50; //   "number"
typeof "text"; //   "string"
typeof true; //   "boolean"
typeof undefined; //   "undefined"
typeof function () {}; //   "function"
typeof 10n; //   "bigint"
typeof Symbol(); //   "symbol"
typeof [1, 2]; //   "object"
typeof {}; //   "object"

typeof NaN; //   "number"        (NaN is Not a Number)
typeof undeclaredVar; //   "undefined"     (undeclaredVariable is never declared)
typeof Infinity; //   "number"        (Infinity, -Infinity, -0 are all valid numbers in JavaScript)
typeof null; //   "object"        (This stands since the beginning of JavaScript)
typeof /regex/; //   "object"        (regular expressions start and end with '/' in literal form)

//3. Conversion of Number to String and vice versa
//number to string conversion
const num = 10;
console.log(typeof String(num)); //string, "12"

num.toString(); //"12"
num + ""; //"12"

//string to number conversion
const str = "123";
Number(str); //123
+str; //123
parseInt(str); //123

//note: if number is floating, parseFloat can be used. parseInt and parseFloat are the methods present on the Number object also

//4. Write a code to operate on integer numbers outside the range of numbers in JavaScript

// BigInt is a datatype in JS which facilitates the mathematical operations on huge value of integer number
// It is represented by a suffix 'n' for number value

const bigNum1 = 1233423423423n;
const bigNum2 = 3420423423434n;

const bigSum = bigNum1 + bigNum2;
console.log(bigSum); //big integers sum

const bigDiff = bigNum2 - bigNum1;

const num3 = 15;
const total = bigNum1 + bigNum2 + BigInt(num3); //sum with a normal integer number
//The big integers cannot be operated directly with normal numbers datatypes.
// (10n + 25) is not allowed

// 5. Use of ||, &&, ?? and !!

// Logical OR (||) - is true if one or more of its operands is true
//Logical AND (&&) - is true if both of its operands are true
// Nullish coalescing operator (??) - returns the right hand side operand when its left hand side operand is null or undefined, and otherwise returns its left-hand side operand
// Double NOT (!!) - used to explicitly force the conversion of any value to the corresponding boolean primitive

// const num1 = 10, num2 = 20;

//OR OPERATOR
true || false; // true
false || false; // false
false || num1; // 10
0 || num2; // 20
"text" || true; // "text"
num1 > 0 || num2 < 0; // true

//AND OPERATOR
true && true; // true
true && false; // false
true && num1; // 10
num1 && num2; // 20
"text" && num1 + num2; // 30
num1 > 0 && num2 < 0; // false

//NULLISH COALESCING OPERATOR
undefined ?? 10; // 10
null ?? 20; // 20
false ?? num1; // false
0 ?? num2; // 0

//DOUBLE NOT OPERATOR
!!10; // true
!!{}; // true
!!""; // false
!!0; // false

// note: it is not possible to combine both the AND operator and OR operator directly with ??

// 6. Show the frequently and commonly used methods available on Number object with coding examples

// isInteger - used to check if the given number is integer or not
Number.isInteger(1.5); //false

// parseInt - used to convert a given value to integer
Number.parseInt("123x"); //123

// parseFloat - used to convert a given value to integer
Number.parseFloat("-12.96x"); //-12.96

// isNaN - used to check if the given value is NaN or not
Number.isNaN("text"); //false
Number.isNaN("text" - 2); //true
Number.isNaN(NaN); //true

// toFixed - used to limit the number of digits after the decimal place
(34.12314).toFixed(2); //34.12
(34).toFixed(3); //34.000

// note: NaN is special type of number and this value is results by the invalid mathematical operations such as substraction of number and text
//even if the name says NOT A NUMBER, it is a type of "number"

// 10. Write a code to iterate over a string
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}

for (let index in str) {
  console.log(str[index]);
}

for (let value of str) {
  console.log(value);
}

[...str].forEach((value) => console.log(value));
