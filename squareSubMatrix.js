/* https://www.byte-by-byte.com/squaresubmatrix */

/* 
Given a 2D array of 1s and 0s, find the largest square subarray of all 1s.

subarray(
  [
    [1, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 0, 0]
  ]
) = 2

[
  [1, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 0, 0]
]
[
  [1, 1, 1, 0],
  [1, 2, 2, 1],
  [1, 2, 0, 0]
]

time O(mn)
space O(mn)
*/


const squareSubMatrix = matrix => {
  const sizes = Array.from({ length: matrix.length }, () => {
    return new Array(matrix[0].length).fill(0);
  });

  let max = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (!matrix[i][j]) continue;

      if (i === 0 || j === 0) sizes[i][j] = 1;
      else {
        const minDistFromEdge = Math.min(
          sizes[i][j - 1],
          sizes[i - 1][j],
          sizes[i - 1][j - 1]
        );
        sizes[i][j] = minDistFromEdge + 1;
      }
  
      max = Math.max(max, sizes[i][j]);
    }
  }

  return max;
};

console.log(squareSubMatrix(
  [
    [1, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 0, 0]
  ]
));

console.log(squareSubMatrix(
  [
    [0, 0, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 0]
  ]
));

console.log(squareSubMatrix(
  [
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
));
