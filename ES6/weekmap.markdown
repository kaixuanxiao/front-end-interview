### weekmap

* GC垃圾回收机制

V8 中主垃圾回收器就采用标记清除法进行垃圾回收

标记：遍历调用栈，看老生代区域堆中的对象是否被引用，被引用的对象标记为活动对象，没有被引用的对象（待清理）标记为垃圾数据。
垃圾清理：将所有垃圾数据清理掉

* 一个对象被多次引用时，例如作为另一对象的键、值或子元素时，将该对象引用设置为 null 时，该对象是不会被回收的，依然存在

```js
var a = {}; 
var arr = [a];

a = null; 
console.log(arr)
// [{}]
```

* WeakMap 对于键的引用是不计入垃圾回收机制的（不作为引用标记），所以名字里面才会有一个"Weak"，表示这是弱引用（对对象的弱引用是指当该对象应该被GC回收时不会阻止GC的回收行为）。

此案例(测试map和weakMap进行对比)通过命令执行： node --expose-gc a.js
```js
global.gc(); // 0 每次查询内存都先执行gc()再memoryUsage()，是为了确保垃圾回收，保证获取的内存使用状态准确

function usedSize() {
    const used = process.memoryUsage().heapUsed;
    return Math.round((used / 1024 / 1024) * 100) / 100 + "M";
}

console.log(usedSize()); // 1 初始状态，执行gc()和memoryUsage()以后，heapUsed 值为 1.64M

var map = new WeakMap();
var b = new Array(5 * 1024 * 1024);

map.set(b, 1);

global.gc();
console.log(usedSize()); // 2 在 Map 中加入元素b，为一个 5*1024*1024 的数组后，heapUsed为41.82M左右

b = null;
global.gc();

console.log(usedSize()); // 

```