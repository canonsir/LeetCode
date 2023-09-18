/**
 * @param {string} s
 * @return {string}
 * 
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
 * 
 * 暴力解法 - 可想而知的结果: 超时
 */
var longestPalindrome = function (s) {
  // 1、获取字符串所有子串
  const getSubString = (s, arr) => {
    let start = 0, len = s.length;
    for (let i = 0; i < s.length; i++) {
      if (start < len) {
        // console.log(s.substring(start, i + 1));
        arr.push(s.substring(start, i + 1));
      }
      if (i === len - 1) {
        start++;
        getSubString(s.substring(start, len), arr);
      }
    }
  };

  let arr = new Array();
  getSubString(s, arr);

  // 2、判断字符串子串是否符合回文
  const isPalindrome = (str) => {
    let n = str.length, count = 0;
    // length 为 1 的都是回文数, 为 2 的需要判断
    if (n === 1) {
      return true;
    }
    if (n === 2) {
      const reverse = Array.from(str).reverse().join('');
      return str === reverse;
    }
    // 所有字符都相同的为回文数
    for (let i = 0; i < n; i++) {
      if (str[i] === str[0]) {
        count++;
      }
    }
    if (count === n) {
      return true;
    }

    let middleIndex = 0, leftStr = '', rightStr = '';
    if (n % 2 === 0) {
      middleIndex = Math.ceil(str.length / 2) - 1;
      leftStr = str.substring(0, middleIndex + 1);
    } else {
      middleIndex = Math.ceil(str.length / 2) - 1;
      leftStr = str.substring(0, middleIndex);
    }
    rightStr = str.substring(middleIndex + 1, s.length);
    if (Array.from(rightStr).reverse().join('') === leftStr) {
      return true;
    }
    return false;
  };

  const arrSet = [...new Set(arr)];
  let map = new Map(), max = 0, result;
  for (let i = 0; i < arrSet.length; i++) {
    const flag = isPalindrome(arrSet[i]);
    if (flag) {
      map.set(arrSet[i], arrSet[i].length);
      max = Math.max(max, arrSet[i].length);
    }
  }


  map.forEach((v, k) => {
    if (v === max) {
      result = k
    }
  })

  return result;
};

console.time('longestPalindrome');
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('aaaa'));
console.log(longestPalindrome('tattarrattat'));
console.timeEnd('longestPalindrome');
// longestPalindrome: 6.36ms
