// TODO
/**
 * Q: Create a function that takes an array and returns the types of values (data types) in a new array.
 * Ex: arrDataTypes(["214", true, false, 2, 2.15, [], null])//  ["string", "boolean", "boolean", "number", "number", "object", "object"]
 */

// ES5
function arrayDataTypes(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(typeof arr[i]);
  }
  return newArray;
}

// ES6
function arrayDataTypes(arr) {
  return arr.map(x => typeof (x))
}

// Refactor
const arrayDataTypes = a => a.map(x => typeof x)

// TODO
/**
 *  Q: Given an array, rotates the values clockwise by one (the last value is sent to the first position).
 *  Ex: rotateByOne([20, 15, 26, 8, 4]) ➞ [4, 20, 15, 26, 8]
 */

//ES5
function rotateArrByOne(arr) {
  let lastOne = arr.pop();
  arr.unshift(lastOne);
  return arr;
}

//ES6
let rotateByOne = a => [a.pop(), ...a];

// TODO
/**
 * Create a function that takes an array. This array will contain numbers represented as strings. 
Your function should split this array into two new arrays. The first array should contain only even numbers. 
The second only odd. Then, wrap these two arrays in one main array and return it.
Return an empty array if there are no even numbers, or odd.
EX: cleanUpArray(["9", "4", "5", "8"]) ➞ [[4, 8], [9, 5]]
 */

//ES5
function cleanUpArray(arr) {
  let newArr = [[], []];
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) % 2 == 0) {
      newArr[0].push(parseInt(arr[i]));
    }
    else {
      newArr[1].push(parseInt(arr[i]));
    }
  }
  return newArr;
}

// ES6
function cleanUpArray(arr) {
  var evens = arr.map(Number).filter(x => x % 2 == 0)
  var odds = arr.map(Number).filter(x => x % 2 == 1)
  return [evens, odds]
}

//refactor
const cleanUpArray = arr => arr.reduce((a, c) => (a[c % 2].push(+c), a), [[], []]);

// TODO
/**
 * Q: Create a function that takes a string and returns a string with spaces in between all of the characters.
 * Ex: spaceMeOut("space") ➞ "s p a c e"
 */

// ES5
function spaceMeOut(str) {
  var arr = Array.split(str).join(' ');
  return arr;
}

//ES6
const spaceMeOut = str => [...str].join(' ')

// TODO
/**
 * Q: Create a function that takes an array with numbers and return an array with the elements multiplied by two.
 * Ex: getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]
 */

//ES5
const getMultipliedArr = arr => {
  let mutpliedArr = [];
  for (const element of arr) {
    mutpliedArr.push(element * 2);
  }
  return mutpliedArr;
}

//ES6
function getMultipliedArr(arr) {
  return arr.map(num => num * 2)
}

//refactor
const getMultipliedArr = (arr) => arr.map(el => el * 2)