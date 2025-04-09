/**
Write a function that will both flatten and
apply an (optional) function to an array of arbitrarily nested arrays of integers.

You may not use any library array flattening functions (map functions are fine).

Examples:

flatMap([[1,2,[3]],4]) = [1,2,3,4]
flatMap([[1,2,[3]],4], (x) => x+2)=[3,4,5,6]

[execution time limit] 30 seconds
[memory limit] 4g
*/

// Time complexity: O(n) where n is the length of arr
// Space complexity: O(n)
function recursionFlatMap(arr, mapFn, newArr) {
  arr.forEach((item) => {
    if (typeof item === "number") {
      if (mapFn) {
        newArr.push(mapFn(item));
      } else {
        newArr.push(item);
      }
    } else {
      recursionFlatMap(item, mapFn, newArr);
    }
  });
}

function flatMap(arr, mapFn) {
  const newArr = [];
  recursionFlatMap(arr, mapFn, newArr);
  return newArr;
}

console.log(flatMap([[1, 2, [3]], 4]));
console.log(flatMap([[1, 2, [3]], 4], (x) => x + 2));
