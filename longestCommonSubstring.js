/* https://www.byte-by-byte.com/longestsubstring/ */

/* 
Given two strings, write a function that returns the longest common substring.

longestSubstring("ABAB", "BABA") = "ABA"

   B  A  B  A
A [0, 0, 0, 0]
B [0, 0, 0, 0]
A [0, 0, 0, 0]
B [0, 0, 0, 0]

"ABAB"
    ^
"BABA"
    ^
   B  A  B  A
A [0, 1, 0, 1]
B [1, 0, 2, 0]
A [0, 2, 0, 3]
B [1, 0, 3, 0]
*/

const longestCommonSubstring = (a, b) => {
  let result = '';
  if (a.length === 0 || b.length === 0) return result;

  const cache = Array.from({ length: a.length }, () => (
    Array.from({ length: b.length }).fill(0)
  ));
  let len = 0;
  
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i] === b[j]) {
        if (i === 0 || j === 0) cache[i][j] = 1;
        else cache[i][j] = cache[i - 1][j - 1] + 1;

        if (cache[i][j] > len) {
          len = cache[i][j];
          result = a.substring(i - len + 1, i + 1);
        }
      }
    }
  }

  return result;
};

console.log(longestCommonSubstring('ABAB', 'BABA')); // ABA
console.log(longestCommonSubstring('AATBABWPERT', 'ETBAAA')); // TBA
console.log(longestCommonSubstring('ABAB', '')); // ''
