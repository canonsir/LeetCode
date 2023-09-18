// 字符串大小写转换
const caseConversion = (str) => {
  const arr = Array.from(str);
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] >= 'a' && arr[i] <= 'z') {
      arr[i] = arr[i].toUpperCase();
    } else {
      arr[i] = arr[i].toLowerCase();
    }
  }
  return arr.join('');
};
console.log(caseConversion('abcDefgHijkLmn'));

// 替换字符串指定子串
const replaceString = (oldS, newS, fullS) => {
  const str = 'Hello World. How are you doing?';
  console.log(str.split(' ', 3));
  return fullS.split(oldS).join(newS);
};
console.log(replaceString('World', 'Web', 'Brave New World'));