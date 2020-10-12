/* https://www.byte-by-byte.com/permutations/ */

/* 
Write a function that returns all permutations of a given list.

permutations({​1​, ​2​, ​3​})
[
  [​1​, ​2​, ​3​],
  [​1​, ​3​, ​2​],
  [​2​, ​1​, ​3​],
  [​2​, ​3​, ​1​],
  [​3​, ​1​, ​2​],
  [​3​, ​2​, ​1​]
]

Write a function that returns all permutations of a given string.
permutations('abc')
[ 'ABC', 'ACB', 'BAC', 'BCA', 'CBA', 'CAB' ]
*/

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const arrayPermutations = (arr, start = 0, result = []) => {
  if (start >= arr.length) result.push([...arr]);
  else {
    for (let i = start; i < arr.length; i++) {
      swap(arr, start, i);
      arrayPermutations(arr, start + 1, result);
      swap(arr, start, i);
    }
  }
  return result;
};

const stringPermutations = (string, prefix = '', result = []) => {
  if (string.length === 0) result.push(prefix);
  else {
    for (let i = 0; i < string.length; i++) {
      stringPermutations(
        string.slice(0, i) + string.slice(i + 1, string.length),
        prefix + string.charAt(i),
        result
      );
    }
  }
  return result;
}

const permutations = input => Array.isArray(input)
  ? arrayPermutations(input)
  : stringPermutations(input);

console.log(permutations([1, 2, 3])); /* 
[
  [ 1, 2, 3 ],
  [ 1, 3, 2 ],
  [ 2, 1, 3 ],
  [ 2, 3, 1 ],
  [ 3, 2, 1 ],
  [ 3, 1, 2 ]
]
*/

console.log(permutations('ABC')); /* 
[ 'ABC', 'ACB', 'BAC', 'BCA', 'CBA', 'CAB' ]
*/