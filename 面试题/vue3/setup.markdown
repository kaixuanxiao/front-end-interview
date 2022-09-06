### setup

setup函数的特性

* 在其它生命周期之前调用
* 在setup中没有this
* 使用Composition API 的入口

#### 选项方式

* 定义的变量和方法最后都是需要 return 出去的 不然无法再模板中使用

```js
  ...
  props: {
    title: String
  },
  setup(props, { attrs, slots, emit, expose }) {
    const point = usePoint()
    console.log(point)

    const count = ref(0)
    expose({ count })
    // 返回值会暴露给模板和其他的选项式 API 钩子
    return {
      count
    }
  },
  ```


#### <script setup>方式

更少的样板内容，更简洁的代码。
能够使用纯 Typescript 声明 props 和抛出事件。
更好的运行时性能 (其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理)。
更好的 IDE 类型推断性能 (减少语言服务器从代码中抽离类型的工作)。

使用区别：

* 任何在 <script setup> 声明的顶层的绑定 (包括变量，函数声明，以及 import 引入的内容) 都能在模板中直接使用

* defineProps() 和 defineEmits() 预定义组件入参和事件

* defineExpose 定义组件明确要暴露出去的属性，才能通过ref或者parent访问到

* useSlots() 和 useAttrs() 访问组件的插槽和属性

* 顶层 await