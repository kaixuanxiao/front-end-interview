### 和vue差异

#### 相同点

* 提倡单向数据流


#### 不同点

* 模板渲染方式：React中我们使用的是jsx，Vue中使用的是template

* 更新机制: react是通过setState() 驱动数据当前节点更新， 如果要避免不必要的更新 需要增加shouldComponentUpdate 这个周期函数里判断是否要更新 return false 就是不更新 组件式函数用的是useMemo

* 渲染过程不同: 

Vue可以更快地计算出Virtual DOM的差异，这是由于它在渲染过程中，会跟踪每一个组件的依赖关系，不需要重新渲染整个组件树。

React在应用的状态被改变时，全部子组件都会重新渲染。通过shouldComponentUpdate这个生命周期方法可以进行控制，但Vue将此视为默认的优化

* 数据传递：React中我们都是使用回调函数，Vue中使用事件