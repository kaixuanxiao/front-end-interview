const arr = [1,2,3,4,5,6,7,8,9]
// filter 返回新数组，新数组元素为原数组符合条件的元素
console.log(arr.filter(item => item > 5)) // [ 6, 7, 8, 9 ]

// map 返回新数组，新数组元素为原数组元素调用函数处理后的值
console.log(arr.map(item => {return item*5})) // [5, 10, 15, 20, 25,30, 35, 40, 45]

// some 检测数组元素是否满足指定条件，若有一个满足，表达式返回true，则停止检测，否则返回false
console.log(arr.some(item => item>8)) // true
console.log(arr.some(item => item>10)) // false

// every 检测数组元素是否全部满足指定条件，若全部满足，表达式返回true，否则返回false,剩余停止检测
console.log(arr.every(item => item>0)) // true
console.log(arr.every(item => item>1)) // false

// find 返回查找的元素，若数组为空 则返回undefined
const arr1 = [{a:1},{a:2}]
console.log(arr1.find(item => item.a===1)) // {a:1}
const arr2 = []
console.log(arr2.find(item => item.a===1)) // undefined

// findIndex 返回查找的元素的下标，若找不到则返回-1
console.log(arr1.findIndex(item => item.a===1)) // 0
console.log(arr2.findIndex(item => item.a===1)) // -1

// forEach 调用数组每个元素，并将元素传递给回调函数，空数组则不会执行回调
arr1.forEach(item =>console.log(item))
arr2.forEach(item =>console.log(item)) // 不执行

// concat 合并数组
const arr3 = [1,2,3]
console.log(arr1.concat(arr3)) // [ { a: 1 }, { a: 2 }, 1, 2, 3 ]

// reduce 接受一个函数作为累加器，数组每个值开始缩减，并最终计算为一个值
const arr4 = [1,2,3,4,5]
console.log(arr4.reduce((pre,cur) => {return pre + cur},0)) // 15

// splice 添加或删除数组中元素，会改变原数组,返回删除元素
// 1、删除——可以删除任意数量的项，只需要指定2个参数：要删除的第一项的位置和要删除项的项数。
const arr5 = [1,2,3,4,5]
console.log(arr5.splice(1,2)) // [2,3]
console.log(arr5) // [1,4,5]
// 2、插入——可以向指定位置插入任意数量的项，只需要提供3个参数：插入起始位置、0（要删除的项数）和要插入的项。 如果要插入多个项，可以再传入第四、第五，一直任意多个项
const arr6 = ['red','blue','pink']
console.log(arr6.splice(1,0,'black','white')) // [ ]
console.log(arr6) // [ 'red', 'black', 'white', 'blue', 'pink' ]
// 替换——即删除和插入数量相等项数的综合应用，可以指向指定位置插入任意数量的项，且同时删除任意数量的项，只需要指定3个指定参数：起始位置、要删除的项数和要插入的任意数量项。 插入的项数是不必与删除的项数相等。
const arr7 = [1,2,3]
console.log(arr7.splice(1,1,'8','8')) // [2]
console.log(arr7) // [ 1, '8', '8', 3 ]


// includes 是否包含 返回布尔值
const arr8 = [1,2,3,2]
console.log(arr8.includes(2)) // true

// indexOf() 检测当前值在数组中第一次出现的位置索引
console.log(arr8.indexOf(2)) // 1

// flat好像是es10出的特性，用于拉平数组，接受一个参数，不传默认1，表示拉平的层数
const arr9 = [1,[2,3],[4,5,[6,7,8,['j','k']]]]
console.log(arr9.flat()) // [ 1, 2, 3, 4, 5, [ 6, 7, 8, [ 'j', 'k' ] ] ]
console.log(arr9.flat(2)) // [ 1, 2, 3, 4, 5, 6, 7, 8, [ 'j', 'k' ] ]

// push 向数组的末尾添加一个或多个元素，并返回新的数组长度。原数组改变。
// pop()，删除并返回数组的最后一个元素，若该数组为空，则返回undefined。原数组改变。
// unshift()，向数组的开头添加一个或多个元素，并返回新的数组长度。原数组改变。
// shift()，删除数组的第一项，并返回第一个元素的值。若该数组为空，则返回undefined。原数组改变。
// join()，将数组的每一项用指定字符连接形成一个字符串。原数组不变。
const arr10 = [1,2,3]
console.log(arr10.join()) // 1,2,3
console.log(arr10) // [ 1, 2, 3 ]
// reverse()，将数组倒序。原数组改变。
// sort()，对数组元素进行排序。按照字符串UniCode码排序，原数组改变。


// 改变原数组方法
// splice
// push
// pop
// unshift
// shift
// reverse
// sort


