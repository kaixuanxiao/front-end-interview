### nextTick原理

* 定义：在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

* vue中使用nextTick场景
（1）js代码在多次更新同一个响应数据之后，并不会每次都执行渲染，而是内部调用了nextTick遍历所有更新函数，对所有更新进行合并处理，最终一次性渲染
（2）更新数据之后，需要获取最新dom状态，必须通过nextTick回调函数

* 实现原理：Promise > MutationObserver > setImmediate > setTimeout；优先采用微任务

```js
let timerFunc
// 判断是否原生支持Promise
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  const p = Promise.resolve()
  timerFunc = () => {
    // 如果原生支持Promise 用Promise执行flushCallbacks
    p.then(flushCallbacks)
    if (isIOS) setTimeout(noop)
  }
  isUsingMicroTask = true
// 判断是否原生支持MutationObserver
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  let counter = 1
  // 如果原生支持MutationObserver 用MutationObserver执行flushCallbacks
  const observer = new MutationObserver(flushCallbacks)
  const textNode = document.createTextNode(String(counter))
  observer.observe(textNode, {
    characterData: true
  })
  timerFunc = () => {
    counter = (counter + 1) % 2
    textNode.data = String(counter)
  }
  isUsingMicroTask = true
// 判断是否原生支持setImmediate 
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  timerFunc = () => {
  // 如果原生支持setImmediate  用setImmediate执行flushCallbacks
    setImmediate(flushCallbacks)
  }
// 都不支持的情况下使用setTimeout 0
} else {
  timerFunc = () => {
    // 使用setTimeout执行flushCallbacks
    setTimeout(flushCallbacks, 0)
  }
}

// flushCallbacks 最终执行nextTick 方法传进来的回调函数
function flushCallbacks () {
  pending = false
  const copies = callbacks.slice(0)
  callbacks.length = 0
  for (let i = 0; i < copies.length; i++) {
    copies[i]()
  }
}

```