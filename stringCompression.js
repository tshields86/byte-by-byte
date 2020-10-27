/* https://www.byte-by-byte.com/stringcompression/ */

/* 
Given a string, write a function to compress it by shortening every sequence
of the same character to that character followed by the number of repetitions.
If the compressed string is longer than the original, you should return the original string.

compress(“a”) = "a"
compress(“aaa”) = "a3"
compress(“aaabbb”) = "a3b3"
compress(“aaabccc”) = "a3b1c3"
*/

const stringCompression = string => {
  let compression = '';

  let sequenceCount = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      sequenceCount++;
    } else {
      compression += `${string[i]}${sequenceCount}`;
      sequenceCount = 1;
    }
  }

  return compression.length < string.length ? compression : string;
};

console.log(stringCompression('a')); // a
console.log(stringCompression('aaa')); // a3
console.log(stringCompression('aaabbb')); // a3b3
console.log(stringCompression('aaabccc')); // a3b1c3