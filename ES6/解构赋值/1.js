//解构：按照一定的模式从数组和对象中提取值，然后对变量进行赋值

/**
 * 数组解构：只要等号两边的模式相同，左边的变量就会被赋予对应的值，变量的取值由它的位置决定
 */
let [a, b, [c], d = 4, ...e] = [1, 2, [3, 4], 9]
console.log(a, b, c, d, e) // 1 2 3 9 []

/**
 * 对象解构：和数组解构位置决定不同，对象解构变量名需要与属性名对应才能取到正确值
 */
let {foo, a} = {foo: 'foo', bar: 'bar'}
console.log(foo, a) // 'foo' undefined

/**
 * 对象解构的嵌套赋值
 */
let obj = {p: [
  'hello',
  {y: 'world'}
]}

let{p: [x, {y}]} = obj
console.log(x, y) // hello world (p这里是模式并不是变量，不会被赋值，可通过let{p, p: [x, {y}]} = obj写法获取)

/**
 * 解构的实践
 * （1）交换变量值
 */
let m = 1, n = 2
[m, n] = [n, m]
console.log(m, n) // 2, 1

/**
 * 解构的实践
 * （2）函数参数的解构
 */
function f({url, option = {showLoading: false}}){}

/**
 * 解构的实践
 * （3）遍历Map解构
 */
 for(let [key, value] of new Map([['a', '1']])){
  console.log(key, value) // a 1
}
