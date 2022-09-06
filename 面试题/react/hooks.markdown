### hooks

解决问题：
1. 函数组件如何使用状态和生命周期
2. 如何实现状态逻辑代码的内聚和复用

* useState

每一次函数组件重新执行，useState会返回上一次的state的值

* useEffect 的第二个参数，有三种情况

传入一个空数组 [], 只会调用一次，相当于 componentDidMount 和 componentWillUnmount

传入一个数组，其中包括变量，只有这些变量变动时，useEffect 才会执行

什么都不传，组件每次 render 之后 useEffect 都会调用，相当于 componentDidMount 和 
componentDidUpdate

useEffect 在全部渲染完毕后才会执行

```js
useEffect(() => {
  // 相当于 componentDidMount
  console.log('add resize event')
  window.addEventListener('resize', onChange, false)

  return () => {
    // 相当于 componentWillUnmount
    window.removeEventListener('resize', onChange, false)
  }
}, [])

useEffect(() => {
  // 相当于 componentDidUpdate
  document.title = count
})

useEffect(() => {
  console.log(`count change: count is ${count}`)
}, [ count ])
```

* useMemo: 使用useMemo就可以仅在依赖项改变时才进行计算，避免多余计算

不传数组，每次更新都会重新计算
空数组，只会计算一次
依赖对应的值，当对应的值发生变化时，才会重新计算(可以依赖另外一个 useMemo 返回的值)

useEffect没有返回值（在不考虑解绑的情况下），并且是在页面渲染之后才执行的，而useMemo有返回值，并且是在页面渲染的时候进行的

* useCallback 记忆函数

useCallback 可以保证，无论 render 多少次，我们的函数都是同一个函数，减小不断创建的开销，防止子组件重渲染

* useRef
* 获取子组件的实例(只有类组件可用)
* 保存数据：在函数组件中的一个全局变量，不会因为重复 render 重复申明， 类似于类组件的 this.xxx