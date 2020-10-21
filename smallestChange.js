/* https://www.byte-by-byte.com/smallestchange/ */

/* 
Given an input amount of change x, write a function to determine the minimum number of coins required to make that amount of change.

eg. (using American coins) 1, 5, 10, 25
change(1) = 1
change(3) = 3
change(7) = 3
change(32) = 4

eg. (using other coins) 1, 3, 4
change(6) = 2
*/

const smallestChange = (x, coins, cache = new Map()) => {
  if (x === 0) return 0;

  let min = Infinity;
  for (let coin of coins) {
    if (x - coin >= 0) {
      let count;
      if (cache.has(x - coin)) {
        count = cache.get(x - coin);
      } else {
        count = smallestChange(x - coin, coins, cache);
        cache.set(x - coin, count)
      }
      if (min > count + 1) min = count + 1;
    }
  }
  return min;
};



console.log(smallestChange(1, [1, 5, 10, 25])); // 1
console.log(smallestChange(3, [1, 5, 10, 25])); // 3
console.log(smallestChange(7, [1, 5, 10, 25])); // 3
console.log(smallestChange(32, [1, 5, 10, 25])); // 4
console.log(smallestChange(6, [1, 3, 4])); // 2
