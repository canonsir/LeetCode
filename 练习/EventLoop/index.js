// -------------------------------------------//
// https://juejin.cn/post/6844904077537574919 //
// -------------------------------------------//

// const promise1 = new Promise((resolve, reject) => {
//   console.log('promise1')
// })
// console.log('1', promise1);

// 'promise1'
// '1' Promise{<pending>}

//---------------------------------------------------------------------------------//

// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success')
//   console.log(2);
// });
// promise.then(() => {
//   console.log(3);
// });
// console.log(4);

// 1、2、4、3

//---------------------------------------------------------------------------------//

// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   console.log(2);
// });
// promise.then(() => {
//   console.log(3); // promise.then 并不会执行，它只有在被改变了状态之后才会执行。
// });
// console.log(4);

// 1、2、4

//---------------------------------------------------------------------------------//

// const promise1 = new Promise((resolve, reject) => {
//   console.log('promise1')
//   resolve('resolve1')
// })
// const promise2 = promise1.then(res => {
//   console.log(res)
// })
// console.log('1', promise1);
// console.log('2', promise2);

// promise1
// 1 Promise { 'resolve1' }
// 2 Promise { <pending> }
// resolve1

//---------------------------------------------------------------------------------//

// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success')
// }))
// fn().then(res => {
//   console.log(res)
// })
// console.log('start')

// 1 -> start -> success

// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });
// console.log("start");
// fn().then(res => {
//   console.log(res);
// });

// start -> 1 -> success

//---------------------------------------------------------------------------------//

// console.log('start')
// setTimeout(() => {
//   console.log('time')
// })
// Promise.resolve().then(() => {
//   console.log('resolve')
// })
// console.log('end')

// start -> end -> resolve -> time

//---------------------------------------------------------------------------------//

// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 0);
//   console.log(2);
// });
// promise.then((res) => {
//   console.log(res);
// });
// console.log(4);

// 1 -> 2 -> 4 -> timerStart -> timerEnd -> success


//---------------------------------------------------------------------------------//
// setTimeout(() => {
//   console.log('timer1');
//   setTimeout(() => {
//     console.log('timer3')
//   }, 0)
// }, 0)
// setTimeout(() => {
//   console.log('timer2')
// }, 0)
// console.log('start')

// start -> timer1 -> timer2 -> timer3

// setTimeout(() => {
//   console.log('timer1');
//   Promise.resolve().then(() => {
//     console.log('promise')
//   })
// }, 0)
// setTimeout(() => {
//   console.log('timer2')
// }, 0)
// console.log('start')

// start -> timer1 -> promise -> timer2

//---------------------------------------------------------------------------------//
// Promise.resolve().then(() => {
//   console.log('promise1');
//   const timer2 = setTimeout(() => {
//     console.log('timer2')
//   }, 0)
// });
// const timer1 = setTimeout(() => {
//   console.log('timer1')
//   Promise.resolve().then(() => {
//     console.log('promise2')
//   })
// }, 0)
// console.log('start');

// start -> promise1 -> timer1 -> promise2 -> timer2

//---------------------------------------------------------------------------------//

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success')
//   }, 1000)
// })
// const promise2 = promise1.then(() => {
//   throw new Error('error!!!')
// })
// console.log('promise1', promise1)
// console.log('promise2', promise2)
// setTimeout(() => {
//   console.log('promise1', promise1)
//   console.log('promise2', promise2)
// }, 2000)

// promise1<resolve: pending> -> promise2<resolve: pending> -> exp -> promise1<success> ->promise2<exp>

//---------------------------------------------------------------------------------//
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("success");
//     console.log("timer1");
//   }, 1000);
//   console.log("promise1里的内容");
// });
// const promise2 = promise1.then(() => {
//   throw new Error("error!!!");
// });
// console.log("promise1", promise1);
// console.log("promise2", promise2);
// setTimeout(() => {
//   console.log("timer2");
//   console.log("promise1", promise1);
//   console.log("promise2", promise2);
// }, 2000);

// promise1里的内容 -> promise1<pending> -> promise2<pending> -> timer1 -> exp -> timer2 -> promise1<success> -> promise2<exp>


//---------------------------------------------------------------------------------//
// const promise = new Promise((resolve, reject) => {
//   resolve("success1");
//   reject("error");
//   resolve("success2");
// });
// promise
//   .then(res => {
//     console.log("then: ", res);
//   }).catch(err => {
//     console.log("catch: ", err);
//   })

// then: success1

//---------------------------------------------------------------------------------//
// const promise = new Promise((resolve, reject) => {
//   reject("error");
//   resolve("success2");
// });
// promise
// .then(res => {
//     console.log("then1: ", res);
//   }).then(res => {
//     console.log("then2: ", res);
//   }).catch(err => {
//     console.log("catch: ", err);
//   }).then(res => {
//     console.log("then3: ", res);
//   })

// catch: error -> then3: undefined

//---------------------------------------------------------------------------------//
Promise.resolve(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res);
  });

  // 1 -> 2
//---------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------//