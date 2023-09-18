// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。
// 返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。

const intersect = (nums1, nums2) => {
  const map = {};
  for (const num of nums1) {
    map[num] = (map[num] || 0) + 1;
  }
  const res = [];
  for (const num of nums2) {
    if (map[num]) {
      res.push(num);
      map[num]--;
    }
  }
  return res;
}
console.log(intersect([1, 2, 2, 1], [2, 2])); // [2,2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4,9]