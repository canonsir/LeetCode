// 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1
// 给定 n ，请计算 F(n) 。

// 1、求斐波那契数列第 n 项, n >= 2
const fib = (n) => {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}
console.log('递归方式 - 斐波那契数列第 n 项: ', fib(5));

// 2、此递归方法超过 100 项 / 5000 时, 浏览器/node 会崩掉, 故采用动态规划方式
const fibSuper = (n) => {
  // if (n < 2) {
  //   return n;
  // }
  // const fibArr = [0, 1];
  // for (let i = 2; i <= n; i++) {
  //   fibArr.push(fibArr[0] + fibArr[1]);
  //   // 删除第一项, 使数组只保留变量
  //   fibArr.shift();
  //   // fibArr.splice(0, 1);
  // }
  // return fibArr[1];

  if (n < 2) {
    return n;
  }
  let prevPrev = 0;
  let prev = 1;
  for (let i = 2; i <= n; i++) {
    const curr = prevPrev + prev;
    prevPrev = prev;
    prev = curr;
  }
  return prev;
}
console.log('动态规划 - 斐波那契数列第 n 项: ', fibSuper(45));