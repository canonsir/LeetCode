// const removeEqual = (arr) => {
//   const result = arr.filter((item, index, self) => {
//     // 若已存在元素, 下一个相同元素的索引即和上一个不同
//     return self.indexOf(item) === index;
//   })
//   return result;
// };
// console.log(removeEqual([1,2,2,3,4,5,5,6]));

const removeEqual2 = (arr) => {
  return [...new Set(arr)];
  // return Array.from(new Set(arr));
};
console.log(removeEqual2([1, 2, 2, 3, 4, 5, 5, 6]));
