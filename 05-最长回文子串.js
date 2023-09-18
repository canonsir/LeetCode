/**
 * @param {string} str
 * @return {string}
 */
// 解法一
const longestPalindrome1 = str => {
  const len = str.length
  if (len < 2) return str
  let maxLen = 0
  let start = 0
  for (let i = 1; i < len; i++) {
    let left = right = 1
    while (str[i] === str[i - left] && str[i - left]) left++
    while (str[i - left] === str[i + right] && str[i - left] && str[i + right]) {
      left++
      right++
    }
    if (left + right - 1 > maxLen) {
      maxLen = left + right - 1
      start = i - left + 1
    }
  }
  return str.substr(start, maxLen)
}
// 解法二
const longestPalindrome2 = str => {
  const strLen = str.length
  const dp = Array.from(Array(strLen), () => Array(strLen).fill(false))
  let maxLen = 0
  let start = 0
  for (let j = 0; j < strLen; j++) {
    for (let i = 0; i <= j; i++) {
      if (str[i] !== str[j]) continue
      if (j - i <= 1) dp[i][j] = true
      else if (dp[i + 1][j - 1]) dp[i][j] = true
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1
        start = i
      }
    }
  }
  return str.substr(start, maxLen)
}
// test
const str = 'bbaab'
console.log('longestPalindrome1(str)', longestPalindrome1(str));
console.log('longestPalindrome2(str)', longestPalindrome2(str));