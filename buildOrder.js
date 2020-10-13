/* https://www.byte-by-byte.com/buildorder/ */

/* 
Given a list of packages that need to be built and the dependencies for each package, determine a valid order in which to build the packages.

input: [
  [],
  [0],
  [0],
  [1, 2],
  [3]
]

output: 0, 1, 2, 3, 4

0:
1: 0
2: 0
3: 1, 2
4: 3

       - 1 <-
      /       \
0  <-           <- 3 <- 4
      \       /
       - 2 <-

*/

const visit = (
  package,  // index
  packages, // array
  visited,  // set
  built,    // set
  result    // array
) => {
  if (visited.has(package)) throw new Error('Graph is not acyclic');

  if (!built.has(package)) {
    visited.add(package);

    for (dependency of packages[package]) {
      visit(dependency, packages, visited, built, result);
    }

    built.add(package);
    visited.delete(package);
    result.push(package);
  }
};

const buildOrder = packages => {
  const result = [];
  const built = new Set();
  const visited = new Set();

  for (let package = 0; package < packages.length; package++) {
    if (!built.has(package)) {
      visit(package, packages, visited, built, result);
    }
  }

  return result;
};

console.log(buildOrder(
  [
    [],
    [0],
    [0],
    [1, 2],
    [3]
  ]
)); // [ 0, 1, 2, 3, 4 ]

console.log(buildOrder(
  [
    [],
    [0],
    [0],
    [1, 2, 5],
    [3],
    []
  ]
)); // [ 0, 1, 2, 5, 3, 4 ]