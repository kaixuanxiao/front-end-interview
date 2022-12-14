### 为什么setTimeout不精确

* 最小延时 >= 4ms

在浏览器中，setTimeout()/setInterval() 的每调用一次定时器的最小间隔是4ms，这通常是由于函数嵌套导致的。

* 除了"最小延时"之外，定时器仍然有可能因为当前页面（或者操作系统/浏览器本身）被其他任务占用导致延时。 创建一个 setTimeout 的时候是将它推进了一个队列，并没有立即执行，只有本轮宏任务执行完，才会去检查当前的消息队列是否有有到期的任务。

* 如何实现精确定时器

系统时间补偿方案：每一次定时器执行的时候，检测当前时间和理论精确执行的时间差，需要重新计算定时器的时间。