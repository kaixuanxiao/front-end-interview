### Object.create用法

#### 三种创建对象的方式

```js
const obj1 = Object.create(null)
const obj2 = {}
const obj3 = new Object()
```

*  Object.create()方法创建一个新对象,使用现有的对象来提供新创建的对象的__proto__

* 通过 Object.create(null) 创建的对象是不继承Object原型链上的属性，如tostring()方法这些也不存在

* 通过{}创建的对象和new Object()的方式是一样的，都会继承Object对象的所有属性

#### 什么时候用Object.create(null)
* 你需要一个非常干净且高度可定制的对象当做数据字典的时候
* 减少hasOwnProperty造成的性能损失并且可以偷懒少些一点代码的时候