/* https://www.byte-by-byte.com/swapvariables/ */

// const swapVariables = (a, b) => {
//   [a, b] = [b, a];
//   console.log({ a, b });
// };

const swapVariables = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log({ a, b });
};

// const swapVariables = (a, b) => {
//   a = a ^ b;
//   b = a ^ b;
//   a = a ^ b;
//   console.log({ a, b });
// };

swapVariables(10, 20);