/* https://www.byte-by-byte.com/fibonacci/ */

/* 
Given an integer n, write a function to compute the nth Fibonacci number.

fibonacci(1) = 1
fibonacci(5) = 5
fibonacci(10) = 55

1, 1, 2, 3, 5, 8, 13, 21

fib 5
i = 5
prev = 3
curr = 5
temp = 3
*/

/* Top down approach O(n) Time and O(n) Space */
const fibonacciRecursion = (n, memo = {}) => {
  if (memo[n]) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 1;

  return memo[n] = fibonacciRecursion(n - 1, memo) + fibonacciRecursion(n - 2, memo);
};

console.log(fibonacciRecursion(0)); // 0
console.log(fibonacciRecursion(1)); // 1
console.log(fibonacciRecursion(2)); // 1
console.log(fibonacciRecursion(3)); // 2
console.log(fibonacciRecursion(4)); // 3
console.log(fibonacciRecursion(5)); // 5
console.log(fibonacciRecursion(10)); // 55

/* Bottom up approach O(n) Time and O(1) Space */
const fibonacci = n => {
  if (n === 0 || n === 1) return n;

  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    const temp = curr;
    curr = curr + prev;
    prev = temp;
  }
  return curr;
};

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55

console.time('fibonacciRecursion');
console.log(fibonacciRecursion(1000));
console.timeEnd('fibonacciRecursion');

console.time('fibonacci');
console.log(fibonacci(1000));
console.timeEnd('fibonacci');
