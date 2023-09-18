/**
 * @param {string} str
 * @return {boolean}
 */
// 解法一
const isValid1 = str => {
  const beforeReg = new RegExp(/\(|\[|\{/)
  const afterReg = new RegExp(/\)|\]|\}/)
  const stack = []
  while (str.length) {
    const curv = str[0]
    if (beforeReg.test(curv)) stack.push(curv)
    if (afterReg.test(curv)) {
      const lastBefore = stack[stack.length - 1]
      switch (curv) {
        case ')':
          if (lastBefore !== '(') return false
          else break
        case ']':
          if (lastBefore !== '[') return false
          else break
        case '}':
          if (lastBefore !== '{') return false
          else break
      }
      stack.pop()
    }
    str = str.substr(1)
  }
  return stack.length === 0
}
// 解法二
const isValid2 = str => {
  if (str.length === 1) return false
  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])
  const stack = []
  for (let ch of str) {
    if (pairs.has(ch)) {
      if (!stack.length || stack[stack.length - 1] !== pairs.get(ch)) return false
      stack.pop()
    } else stack.push(ch)
  }
  return !stack.length
}
// test
const str = '()' // true
// const str = '()[]{}' // true
// const str = '(]' // false
// const str = '([)]' // false
// const str = '{[]}' // true
isValid1(str)