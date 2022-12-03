/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let sum = nums.reduce((acc, curr) => acc + curr);
  let uniquesSum = Array.from(new Set(nums)).reduce((acc, curr) => acc + curr);
  console.log(sum, uniquesSum);
  return uniquesSum * 2 - sum;
};
console.log(singleNumber([5, 2, 2, 3, 3, 4, 4]));
