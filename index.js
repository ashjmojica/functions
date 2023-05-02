//Write a function that takes two numbers as arguments and returns their sum.
function addNumbers(c, d) {
  return c + d;
}

//Write a function that takes a string as an argument and returns the length of the string.
function countCharacters(string) {
  let counts = {};
  for (let i = 0; i < string.length; i++) {
    if (!counts.hasOwnProperty(string[i])) {
      counts[string[i]] = 0;
    }
    counts[string[i]]++;
  }
  return counts;
}
//Write a function that takes an array of numbers as an argument and returns the largest number in the array.
const arr = [5, 204, 33, 40, 19, 94];
console.log(Math.max(...arr));

//Write a function that takes an array of strings as an argument and returns a new array with all the strings capitalized.
function changeToUpperCase(changes) {
    return changes.toUpperCase();
}
const result = changeToUpperCase ["panda", "giraffe", "cow"];
console.log(result);

//Write a function that takes a number as an argument and returns true if the number is even, and false if it is odd.
const number = prompt("Enter a number: ");

if (number % 2 == 0) {
  console.log("The number is even.");
}

else {
  console.log("The number is odd.");
}

//Write a function that takes two arrays as arguments and returns a new array that contains all the elements from both arrays, in the order they appear.
function twoArrays(arr1, arr2) {
    const newArr = [];
    const ordArr = arr1.concat(arr2).sort();
      for(var i=0; i<ordArr.length; i++) {
       if(ordArr[i] !== ordArr[i+1] && ordArr[i] !== ordArr[i-1]){
       newArr.push(ordArr[i]);
       }
   }

   return newArr;
}


//Write a function that takes a string as an argument and returns a new string with all the vowels removed.
function removeVowels(input) {
  return input.replace(/[aeiouAEIOU]/g, "");
}

//Write a function that takes an array of numbers as an argument and returns a new array with all the numbers doubled.
function doubleValues(array) {
  return array.concat.apply(
    [],
    array.map(function (el) {
      return [el, el];
    })
  );
}

console.log(doubleValues([1, 2, 3]));

//Write a function that takes an array of strings as an argument and returns a new array with all the strings sorted in alphabetical order.
function alphabet_order(str) {
  return str.split("").sort().join("");
}
console.log(alphabet_order("webmaster"));
//Write a function that takes a number as an argument and returns the factorial of that number (i.e., the product of all  numbers from 1 to that number).
function factorialize(num) {
  return num;
}
factorialize(8);