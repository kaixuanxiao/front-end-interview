// Map和Set的区别,Map和Object的区别
/**
 * Set是唯一值的集合，类似于数组
 * 一个 Set 可以容纳任何数据类型的任何值
 * 每个值在 Set 中只能出现一次，因此常用做数组去重
 */
// const newSet = new Set(['1','2','3','4','5'])
// console.log(newSet) // Set { '1', '2', '3', '4', '5' }
// const newSet1 = new Set(['1','2','3','4','5','5'])
// console.log(newSet1) // Set { '1', '2', '3', '4', '5' }
// add() 向 Set 添加新元素。
// clear() 从 Set 中删除所有元素。
// delete() 删除由其值指定的元素。
// has() 如果值存在则返回 true。
// forEach() 为每个元素调用回调。
// keys() 返回 Set 对象中值的数组。
// size 返回元素个数。
// newSet.add(6) // Set { '1', '2', '3', '4', '5', 6 }
// newSet.delete('5') // Set { '1', '2', '3', '4', 6 }
// console.log(newSet.has('1')) // true
// console.log(newSet.forEach(item => console.log(item))) // '1', '2', '3', '4', 6
// console.log(newSet.keys()) // [Set Iterator] { '1', '2', '3', '4', '5' }
// console.log(newSet.size) // 5
// newSet.clear() // Set {}
// console.log(newSet)

// 去重
// console.log(new Set(['1', '2', '3', '4', '5', '3', '4', '5'])) // { '1', '2', '3', '4', '5'}
// 求并集
const a = new Set([1,2,3])
const b = new Set([3,4,5])
// console.log(new Set([...a,...b])) // Set { 1, 2, 3, 4, 5 }
// 求交集
// console.log(new Set([...a].filter(i => b.has(i)))) // {3}


// 开发中 不确定键的类型，就用Map
// Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。
// Map 对象记得键的原始插入顺序。
// Map 对象具有表示映射大小的属性。

// new Map() 创建新的 Map 对象。
// set() 为 Map 对象中的键设置值。
// get() 获取 Map 对象中键的值。
// entries() 返回 Map 对象中键/值对的数组。
// keys() 返回 Map 对象中键的数组。
// values() 返回 Map 对象中值的数组。

// const map = new Map()
// map.set('name', 'jack')
// console.log(map.get('name')) // jack
// console.log(map.entries()) // [Map Entries] { [ 'name', 'jack' ] }
// console.log(map.keys()) // { 'name' }
// console.log(map.values()) // { 'jack' }
// const arr1 = [['key1', 'value1'], ['key2', 'value2']]
// const map1 = new Map(arr1)
// console.log(map1) // Map { 'key1' => 'value1', 'key2' => 'value2' }
// console.log(Array.from(map1)) // [ [ 'key1', 'value1' ], [ 'key2', 'value2' ] ]


const map = new Map()
map.set('name1', 'jack1')
map.set('name2', 'jack2')
map.set('name3', 'jack3')
map.set('name4', 'jack4')
map.set('name5', 'jack5')

const obj = new Object()
obj.name1 = 'jack1' 
obj.name2 = 'jack1' 
obj.name4 = 'jack1' 
obj.name3 = 'jack1' 
obj.name5 = 'jack1' 

console.log(map.keys())
console.log(Object.keys(obj))

// map和object的区别
// 1.key的数据类型范围不同
// obj可以作为key的仅有number、string、symbol。
// map均可以。

// 2.key的顺序不同。
// obj通过obj.keys（）打印出来的属性顺序是 number–字符串
// map的key顺序是声明顺序。

// 3.创建方式不同。
// obj有三种创建方式 字面量{}、new Object（） 、构造函数。
// map仅支持new Map（）

// 4.key的调用不同。
// map只能用原生的get方法调用。

// 5.设置属性的方式不同
// map只能使用set（key，val）方法设置属性。


