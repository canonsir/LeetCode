// 节流
const throttle = () => {
  let lastTime = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastTime >= delay) {
      // 保证执行正确的上下文
      fn.apply(this, args);
      lastTime = now;
    }
  }
}
