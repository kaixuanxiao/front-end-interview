### This的理解

* 函数调用模式，当一个函数不是一个对象的属性时，直接作为函数来调用时，this 指向全局对象。
* function A() {
  * this.value = value // 全局
* }

* 方法调用模式，如果一个函数作为一个对象的方法来调用时，this 指向这个对象。
* let obj = {
  * run:function() {
    * console.log('run')
  * }
* }
* obj.run() // 指向对象

* 构造器调用模式，如果一个函数用 new 调用时，函数执行前会新创建一个对象，this 指向这个新创建的对象。
* 

* 第四种是 apply 、 call 和 bind 调用模式，这三个方法都可以显示的指定调用函数的 this 指向。其中 apply 方法接收两个参数：一个是 this 绑定的对象，一个是参数数组。call 方法接收的参数，第一个是 this 绑定的对象，后面的其余参数是传入函数执行的参数。也就是说，在使用 call() 方法时，传递给函数的参数必须逐个列举出来。bind 方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。这个函数的 this 指向除了使用 new 时会被改变，其他情况下都不会改变。