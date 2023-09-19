// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

// 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

/**
 * 处理大整数相加, 避免精读丢失
 * 
 * 在 JavaScript 中，两个大整数相加时，如果直接将它们转换成数字相加，可能会导致精度丢失。
 * 这是因为 JavaScript 中的数字类型采用 IEEE 754 标准的双精度浮点数表示法，只能精确表示 53 位二进制小数，
 * 超过这个范围的数字就会出现精度丢失的情况。
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const num1Arr = num1.split('').reverse();
  const num2Arr = num2.split('').reverse();
  const maxLen = Math.max(num1Arr.length, num2Arr.length);
  const result = [];
  let carry = 0;
  for (let i = 0; i < maxLen; i++) {
    const num1 = num1Arr[i] || 0;
    const num2 = num2Arr[i] || 0;
    const sum = Number(num1) + Number(num2) + carry;
    const sumStr = sum.toString();
    result.push(sumStr[sumStr.length - 1]);
    carry = sum > 9 ? 1 : 0;
    // console.log(sumStr, sum, carry);
    // console.log(result);
  }
  if (carry > 0) {
    result.push(carry.toString());
  }
  return result.reverse().join('');

  // let i = num1.length - 1;
  // let j = num2.length - 1;
  // let carry = 0;
  // const result = [];
  // while (i >= 0 || j >= 0 || carry > 0) {
  //   const x = i >= 0 ? Number(num1.charAt(i)) : 0;
  //   const y = j >= 0 ? Number(num2.charAt(j)) : 0;
  //   const sum = x + y + carry;
  //   result.push(sum % 10);
  //   carry = Math.floor(sum / 10);
  //   i--;
  //   j--;
  // }
  // return result.reverse().join('');
};

console.log(addStrings('1', '2'));
console.log(addStrings('126', '4569'));