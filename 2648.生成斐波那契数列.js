// 请你编写一个生成器函数，并返回一个可以生成 斐波那契数列 的生成器对象。

// 斐波那契数列 的递推公式为 Xn = Xn-1 + Xn-2 。

// 这个数列的前几个数字是 0, 1, 1, 2, 3, 5, 8, 13 。


// 可以使用生成器函数来实现斐波那契数列。生成器函数可以通过 yield 关键字来暂停函数执行并返回一个值，然后在需要时恢复执行。

// 以下是一个实现斐波那契数列的生成器函数示例：

function* fibGenerator() {
  let prev = 0;
  let curr = 1;
  while (true) {
    yield prev;
    [prev, curr] = [curr, prev + curr];
  }
}

const get = fibGenerator();
console.log(get.next().value); // 0
console.log(get.next().value); // 1
console.log(get.next().value); // 1
console.log(get.next().value); // 2
console.log(get.next().value); // 3

// 生成斐波那契数列, 又称为黄金分割数列
const generateFib = (n) => {
  let fibArr = [], i = 0;
  while (i <= n) {
    if (i <= 1) {
      fibArr.push(i);
    } else {
      fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
    i++;
  }
  return fibArr;
}

console.log(generateFib(2));