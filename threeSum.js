/* https://www.byte-by-byte.com/threesum/ */

/* 
Given a list of integers, write a function that returns all sets of
3 numbers in the list, a, b, and c, so that a + b + c == 0.

threeSum({-1, 0, 1, 2, -1, -4})
[-1, -1, 2]
[-1, 0, 1]

[-4, -1, -1, 0, 1, 2]
  ^   ^            ^  
[[-1, -1, 2], [-1, 0, 1]]

O(nlogn) Sort
O(n^2) Iterate over elements with two pointers, the small number pointer +1 ahead
of the index and the larger number pointer at the end. Evaluate the sum and move small
pointer ahead if sum is less than 0 and large pointer to the left if sum is greater
than 0. Add the three nums to the result when their sum is 0.
*/

const threeSum = nums => {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const triplets = [];

  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let start = i + 1;
    let end = len - 1;

    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];

      if (sum === 0) {
        triplets.push([nums[i], nums[start], nums[end]]);
      }
      
      if (sum < 0) {
        while (nums[start] === nums[start + 1] && start < end) start++;
        start++;
      } else {
        while (nums[end] === nums[end - 1] && start < end) end--;
        end--;
      }
    }
  }

  return triplets;
};

console.log(threeSum([-4, -1, -1, 0, 1, 2])) // [[-1, -1, 2], [-1, 0, 1]]