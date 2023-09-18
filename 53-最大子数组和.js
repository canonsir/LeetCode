/**
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组 是数组中的一个连续部分。
 * 
 * @param {number[]} nums
 * @return {number}
 * 
 * 输入：nums = [5,4,-1,7,8]
 * 输出：23
 */
var maxSubArray = function (nums) {

  // 不通过 - 1、nums 的用例数据很庞大时, 算法时间超出限制、2、遍历了太多次了
  // let max = nums[0], len = nums.length;
  // for (let i = 0; i < len; i++) {
  //   const arr1 = nums.slice(i, nums.length);
  //   const len1 = arr1.length;
  //   for (let j = 0; j < len1; j++) {
  //     const start = Math.abs(j) === 0 ? len1 : - Math.abs(j);
  //     const arr2 = arr1.slice(0, start);
  //     if (arr2.length) {
  //       const total = arr2.reduce((pre, curr) => pre + curr);
  //       max = Math.max(max, total);
  //     }
  //   }
  // }
  // return max;

  let curr = nums[0], sum = 0, len = nums.length;
  for (let i = 0; i < len; i++) {
    if (sum > 0) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }
    curr = Math.max(sum, curr);
  }
  return curr;
};

// console.log(maxSubArray([-1]));
// console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));