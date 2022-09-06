// new过程
function newObj() {
  var obj = {}
  var [fn,...args] = [...arguments]
  obj.__proto__ = fn.prototype
  obj.__proto__.constructor = fn
  var result = fn.call(obj,...args)
  console.log(result)
  if (typeof result === 'object' || typeof result === 'function') {
    return result
  }
  return obj
}
// 数组结构转对象
function arrToObj(arr){
  let obj = {}
  arr.forEach(item => {
      obj[item.value] = item.label
  })
  return obj
}

//检查号码是否符合规范，包括长度，类型  
function isCardNo(card) {
  //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
  var reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/
  if (reg.test(card) === false) {
    return false
  }
  return true
}

// 求最长非重复子串
function longestSubStr(str) {
  const strArr = [];
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (strArr.indexOf(str[i]) === -1) {
      strArr.push(str[i]);
    } else {
      strArr.splice(0, strArr.indexOf(str[i]) + 1);
    }
    result = strArr.length > result.length ? strArr.join("") : result;
  }
  return result;
}

// leetCode第一道题：两数之和
function twoSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const subValue = target - arr[i];
    if (map.has(subValue)) {
      return [map.get(subValue), i];
    } else {
      map.set(arr[i], i);
    }
  }
}

// 大数求和（我用的字符串求和)
function bigNumAdd(a, b) {
    let temp = 0,//每位相加产生的进位，初始化为0
        res = [];
    let s1 = a.split('').reverse();
    let s2 = b.split('').reverse();
    
    let format = (val) => {
        if (!isNaN(Number(val))) return Number(val)
        return 0
    }
    /* 注意此处是 i <= Math.max(s1.length, s2.length) */
    for (let i = 0; i <= Math.max(s1.length, s2.length); i++) {
        let addRes = format(s1[i]) + format(s2[i]) + temp;
        res[i] = addRes % 10;
        temp = addRes >= 10 ? 1 : 0;
    }
    res.reverse();
    /* 判断是否相加产生了进位 */
    const resultNum = res[0] > 0 ? res.join('') : res.slice(1).join('');
    return resultNum;
}

console.log(bigNumAdd('13254', '4354325'));

// 有效括号（力扣20
var isValid = function(s) {
    if(s.length%2 !== 0) return false
    const map = new Map([
        ['(',')'],
        ['{','}'],
        ['[',']']
    ])
    let stk = []
    for( ch of s){
        if(map.has(ch)){
            stk.push(ch)
        }else{
            if(map.get(stk[stk.length - 1]) !== ch || stk.length == 0 ) return false
            else stk.pop()
        }
    }
    return stk.length == 0
}

// 二分法
let arr = [1,2,3,4,5,6,7,8,9,10]
let target = 3
function search(arr,target) {
    let count = 0
    let start = 0
    let end = arr.length-1
    while(start<=end) {
       let mid = Math.floor((start+end)/2)
       if(target===arr[mid]){
        return mid
       } 
       if (target<arr[mid]) {
        end = mid
       }
       if (target>arr[mid]) {
        start = mid
       }
       count ++
    }
}
// console.log(search(arr,target))

// 冒泡排序
let arr12 = [10,21,13,41,15,26,37]
function arrSort(arr) {
    for(let i=0;i<arr.length-1;i++) {
        for(let j=0;j<arr.length-i-1;j++){
            if (arr[j]<arr[j+1]) {
                let tem = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = tem
            }
        }
    }
    return arr
}
// console.log(arrSort(arr1))

// 数组转为tree
const arr11 = [
    { id: 1, parent: 0 },
    { id: 2, parent: 1 },
    { id: 3, parent: 1 },
    { id: 4, parent: 2 },
    { id: 5, parent: 2 },
    { id: 6, parent: 3 },
];
function getChildren(arr, id){
  return arr.filter(item => item.parent === id).map(item => {
    item.children = getChildren(arr, item.id)
    return item
  })
}
// console.log(JSON.stringify(getChildren(arr11, 0)))

 // obj转为字符串
 var obj = {
  a: 1,
  b: 2
};
//a=1&b=2
function toString(obj) {
let arr = []
for (let key in obj) {
arr.push(key+'='+obj[key])
}
return arr.join('&')
}
// console.log(toString(obj))


// url转为obj
function urlToObj(url) {
let obj = {}
let arr = url.split('&')
arr.map(item => obj[item.split('=')[0]] = item.split('=')[1])
return obj
}
let url = 'a=1&b=2&c=4'
// console.log(urlToObj(url))

var arr1  = [5, 3, 2, -2, -5, 5, -5, 3, -3]
//要求输出[[5, -5], [3, -3], [2, -2], [5, -5]]
function newArr1 (arr) {
let arr1 = []
arr.forEach((item,index) => {
if (item>0) {
  let index = arr.findIndex(jtem => jtem ==item)
  if (index != -1) {
    arr.splice(index,1)
    arr1.push([item, -item])
  }
}
})
return arr1
}
// console.log(newArr1(arr1))

