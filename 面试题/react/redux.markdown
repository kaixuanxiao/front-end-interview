### redux

Redux 是 JavaScript 应用的状态容器，提供可预测的状态管理。

原则：
单一数据源:state
视图和网络请求都不能直接修改 state，相反它们只能表达想要修改的意图，action
使用纯函数来执行修改:为了描述 action 如何改变 state tree ，你需要编写 reducers

* createStore(reducer) 创建store

* 通过Provider提供store，本质是通过React.createContext()创建一个上下文，然后通过Consumer接收store

```js
<Provider store={store}>
  <App />
</Provider>
```

* connect
作用是将store和组件联系到一起，但是它并不会改变它连接的connect组件，而是提供一个经过包裹的connect组件

mapStateToProps：将store中的数据作为props绑定到组件中，只要store发生了变化就会调用mapStateToProps方法

mapDispatchToProps：将action作为props绑定到组件中，用于建立组件跟store.dispatch的映射关系

### 异步action

* redux-thunk

redux-thunk 是一个比较流行的 redux 异步 action 中间件,统一了异步和同步 action 的调用方式
redux-thunk是最常用的异步中间件，它让disptach能接收函数作为参数

* applyMiddleware

```js
export default function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args)
    let dispatch = () => {
      throw new Error(
        `Dispatching while constructing your middleware is not allowed. ` +
          `Other middleware would not be applied to this dispatch.`
      )
    }

    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    }
    const chain = middlewares.map(middleware => middleware(middlewareAPI))
    dispatch = compose(...chain)(store.dispatch)

    return {
      ...store,
      dispatch
    }
  }
}
```