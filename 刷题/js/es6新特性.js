// 定义函数
let human = {
  say() {
    console.log(1111);
  },
};
// human.say()

// 创建类
class Human1 {
  constructor(name) {
    this.name = name;
    console.log(this.name);
  }
  say() {
    console.log("can say");
  }
}
let man = new Human1("jack");
// man.say()
class Man extends Human1 {
  constructor(name, sex) {
    super(name);
    this.sex = sex;
    console.log(this.name, this.sex);
  }
  eat() {
    console.log("can eat");
  }
}

let man1 = new Man("lose", "男");
man1.eat();

// 模块
// export class Human3 {
//   constructor(name) {
//     this.name = name
//   }
//   eat() {
//     console.log('eat')
//   }
// }
class Human4 {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log("eat");
  }
}

function run() {
  console.log("run");
}

// export {human4, run}
// export default {human4,run}

// 在一个文件或者模块中，export,import可以有多个，但是export default只能有一个。
// 通过export方式导出，在导入的时候需要加{}，export default不需要在导入的时候加{}
// a.js
let age = 11;
// export default age
// import any from ./a.js
// console.log(age) // 11

// let  const var

///1、const声明的是常量，必须赋值
// 1）一旦声明必须赋值,不能使用null占位。
// 2）声明后不能再修改
// 3）如果声明的是复合类型数据，可以修改其属性
const obj = {
  name: "1",
  age: 12,
};
obj.age = 30;
// console.log(obj)

const name1 = 1111;
// name1 = 333
// console.log(name1) // TypeError: Assignment to constant variable
// const保证的并不是变量的值不能改动，而是变量指向的那个内存地址不能改动。对于基本类型的数据（数值、字符串、布尔值），其值就保存在变量指向的那个内存地址，因此等同于常量。
// 但对于引用类型的数据（主要是对象和数组）来说，变量指向数据的内存地址，保存的只是一个指针，const只能保证这个指针是固定不变的，至于它指向的数据结构是不是可变的，就完全不能控制了。

// 2、let和var声明的是变量，声明之后可以更改，声明时可以不赋值
// let name2
// var name3

// 3、var允许重复声明变量，后一个变量会覆盖前一个变量。let和const在同一作用域不允许重复声明变量，会报错。
var name4 = 1111;
var name4 = 222;
console.log(name4);
let name5 = 33;
// let name5 = 44  无法重新声明块范围变量“name5”

// 4、var声明的变量存在变量提升（将变量提升到当前作用域的顶部）。即变量可以在声明之前调用，值为undefined。
// let和const不存在变量提升。即它们所声明的变量一定要在声明后使用，否则报ReferenceError错。

console.log(name6); // undefined
var name6 = 666; // console.log(d); // 报错，不能跨函数访问 // console.log(e); // 报错，不能跨函数访问 // console.log(f); // 报错，不能跨函数访问

// 5、var不存在块级作用域。let和const存在块级作用域。
// ES5中作用域有：全局作用域、函数作用域。没有块作用域的概念。
// ES6(简称ES6)中新增了块级作用域。块作用域由 { } 包括，if语句和for语句里面的{ }也属于块作用域。
// 暂时性死区： 在使用let、const命令声明变量之前，该变量都是不可用的。这在语法上，称为暂时性死区。使用var声明的变量不存在暂时性死区

// 块作用域
//     {
// 　　    var a = 1;
//         let b = 2;
//         const c = 3;
//         // c = 4; // 报错，const不能修改

//         var aa;
//         let bb;
//         // const cc; // 报错，必须初始化(即必须赋值)

//         console.log(a); // 1
//         console.log(b); // 2
//         console.log(c); // 3
//     }
//     console.log(a); // 1
//     // console.log(b); // 报错，只能在块作用域里访问
//     // console.log(c); // 报错，只能在块作用域里访问

//     // 函数作用域
//     (function A() {

//         var d = 5;
//         let e = 6;
//         const f = 7;

//         console.log(d); // 5
//         console.log(e); // 6  (在同一个{ }中,也属于同一个块，可以正常访问到)
//         console.log(f); // 7  (在同一个{ }中,也属于同一个块，可以正常访问到)

//     })();
// for (var i = 0; i <5; i++) {
//     console.log(i)
// }

// 箭头函数 箭头函数相当于匿名函数，并简化了函数定义。

let fn = (name) => {
  return `hello${name}`;
};
let fn1 = (name) => `hello${name}`;
// console.log(fn('jack'))
// console.log(fn1('jack'))
// 1、箭头函数没有原型prototype，因此箭头函数没有this指向
// console.log(fn.prototype) // undefined
// 2、箭头函数没有自己的this指向，它会捕获自己定义所处的外层执行环境，并且继承这个this值。箭头函数的this指向在被定义的时候就确定了，之后永远都不会改变。（！永远）
console.log("----------------------------------------------------------------");
// 1.html

// 模板字符串
let num = Math.random();
console.log(`your num is ${num}`);

// 解构
function getVal() {
  return [1, 2];
}
var [x, y] = getVal();
console.log("x:" + x + ", y:" + y);

// proxy
let engineer = { name: "Joe Sixpack", salary: 50 };
let interceptor = {
  set(receiver, property, value) {
    console.log(property, "is changed to", value);
    receiver[property] = value;
  },
};
engineer = new Proxy(engineer, interceptor);
engineer.salary = 70;