//两个字符串A,B,判断A是否是B的子串,不能使用高级api
function compareStr(a,b) {
const aLength = a.length
const bLength = b.length
let index = 0
for (let i = 0; i < bLength; i++) {
if (b[i] === a[index]) {
  if (index === aLength - 1) return true
  index++
} else {
  index > 0 ? index-- : (index = 0)
}
}
return false
}
// console.log(compareStr('123','123456789'))

// 字符串大小写反转
function reverseStr(str) {
const strArr = str.split('')
for(let i=0; i<strArr.length;i++) {
if (strArr[i]>='A'&&strArr[i]<='Z') {
  strArr[i] = strArr[i].toLowerCase()
} else {
  if (strArr[i]>='a'&&strArr[i]<='z') {
    strArr[i] = strArr[i].toUpperCase()
  }
}
}
return strArr.join('')
}
// console.log(reverseStr('aBc'))

// 合并数组 ['a', 'b'], [1, 2, 3] =>['a','b',1,2, 3] =>['a', 1, 'b', 2, 3] 
function mergeArr(arr1,arr2) {
const arr = arr1.concat(arr2)
arr[2] = arr.splice(1, 1,arr[2])[0]
return arr
}
// console.log(mergeArr(['a', 'b'], [1, 2, 3]))

// 一堆数字字符串组成最大数是多少[50, 2, 5, 9] => 95502 (字典序+贪心)
function getMaxNumber(arr) {
return arr.sort().reduce((acc = '', cur) => Math.max(+`${acc}${cur}`, +`${cur}${acc}`));
}
// console.log(getMaxNumber([50, 2, 5, 9]))

//
var a = 1
function test() {
console.log(a)
var a = 2
console.log(this.a)
this.a = 3
}
test() // undefined,1
new test() // undefined,undefined

// 写一个深拷贝只考虑基本数据类型和Object
function clone(obj) {
let result
if(typeof obj == 'object') {
result = obj instanceof Array ? [] : {}
for(let key in obj) {
  result[key]=typeof obj[key] == 'object' ? clone(obj[key]) : obj[key]
}
} else {
result = obj
}
return result
}

let obj1 = {
a: 1,
b: [1,2],
c: {
a: 1,
b: [1,2],
}
}
console.log(clone(obj1))

// 写一个计数器(考察闭包)
var count = (function() {
var counter = 0
return function() {
console.log(counter)
return (++counter)
}
})()
// 输入一个网址到页面显示经历了那些步骤
// 1、输入网址
// 2、DNS解析获取域名对应的IP地址
// 3、建立TCP连接
// 4、web浏览器向web服务器发送HTTP请求
// 5、服务器的永久重定向响应
// 6、浏览器跟踪重定向地址
// 7、web服务器做出应答
// 8、浏览器显示 HTML
// 9、浏览器发送请求获取其他嵌入在 HTML 中的资源
// 10、web服务器关闭TCP连接

// http协议一些问题，请求头里面都有啥
// 客户端向服务器发起http请求的时候，会有一些请求信息，请求信息包含三个部分：
// 请求方法URI协议/版本
// 请求头(Request Header)
// Accept 可接受的响应内容类型（Content-Types）
// Accept-Charset 可接受的字符集
// Accept-Encoding 可接受的响应内容的编码方式
// Accept-Language 可接受的响应内容语言列表
// Accept-Datetime 可接受的按照时间来表示的响应内容版本
// Authorization 用于表示 HTTP 协议中需要认证资源的认证信息
// Cache-Control 用来指定当前的请求/回复中的，是否使用缓存机制。
// 请求正文：


// 防抖 
function debounce(fn,delay) {
var timeout = null
return function() {
clearTimeout(timeout)
timeout = setTimeout(() => {
  fn.apply(this, arguments)
}, delay)
}
}
// 防抖函数
function handle() {
console.log('防抖：', Math.random())
}
// window.addEventListener('scroll',debounce(handle,500))

// 节流
function throttle(fn,delay) {
var canRun = true
return function() {
if (!canRun) return
canRun = false
setTimeout(() =>{
  fn.apply(this, arguments)
  canRun = true
},delay)
}
}
function handle1() {
console.log('节流：', Math.random())
}
// window.addEventListener('scroll',throttle(handle1,500))



Object.defineproperty(obj, 'name', {
get() {
    return val
},
set(newVal) {
    val = newVal
}
})

let proxy = new Proxy({}, {
get(obj, prop) {
    return obj[prop]
},
set(obj, prop, val) {
    obj[prop] = val
}
})
// proxy返回的是一个新对象， 可以通过操作返回的新的对象打到目的 