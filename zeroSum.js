/* https://www.byte-by-byte.com/zerosum */

/*
Given an array, write a function to find any subarray that sums to zero, if one exists.

zeroSum([1, 2, -5, 1, 2, -1]) = [2, -5, 1, 2]
[1, 2, -5, 1, 2, -1]
 0  1  3  -2 -1   1  0

zeroSum([2, -5, 4, 6, -10, 7, 2]) = [4, 6, -10]
[2, -5, 4, 6, -10, 7, 2]
 0  2  -3  1  7   -3  4  6

[1, 2, -1, -2]
 0  1   3   2  0     

*/

const zeroSum = arr => {
  const sums = new Map();

  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (sums.has(sum)) {
      const startIndex = sums.get(sum);
      return arr.slice(startIndex, i);
    } else if (i === arr.length) break;

    sums.set(sum, i);
    sum += arr[i];
  }

  return null;
};

console.log(zeroSum(
  [1, 2, -5, 1, 2, -1]
)); // [2, -5, 1, 2]

console.log(zeroSum(
  [2, -5, 4, 6, -10, 7, 2]
)); // [4, 6, -10]

console.log(zeroSum(
  [1, 2, -1, -2]
)); // [1, 2, -1, -2]

console.log(zeroSum(
  [2, -5, 4, 6, -16, 7, 10]
)); // null