### New构造函数的过程

* 创建空对象
```js
var obj = {};
```

* 设置新对象的__proto__属性指向构造函数的prototype对象
```js
// 当调用构造函数创建一个实例的时候，实例内部将包含一个内部指针（很多浏览器这个指针名字为__proto__）指向构造函数的prototype
obj.__proto__ = ClassA.prototype;
```

* 使用新对象调用函数，函数中的this被指向新实例对象：
```js
ClassA.call(obj);
```

