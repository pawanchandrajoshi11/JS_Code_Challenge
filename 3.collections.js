// Write a program to store values in a set

//set store unique values of any type
//it can be created empty and then filled with values or can be initialized also
const set = new Set();
set.add(1);
set.add("helo");
set.add(2);
set.add(null);
set.add(1); //this value got ignored by the set
console.log(set); //{1,'helo', 2, null}

// set initialization
const set2 = new Set([1, 2, 3, 1]);
console.log(set2); //{1,2,3} {duplicate value of 1 was ignored}

// Write a program to store values in a MAP

//MAP stores key:value pairs and remembers the original insertion order of the keys
// can be created empty & then added with values or can be initialized later with key : value pairs
const map1 = new Map();
map1.set(1, 100);
map1.set(3, 14.5);
map1.set("test", "apples");

console.log(map1); //{ 1 => 100, 3 => 14.5, 'test' => 'apples' }

const map2 = new Map([
  [1, 509],
  ["fruits", "apples"],
  [3, "three"],
]);
console.log(map2); //{ 1 => 509, 'fruits' => 'apples', 3 => 'three' }
// Unlike objects, Map can have any primitive or object as the key
