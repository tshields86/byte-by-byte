/* https://www.byte-by-byte.com/matrixproduct */

/* 
Given a matrix, find the path from top left to bottom right with the greatest product by moving only down and right.

[1, 2, 3]
[4, 5, 6]
[7, 8, 9]

1 -> 4 -> 7 -> 8 -> 9
2016

[-1, 2, 3]
[4, 5, -6]
[7, 8, 9]

-1 -> 4 -> 5 -> -6 -> 9
1080
*/

/* 
[
  [1, 2],
  [4, 5],
]
-1 -> 4 -> 5
= 20
*/

const matrixProduct = matrix => {
  const maxCache = Array.from({ length: matrix.length }, () => new Array(matrix[0].length));
  const minCache = Array.from({ length: matrix.length }, () => new Array(matrix[0].length));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const curVal = matrix[i][j];

      if (i === 0 && j === 0) {
        maxCache[i][j] = curVal;
        minCache[i][j] = curVal;
        continue;
      }

      let maxVal = -Infinity;
      let minVal = Infinity;

      if (i > 0) {
        const tempMax = Math.max(curVal * maxCache[i - 1][j], curVal * minCache[i - 1][j]);
        maxVal = Math.max(tempMax, maxVal);
        const tempMin = Math.min(curVal * maxCache[i - 1][j], curVal * minCache[i - 1][j]);
        minVal = Math.min(tempMin, minVal);
      }

      if (j > 0) {
        const tempMax = Math.max(curVal * maxCache[i][j - 1], curVal * minCache[i][j - 1]);
        maxVal = Math.max(tempMax, maxVal);
        const tempMin = Math.min(curVal * maxCache[i][j - 1], curVal * minCache[i][j - 1]);
        minVal = Math.min(tempMin, minVal);
      }

      maxCache[i][j] = maxVal;
      minCache[i][j] = minVal;
    }
  }

  return maxCache[matrix.length - 1][matrix[0].length - 1];
};

console.log(matrixProduct(
  [
    [1, 2],
    [4, 5]
  ]
)); // 20

console.log(matrixProduct(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
)); // 2016

console.log(matrixProduct(
  [
    [-1, 2, 3],
    [4, 5, -6],
    [7, 8, 9]
  ]
)); // 1080