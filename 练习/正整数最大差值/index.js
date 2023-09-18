// 正整数最大差值
const getMaxProfit = (args) => {
  const max = Math.max(...args);
  const min = Math.min(...args);
  return max - min;
};
console.log('正整数最大差值: ', getMaxProfit([10, 5, 11, 7, 8, 9]));