### instanceof原理

instanceof 运算符用于测试构造函数的 prototype 属性是否出现在对象原型链中的任何位置

例如：A instanceof B，则判断 B 的 prototype 属性指向的原型对象(B.prototype)是否在对象 A 的原型链上。如果在，则为 true；如果不在，则为 false。

* 自己实现instanceof函数

  * 基于getPrototypeOf实现的函数为：
  ```js
  function isInstanceOf(target1, target2) {
    let proto = Object.getPrototypeOf(target1)
    if(!proto){return false}
    if (proto === target2.prototype) { return true }
    //递归去原型链上找
    return isInstanceOf(proto, target2)
  }
  ```

  * 基于isPrototypeOf实现的函数为：
  ```js
  function isInstanceOf(target1, target2) {
    return target2.prototypeis.isPrototypeOf(target1)
  }
  ```

* 判断一个函数是否被当作构造函数使用

```js
function isConstructorFun() {
  return this instanceof isConstructorFun
}
```
```