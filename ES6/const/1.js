/**
 * const和let一样：
 * 只在代码块内有效
 * 不存在变量提升
 * 暂时性死区
 */


/**
 * const声明必须赋值
 * const声明的常量不得改变，意味着const一旦声明常量，就必须立即初始化值
 */

const foo // SyntaxError: Missing initializer in const declaration

/**
 * const实际上保证的并不是变量的值不得改动，而是变量指向的那个内存地址不得改动
 */
const foo1 = { a: 1}
// 修改foo属性值或者为foo添加一个属性，可以成功
foo1.a = 2
foo1.b = 3
console.log(foo1) // {a: 2, b: 3}

/**
 * 如果真想将对象冻结，使用Object.freeze
 */
const foo2 = Object.freeze({})
foo2.a = 1
console.log(foo2) // {}

