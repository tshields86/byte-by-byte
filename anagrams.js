/* https://www.byte-by-byte.com/anagrams/ */

/* 
Given two strings, write a function to determine whether they are anagrams.

isAnagram("", "") = true
isAnagram("A", "A") = true
isAnagram("A", "B") = false
isAnagram("ab", "ba") = true
isAnagram("AB", "ab") = false

sort both strings and compare equality
n log n

create a map of occurances chars for first string
substact occurances from the second string, if map size is greater than 1 it is not an anagram

size is n
time is n
*/

const isAnagram = (a, b) => {
  if (a.length !== b.length) return false;

  const charCount = new Map();

  for (const char of a) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of b) {
    if (!charCount.get(char)) return false;
    charCount.set(char, charCount.get(char) - 1);
  }

  return true;
};

console.log(isAnagram('abba', 'baab')); // true