/**
 * let只在代码块内有效
 */
{
  let a = 10
  var b = 1
}

console.log(a) // ReferenceError: a is not defined
console.log(b) // 1

/**
 * 经典for循环案例
 */
// 变量i是var声明，全局范围内都有效，所以全局只有一个变量i。每一次循环变量i的值都会发生改变
var a = []
for(var i = 0; i < 10; i++){
  a[i] = function(){
    console.log(i)
  }
}

console.log(a[6]()) // 10

// 变量i是let声明，当前的i只在本轮循环有效，所以每一次循环的i都是一个新的变量
var a = []
for(let i = 0; i < 10; i++){
  a[i] = function(){
    console.log(i)
  }
}

console.log(a[6]()) // 6

/**
 * let/const不存在变量提升
 * 变量提升：变量可以在声明之前使用，值为undefined
 */
// var的情况
console.log(foo) // undefined
var foo = 2

// let的情况
console.log(bar) // ReferenceError: bar is not defined
let bar = 2

/**
 * 暂时性死区：代码块内，使用let/const声明变量之前，该变量都是不可用
 */
var tmp = 123
if(true){
  tmp = 'abc' // ReferenceError: Cannot access 'tmp' before initialization
  let tmp
}