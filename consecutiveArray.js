/* ​https://www.byte-by-byte.com/consecutivearray/ */

/* 
Given an unsorted array, find the length of the longest sequence of consecutive numbers in the array.

consecutive([4, 2, 1, 6, 5]) = 3, [4, 5, 6]
consecutive([5, 5, 3, 1]) = 1, [1], [3], or [5]

Sort: O(nlogn) - time
      O(1) - space (if sort in place) else O(n)

Set: O(n) - time
     O(n) - space

[4, 2, 1, 6, 5] => {4, 2, 1, 6, 5}
 ^
*/

const consecutiveArray = arr => {
  const set = new Set(arr);
  let maxConsecutive = 0;

  set.forEach(num => {
    if (set.has(num - 1)) return;
    let consecutive = 1;
    while (set.has(++num)) consecutive++;
    maxConsecutive = Math.max(maxConsecutive, consecutive);
  })

  return maxConsecutive;
};

console.log(consecutiveArray(
  [4, 2, 1, 6, 5]
)); // 3

console.log(consecutiveArray(
  [5, 5, 3, 1]
)); // 1