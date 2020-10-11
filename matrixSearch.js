/* https://www.byte-by-byte.com/matrixsearch */

/* 
Given an n x m array where all rows and columns are in sorted order, write a function to determine whether the array contains an element x.

contains(
  [
    [1,  2,  3,  4],
    [5,  6,  7,  8],
    [9, 10, 11, 12]
  ],
  5
) = true
*/

/*
If the first number in each row is larger than the last number in the previous row
O(log n * m) 
*/
// const binarySearchMatrix = (arr, val) => {
//   let leftIdx = 0;
//   let rightIdx = arr.length - 1;

//   while (leftIdx <= rightIdx) {
//     const midIdx = Math.floor((leftIdx + rightIdx) / 2);
//     const midVal = arr[midIdx];

//     if (Array.isArray(midVal)) {
//       const start = midVal[0];
//       const end = midVal[midVal.length - 1];

//       if (val < start) rightIdx = midIdx - 1;
//       else if (val > end) leftIdx = midIdx + 1;
//       else return binarySearchMatrix(midVal, val);
//     } else {
//       if (val === midVal) return true;
//       if (val < midVal) rightIdx = midIdx - 1;
//       if (val > midVal) leftIdx = midIdx + 1;
//     }
//   }

//   return false;
// };

// const matrixSearch = (matrix, value) => {
//   if (matrix.length === 0 || matrix[0].length == 0) return false;
//   return binarySearchMatrix(matrix, value);
// };

/*
If the first number in each row is larger than the rist number in the previous row
i.e.
[
  [1, 2, 3, 6],
  [2, 3, 4, 7],
  [3, 4, 5, 8],
  [4, 5, 6, 9]
]
O(n + m)
*/
const matrixSearch = (matrix, value) => {
  if (matrix.length === 0 || matrix[0].length == 0) return false;
  
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix[0].length && col >= 0) {
    if (matrix[row][col] === value) return true;
    if (matrix[row][col] < value) row++;
    else col--;
  }

  return false;
};

console.log(matrixSearch(
  [
    [1,  2,  3,  4],
    [5,  6,  7,  8],
    [9, 10, 11, 12]
  ],
  5
)); // true

console.log(matrixSearch(
  [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25]
  ],
  20
)); // true

console.log(matrixSearch(
  [
    [1,  2,  3,  4],
    [5,  6,  7,  8],
    [9, 10, 11, 12]
  ],
  0
)); // false

console.log(matrixSearch(
  [
    [1, 2, 3, 6],
    [2, 3, 4, 7],
    [3, 4, 5, 8],
    [4, 5, 6, 9]
  ],
  5
)); // true

console.log(matrixSearch(
  [
    [1, 4, 7, 11],
    [8, 9, 10, 20],
    [11, 12, 17, 30],
  ],
  10
)); // true
