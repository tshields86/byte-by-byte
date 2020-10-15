/* https://www.byte-by-byte.com/sum/ */

/* 
Given two integers, write a function to sum the numbers without using any arithmetic operators.

arithmetic operators + - * / and all math functions

sum(3, 4) = 7

^
1, 0 -> 1
0, 0 -> 0
1, 1 -> 0

  1 0 0 1
+ 0 0 1 1
---------
  1 0 1 0
+ 0 0 1 0
---------
  1 0 0 0
+ 0 1 0 0
---------
  1 1 0 0
  0 0 0 0

& << 1
0, 0 -> 0
1, 0 -> 0
1, 1 -> 1

*/

const sum = (a, b) => {
  if (b == 0) return a;
  const partialSum = a ^ b;
  const carry = (a & b) << 1;
  return sum(partialSum, carry);
};

console.log(sum(3, 4)); // 7
console.log(sum(10, 15)); // 25