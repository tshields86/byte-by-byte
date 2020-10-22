/* https://www.byte-by-byte.com/twomissingnumbers/ */

/* 
Given an array containing all the numbers from 1 to n except two, find the two missing numbers.


missing([4, 2, 3]) = 1, 5

n = length + 2

Sort O(nlogn) and itterate finding gaps
O(1) space
4,2,3
2,3,4

O(n) time and space
Create a set of numbers, and iterate from 1 to n finding two absent numbers


O(n) time O(1) space
[1,2,3,4,5,6]
[1,2,5,6] => 3,4

sum = 3+4 = 7
half of 7 is 3

1^2^3 ^ 1^2 = 3
4^5^6 ^ 5^6 = 4
*/

const twoMissingNumbers = arr => {
  const size = arr.length + 2;

  const totalSum = (size * (size + 1)) / 2;
  const arrSum = arr.reduce((sum, num) => sum + num, 0);
  const pivot = Math.floor((totalSum - arrSum) / 2);

  let totalLeftXor = 0;
  let arrLeftXor = 0;
  let totalRightXor = 0;
  let arrRightXor = 0;

  for (let i = 1; i <= size; i++) {
    if (i <= pivot) totalLeftXor ^= i;
    else totalRightXor ^= i;
  }

  for (let num of arr) {
    if (num <= pivot) arrLeftXor ^= num;
    else arrRightXor ^= num;
  }

  return [
    totalLeftXor ^ arrLeftXor,
    totalRightXor ^ arrRightXor
  ];
};

console.log(twoMissingNumbers([4, 2, 3])); // [1, 5]
console.log(twoMissingNumbers([1, 2, 5, 6])); // [3, 4]