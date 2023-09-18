// 冒泡排序
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i ; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      } 
    }
  }
  return arr;
};
console.log('冒泡排序: ', bubbleSort([6, 7, 8, 9, 3, 2, 5, 1]));