### Ajax跨域携带cookie

* 前端请求必须设置XMLhttprequest实例的withCredenetials属性为true

* 服务端必须设置Access-Control-Allow-Origin为白名单样式，并且需要在响应头中设置：Access-Control-Allow-Credentials为ture。

* cors除了cookie的限制，请求头也做了限制，客户端如果想发送自定义请求头，服务端必须设置Access-Control-Allow-Headers为*，或者白名单的样式