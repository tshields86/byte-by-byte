/* https://www.byte-by-byte.com/inttoroman/ */

const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const integerToRoman = value => {
  if (value > 3999 || value < 1) return;

  let numeral = '';
  let i = 0;
  while (value > 0) {
    if (value - values[i] >= 0) {
      numeral += numerals[i];
      value -= values[i];
    } else {
      i++;
    }
  }
  return numeral;
};

console.log(integerToRoman(1))
console.log(integerToRoman(2))
console.log(integerToRoman(3))
console.log(integerToRoman(4))
console.log(integerToRoman(5))
console.log(integerToRoman(6))
console.log(integerToRoman(7))
console.log(integerToRoman(8))
console.log(integerToRoman(9))
console.log(integerToRoman(10))
console.log(integerToRoman(49))
console.log(integerToRoman(149))
console.log(integerToRoman(1549))