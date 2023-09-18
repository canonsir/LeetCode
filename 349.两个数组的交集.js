// 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

// 求数组交集
const intersection = (nums1, nums2) => {
  return [...new Set(nums1.filter(v => nums2.includes(v)))];
  // return [...new Set(nums1.filter(v => nums2.indexOf(v) !== -1))];
}

const nums1 = [1, 2, 2, 1], nums2 = [2, 2];
console.log('交集: ', intersection(nums1, nums2));

// 求数组补集
const getComplementArr = (arr1, arr2) => {
  return arr1.filter(num1 => arr2.every(num2 => num2 !== num1));
};
console.log('数组 arr1 的补集: ', getComplementArr([2, 3, 4, 5, 6], [1, 2, 3]));
console.log('数组 arr2 的补集: ', getComplementArr([1, 2, 3], [2, 3, 4, 5, 6]));


// 求数组并集
const getUnionArr = (arr1, arr2) => {
  // return Array.from(new Set(arr1.concat(arr2)));
  return arr1.concat(arr2.filter(num2 => arr1.every(num1 => num1 !== num2)));
};
console.log('数组并集: ', getUnionArr([1, 2, 3], [2, 3, 4, 5, 6]));