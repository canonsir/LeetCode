/**
 * @param {number[]} nums
 * @return {number}
 * 给你一个整数数组 nums，请你选择数组的两个不同下标 i 和 j，使 (nums[i]-1)*(nums[j]-1) 取得最大值。
 * 请你计算并返回该式的最大值
 */
var maxProduct = function (nums) {
  // let max = 0;
  // if (nums.length < 2) {
  //   max = nums[0];
  // }
  // const sortNums = nums.sort((a, b) => b - a);
  // max = (sortNums[0] - 1) * (sortNums[1] - 1);
  // return max;

  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if ((nums[i] - 1) * (nums[j] - 1) > max) {
          max = (nums[i] - 1) * (nums[j] - 1);
        }
      }
    }
  }
  return max;
};

console.log(maxProduct([3, 4, 5, 2]));
console.log(maxProduct([1, 5, 4, 5]));
console.log(maxProduct([3, 7]));