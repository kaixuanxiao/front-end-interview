/**
 * includes: 是否找到参数字符串
 * startsWith：参数字符串是否在源字符串头部
 * endsWith：参数字符串是否在源字符串尾部
 */
let s = 'hello world'
s.startsWith('hello') // true
s.endsWith('world') // true
s.includes('llo') // true

/**
 * 模板字符串
 */
let str = `my name is ${s}`