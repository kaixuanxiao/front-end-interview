### EventLoop

#### 浏览器进程

* Browser进程
浏览器的主进程(负责界面显示、交互、管理，网络资源的管理等)，该进程只有一个

* 第三方插件进程
每种类型的插件对应一个进程，使用该插件时才创建

* GPU进程
该进程也只有一个，用于3D绘制等等

* 渲染进程(重)
也就是浏览器内核(Renderer进程，内部是多线程)
每个Tab页面都有一个渲染进程，互不影响，负责页面渲染，脚本执行，事件处理等

#### 渲染进程

* GUI渲染线程
解析HTML、CSS生成DOM Tree、CSSOM，再组装成Render Tree
重绘、回流时，对页面的绘制
GUI渲染线程与JS引擎线程是互斥的
当JS引擎执行时，GUI线程会被挂起（相当于冻结了）。GUI更新会被保存在一个队列中，等到JS引擎空闲时立即被执行

* JS引擎线程
也就是JS内核（例如Chrome的V8引擎），负责解析JavaScript脚本，管理着一个 “执行栈”

* 事件触发线程
控制 “事件循环”，管理着一个 “事件队列”（event queue）
当JS执行时，如果遇到 “异步操作”，“事件触发线程” 将事件添加到对应的线程中（比如定时器操作，便把定时器事件添加到定时器线程），等异步事件有了结果，便把它们的回调添加到 “事件队列”，等待JS引擎线程空闲时处理

* 定时触发器线程（setTimeout、setInterval）
执行到定时器时，先在 “定时器线程” 进行 “定时” 与 “计时”，计时完毕后，将回调函数交给 “事件触发线程”，再由 “事件触发线程” 将回调函数添加到 “任务队列” 中，等待JS引擎线程空闲后执行

* 异步http请求线程
执行到一个http请求时，先把 “异步请求事件” 添加到 “异步请求线程” 中，请求成功并收到响应后，把回调交给 “事件触发线程”，由 “事件触发线程” 将回调函数添加到 “任务队列”

#### 事件循环

* 从“同步”、“异步”的角度看事件循环
script分为 “同步任务” 与 “异步任务”，“同步任务” 在 “执行栈” 中执行，“异步任务” 有了运行结果，就将其回调放入 “任务队列” 中。“执行栈” 中的 “同步任务” 全部执行完毕，就开始读取 “任务队列”，依次添加到 “执行栈” 中执行。

* 从“宏任务”、“微任务”角度看事件循环

（1）宏任务（macrotask）：宏任务的每次每次执行都是从头到尾地执行，不会在中途停止下来去执行其他任务。
* script代码
* setTimeout
* setInterval
* setImmediate
* requestAnimationFrame

requestAnimationFrame 比起 setTimeout、setInterval的优势主要有两点：
requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般来说，这个频率为每秒60帧。
在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的的cpu，gpu和内存使用量。

（2）微任务（microtask）
* Promise.then()
* async/await (Promise语法糖)
* catch
* finally
* Object.observe
* MutationObserver
* process.nextTick()

（3）Event Loop流程

当一个 “宏任务” 执行完，会在渲染前，将执行期间所产生的所有 “微任务” 都执行完。然后执行下一个 “宏任务”，如此循环往复。

宏任务 -》（全部）微任务 -》GUI渲染 -》宏任务 -》（全部）微任务 -》GUI渲染 ... 

* script是最大的 “宏任务”，也是一个 “同步任务”，在主线程（JS引擎线程）中执行

* “主线程” 执行完script后，开始执行  “微任务队列”

* “微任务队列” 执行完，再开始执行下一个 “宏任务”，一直这样循环下去，便是事件循环Event Loop了。

```js
console.log('script start')

async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
}
async1()

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })

console.log('script end')

script start // 主宏任务
async2 end // 执行await代码仍然属于主宏任务
Promise  // new Promise构造函数中的代码属于主宏任务
script end // 最后一个主宏任务
async1 end // 开始按顺序执行全部微任务：await后面的代码
promise1
promise2
setTimeout // 微任务完成，执行宏任务
```