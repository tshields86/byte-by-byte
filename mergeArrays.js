/* https://www.byte-by-byte.com/mergearrays */

/* 
Given 2 sorted arrays, A and B, where A is long enough to hold the contents of A and B,
write a function to copy the contents of B into A without using any buffer or additional memory.

A = {1,3,5,0,0,0}
B = {2,4,6}
mergeArrays(A, B)
A = {1,2,3,4,5,6}

O(a+b)
*/

const mergeArrays = (a, b) => {
  let mergeIndex = a.length - 1;
  let aIndex = mergeIndex - b.length;
  let bIndex = b.length - 1;

  while (aIndex >= 0 && bIndex >= 0) {
    if (a[aIndex] > b[bIndex]) {
      a[mergeIndex--] = a[aIndex--];
    } else {
      a[mergeIndex--] = b[bIndex--];
    }
  }

  while (aIndex >= 0) a[mergeIndex--] = a[aIndex--];
  while (bIndex >= 0) a[mergeIndex--] = b[bIndex--];

  return a;
};

console.log(mergeArrays(
  [1, 3, 5, 0, 0, 0],
  [2, 4, 6]
));