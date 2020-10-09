/* https://www.byte-by-byte.com/findduplicates/ */

/* 
Given an array of integers where each value 1 <= x <= len(array), write a function that finds all the duplicates in the array.

dups([1, 2, 3])    = []
dups([1, 2, 2])    = [2]
dups([3, 3, 3])    = [3]
dups([2, 1, 2, 1]) = [1, 2]

Brute Force: O(n^2) time

Set: O(n) - time
     O(n) - space

Sort: O(nlogn) - time
      O(1) - space

Encoding: O(n) - time
          O(1) - space
*/

// const findDuplicates = arr => {
//   const seen = new Set();
//   const duplicates = new Set();

//   for (const num of arr) {
//     if (seen.has(num)) duplicates.add(num);
//     else seen.add(num);
//   }

//   return [...duplicates];
// };

const findDuplicates = arr => {
  const duplicates = new Set();

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const index = Math.abs(num) - 1;
    
    if (arr[index] < 0) duplicates.add(Math.abs(num));
    else arr[index] = -arr[index];
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.abs(arr[i]);
  }

  return [...duplicates];
};

console.log(findDuplicates(
  [1, 2, 3]
)); // []

console.log(findDuplicates(
  [1, 2, 2]
)); // [2]

console.log(findDuplicates(
  [3, 3, 3]
)); // [3]

console.log(findDuplicates(
  [2, 1, 2, 1]
)); // [1, 2]