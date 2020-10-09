/* https://www.byte-by-byte.com/zeromatrix/ */

/* 
Given a boolean matrix, update it so that if any cell is true, all the cells in that row and column are true.

[true,  false, false]      [true,  true,  true ]
[false, false, false]  ->  [true,  false, false]
[false, false, false]      [true,  false, false]

row map {
  0 => true
  1 => false
  2 => false
}
col map {
  0 => true
  1 => false
  2 => false
}

- or -

row set {
  0
}

col set {
  0
}

[
  [false, false, false],
  [false, true,  false],
  [false, false, false]
]

[
  [false, true,  false],
  [true,  true,  false],
  [false, false, false]
]

[
  [false, true,  false],
  [true,  true,  true],
  [false, true,  false]
]

[
  [false, true, false],
  [true,  true,  true],
  [false, true, false]
]

*/

const zeroMatrixSets = matrix => {
  const trueRows = new Set();
  const trueCols = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === false) continue;

      trueRows.add(i);
      trueCols.add(j);
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (trueRows.has(i) || trueCols.has(j)) {
        matrix[i][j] = true;
      }
    }
  }

  return matrix;
};

const zeroMatrix = matrix => {
  let rowZero = false;
  let colZero = false;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (!matrix[i][j]) continue;

      if (i === 0) rowZero = true;
      if (j === 0) colZero = true;

      matrix[i][0] = true;
      matrix[0][j] = true;
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0]) {
      for (let j = 1; j < matrix[0].length; j++) {
        matrix[i][j] = true;
      }
    }
  }

  for (let j = 1; j < matrix[0].length; j++) {
    if (matrix[0][j]) {
      for (let i = 1; i < matrix.length; i++) {
        matrix[i][j] = true;
      }
    }
  }

  if (rowZero) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[0][j] = true;
    }
  }

  if (colZero) {
    for (let i = 1; i < matrix.length; i++) {
      matrix[i][0] = true;
    }
  }

  return matrix;
};

console.log(zeroMatrix(
  [
    [true,  false, false],
    [false, false, false],
    [false, false, false]
  ]
)); /* 
  [
    [true, true, true],
    [true, false, false],
    [true, false, false]
  ]
*/

console.log(zeroMatrix(
  [
    [false, false, false],
    [false, true,  false],
    [false, false, false]
  ]
)); /* 
  [
    [false, true, false],
    [true,  true,  true],
    [false, true, false]
  ]
*/

console.log(zeroMatrix(
  [
    [false, true, false],
    [false, false,  false],
    [false, false, false]
  ]
)); /* 
  [
    [true, true, true],
    [false, true,  false],
    [false, true, false]
  ]
*/

console.log(zeroMatrix(
  [
    [true,  false, false, false],
    [false, false, false, true],
    [false, false, false, false]
  ]
)); /* 
  [
    [ true, true, true, true ],
    [ true, true, true, true ],
    [ true, false, false, true ]
  ]
*/