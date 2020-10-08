/* ​https://www.byte-by-byte.com/median/ */

/* 
Find the median of two sorted arrays of equal length.
[1, 3, 5]
[2, 4, 6]
3.5


[1, 2, 3, 4,  5,  6]
[0, 0, 0, 0, 10, 10]
2.5

[0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 10, 10]
(2 + 3) / 2 = 2.5

[1, 2, 3, 4,  5,  6]
3.5
[0, 0, 0, 0, 10, 10]
0

[1, 2,  3,  4]
2.5
[0, 0, 10, 10]
5

[2,  3,  4]
3
[0, 0, 10]
0

[2,  3]
[0, 10]

take larger of the first and smaller of the second

[2, 3] (2 + 3) / 2 = 2.5
*/

/* O(n logn) time and O(n) space: concat arays and then sort and then find median  */


/* O(n) time & space approach: merge two arrays and find median of new array */

// const merge = (arr1, arr2) => {
//   const mergedArr = [];

//   let arr1Idx = 0;
//   let arr2Idx = 0;
//   while (arr1Idx < arr1.length || arr2Idx < arr2.length) {
//     const arr1Curr = arr1[arr1Idx];
//     const arr2Curr = arr2[arr2Idx];

//     if (arr1Idx >= arr1.length) {
//       mergedArr.push(arr2Curr);
//       arr2Idx++;
//     } else if (arr2Idx >= arr2.length) {
//       mergedArr.push(arr1Curr);
//       arr1Idx++;
//     } else if (arr1Curr <= arr2Curr) {
//       mergedArr.push(arr1Curr);
//       arr1Idx++;
//     } else {
//       mergedArr.push(arr2Curr);
//       arr2Idx++;
//     }
//   }

//   return mergedArr;
// };

// const getMedian = arr => {
//   const mid = Math.floor(arr.length / 2);
//   if (arr.length % 2 === 0) {
//     return (arr[mid] + arr[mid - 1]) / 2;
//   }
//   return arr[mid];
// };

// const median = (arr1, arr2) => {
//   const mergedArr = merge(arr1, arr2);

//   return getMedian(mergedArr);
// };


/* O(logn) time and O(1) space: divide and conquer */

class SubArray {
  constructor(arr) {
    this.underlying = arr;
    this.start = 0;
    this.size = arr.length;
  }

  // i = start index, j = end index
  setSubArray(i, j) {
    if (i > j) throw new Error();
    if (j > this.size) throw new Error();
    this.start += i;
    this.size = j - i + 1;
  }

  getFirst() {
    return this.underlying[this.start];
  }

  getLast() {
    return this.underlying[this.start + this.size - 1];
  }

  getMedian() {
    const midIdx = this.start + Math.floor(this.size / 2);
    if (this.size % 2 === 0) {
      return (this.underlying[midIdx - 1] + this.underlying[midIdx]) / 2;
    }
    return this.underlying[midIdx];
  }
}

const median = (arr1, arr2) => {
  if (arr1.length === 0 || arr1.length !== arr2.length) {
    throw new Error();
  }

  const subArr1 = new SubArray(arr1);
  const subArr2 = new SubArray(arr2);

  while (subArr1.size > 2) {
    const median1 = subArr1.getMedian();
    const median2 = subArr2.getMedian();

    if (median1 === median2) return median1;

    if (median1 > median2) {
      subArr1.setSubArray(0, Math.floor(subArr1.size / 2));
      subArr2.setSubArray(Math.ceil(subArr2.size / 2 - 1), subArr2.size - 1);
    }
    if (median1 < median2) {
      subArr1.setSubArray(Math.ceil(subArr1.size / 2 - 1), subArr1.size - 1);
      subArr2.setSubArray(0, Math.floor(subArr2.size / 2));
    }
  }

  if (subArr1.size === 1) {
    return (subArr1.getFirst() + subArr2.getFirst()) / 2;
  }
  
  if (subArr1.size === 2) {
    return (
      Math.max(subArr1.getFirst(), subArr2.getFirst()) +
      Math.min(subArr1.getLast(), subArr2.getLast())
    ) / 2;
  }
};

console.log(median(
  [1, 3, 5],
  [2, 4, 6]
)); // 3.5

console.log(median(
  [1, 2, 3, 4, 5, 6],
  [0, 0, 0, 0, 10, 10]
)); // 2.5

console.log(median(
  [1, 2, 6, 7, 9, 8],
  [0, 3, 4, 5, 10, 11]
)); // 5.5
