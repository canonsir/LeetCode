/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
var twoSum = function (nums, target) {
  if (!Array.isArray(nums)) {
    throw new Error("nums is not Array");
  }

  const query = (num) => {
    for (let index = 0; index < nums.length; index++) {
      const element = nums[index];
      if (num === element) {
        return index;
      }
    }
  };

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const subParams = target - element;
    const isContain = nums.includes(subParams);
    if (isContain) {
      const subIndex = query(subParams);
      if (subIndex !== index) {
        return [index, subIndex];
      }
    }
  }

  // const map = new Map();
  // for (let i = 0; i < nums.length; i++) {
  //   if (map.has(nums[i])) {
  //     return [map.get(nums[i]), i];
  //   }
  //   map.set(target - nums[i], i);
  // }
};

const result = twoSum([2, 7, 11, 15], 9);
console.log(result)