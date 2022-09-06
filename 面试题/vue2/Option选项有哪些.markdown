### Option选项有哪些

* 集合
  * 数据：data、props、propsData、computed、methods、watch
  * DOM：el、template、render、renderError
  * 生命周期钩子：beforeCreate/created、beforeMount/mounted、beforeUpdate/updated、activated/deactivated、beforeDestroy/destroyed、errorCaptured
  * 资源：directives、filters、components
  * 组合：parent、mixins、extends、provide、inject

* data为什么是个函数
当我们将组件中的data写成一个函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的data，拥有自己的作用域，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。