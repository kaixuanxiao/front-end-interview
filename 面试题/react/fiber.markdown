常规的「运行时优化策略」，比如：

React.memo
PureComponent
shouldComponentUpdate
优化方向都是：减少遍历时需要遍历的Fiber节点数量。

concurrent mode: 
就是一种可中断渲染的设计架构
根据优先级做Fiber的遍历渲染来减少遍历的Fiber节点数量

jsx对象上没有优先级、状态、effectTag等标记，这些标记在Fiber对象上，在mount时Fiber根据jsx对象来构建，在update时根据最新状态的jsx和current Fiber对比，形成新的workInProgress Fiber，最后workInProgress Fiber切换成current Fiber。

那么有了Fiber这种数据结构后，能完成哪些事情呢，

工作单元 任务分解 ：Fiber最重要的功能就是作为工作单元，保存原生节点或者组件节点对应信息（包括优先级），这些节点通过指针的形似形成Fiber树
增量渲染：通过jsx对象和current Fiber的对比，生成最小的差异补丁，应用到真实节点上
根据优先级暂停、继续、排列优先级：Fiber节点上保存了优先级，能通过不同节点优先级的对比，达到任务的暂停、继续、排列优先级等能力，也为上层实现批量更新、Suspense提供了基础
**保存状态：**因为Fiber能保存状态和更新的信息，所以就能实现函数组件的状态更新，也就是hooks


在react中触发状态更新的几种方式：

ReactDOM.render
this.setState
this.forceUpdate
useState
useReducer


触发 setState
getDerivedStateFromProps
shouldComponentUpdate
render
getSnapshotBeforeUpdate
componentDidUpdate

setState异步问题：

在 React 钩子函数及合成事件中，它表现为异步；而在 setTimeout、setInterval 等函数中，包括在 DOM 原生事件中，它都表现为同步。这种差异，本质上是由 React 事务机制和批量更新机制的工作方式来决定的。

在 onClick、onFocus 等事件中，由于合成事件封装了一层，所以可以将 isBatchingUpdates 的状态更新为 true；在 React 的生命周期函数中，同样可以将 isBatchingUpdates 的状态更新为 true。那么在 React 自己的生命周期事件和合成事件中，可以拿到 isBatchingUpdates 的控制权，将状态放进队列，控制执行节奏。而在外部的原生事件中，并没有外层的封装与拦截，无法更新 isBatchingUpdates 的状态为 true。这就造成 isBatchingUpdates 的状态只会为 false，且立即执行。所以在 addEventListener 、setTimeout、setInterval 这些原生事件中都会同步更新。