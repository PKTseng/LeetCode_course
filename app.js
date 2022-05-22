// console.log(12);
// console.log(23);

// console.log('log');

// let arr = ['frontend', 'backend', 'devops'];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i], i);
// }

// arr.forEach((i, idx) => {
//   console.log(idx, i);
// });

// function add(a, b) {
//   return a + b;
// }

// console.log(add(12, 8));

// class circle {
//   constructor(radius) {
//     this.radius = radius;
//   }

//   getArea() {
//     return this.radius * this.radius * Math.PI;
//   }
// }

// let c1 = new circle(8);
// console.log(c1.radius);
// console.log(c1.getArea());

// 時間跟空間的差別

// ex: 1+2+3+4+5+....+n

function fun1(n) {
  let sun = 0;
  for (let i = 0; i <= n; i++) {
    sun += i;
  }
  return sun;
}

function fun2(n) {
  return ((1 + n) * n) / 2;
}

// console.log(fun1(10));
// console.log(fun2(10));

let time1 = window.performance.now();
fun1(10000000);
let time2 = window.performance.now();

let timeDiff1 = (time2 - time1) / 1000;
console.log(`It takes ${timeDiff1} seconds to run fun1.`);

let time3 = window.performance.now();
fun2(10000000);
let time4 = window.performance.now();

let timeDiff2 = (time4 - time3) / 1000;
console.log(`It takes ${timeDiff2} seconds to run fun2.`);
