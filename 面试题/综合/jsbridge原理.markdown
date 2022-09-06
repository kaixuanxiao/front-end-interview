### jsbridge原理

核心是 构建 Native 和非 Native 间消息通信的通道，而且是 双向通信的通道
JS 向 Native 发送消息 : 调用相关功能、通知 Native 当前 JS 的相关状态等。
Native 向 JS 发送消息 : 回溯调用结果、消息推送、通知 JS 当前 Native 的状态等。

#### JavaScript 调用 Native

* 拦截 URL SCHEME

Web 端通过某种方式（例如 iframe.src）发送 URL Scheme 请求，之后 Native 拦截到请求并根据 URL SCHEME（包括所带的参数）进行相关操作。

* 注入 API 让 js 直接调用（大多数）

向 JavaScript 的 Context（window）中注入对象或者方法，让 JavaScript 调用时，直接执行相应的 Native 代码逻辑，达到 JavaScript 调用 Native 的目的。

#### Native 调用 JavaScript

Native 调用 JavaScript，其实就是执行拼接 JavaScript 字符串，从外部调用 JavaScript 中的方法，因此 JavaScript 的方法必须在全局的 window 上。