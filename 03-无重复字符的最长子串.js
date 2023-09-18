/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} s - pwwkew
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // const arr = []
  // let res = 0
  // for (str of s) {
  //   while (arr.includes(str)) {
  //     arr.shift()
  //   }
  //   arr.push(str)
  //   res = Math.max(res, arr.length)
  // }
  // return res

  let max = 0, start = 0, n = s.length;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    const curStr = s.charAt(i);
    if (map.has(curStr)) {
      start = Math.max(start, map.get(curStr) + 1);
    }
    max = Math.max(max, i - start + 1);
    map.set(curStr, i);
  }
  return max;

  // 结果 ok, 但是 leetcode 不通过
  // let strArr = [];
  // function handler(dealStr) {
  //   let str = '';
  //   for (let i = 0; i < dealStr.length; i++) {
  //     // 检查是否包含当前字符
  //     if (str.includes(dealStr[i])) {
  //       strArr.push(str);
  //       let newStr = dealStr.substring(str.length, dealStr.length);
  //       handler(newStr);
  //       break;
  //     }
  //     str = str + dealStr[i];
  //   }
  // };
  // handler(s);
  // const target = strArr.sort((a, b) => {
  //   return b.length - a.length;
  // });
  // return target[0] ?? '';
};

const result = lengthOfLongestSubstring('pwwkew');
console.log(result);