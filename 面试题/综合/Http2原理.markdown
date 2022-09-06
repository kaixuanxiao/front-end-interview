### Http2原理

#### HTTP/1.x的缺陷

* HTTP1.1虽然加入keep-alive可以复用一部分连接，但域名分片等情况下仍然需要建立多个connection，耗费资源，给服务器带来性能压力。

* Head-Of-Line Blocking：导致带宽无法被充分利用，以及后续健康请求被阻塞。HOLB是指一系列包（package）因为第一个包被阻塞；HTTP/1.x中，由于服务器必须按接受请求的顺序发送响应的规则限制，那么假设浏览器在一个（tcp）连接上发送了两个请求，那么服务器必须等第一个请求响应完毕才能发送第二个响应——HOLB。

虽然现代浏览器允许每个origin建立6个connection，但大量网页动辄几十个资源，HOLB依然是主要问题。

* 协议开销大：HTTP/1.x中header内容过大（每次请求header基本不怎么变化），增加了传输的成本。

* 安全因素：HTTP/1.x中传输的内容都是明文，客户端和服务端双方无法验证身份。

#### HTTP/2的新特性

* 新的二进制格式（Binary Format）
http1.x诞生的时候是明文协议，其格式由三部分组成：start line（request line或者status line），header，body。要识别这3部分就要做协议解析，http1.x的解析是基于文本。基于文本协议的格式解析存在天然缺陷，文本的表现形式有多样性，要做到健壮性考虑的场景必然很多，二进制则不同，只认0和1的组合。基于这种考虑http2.0的协议解析决定采用二进制格式，实现方便且健壮。

* Header压缩
http1.x的header由于cookie和user agent很容易膨胀，而且每次都要重复发送。

http2.0使用encoder来减少需要传输的header大小，通讯双方各自cache一份header fields表，既避免了重复header的传输，又减小了需要传输的大小。高效的压缩算法可以很大的压缩header，减少发送包的数量从而降低延迟。

* 流（stream）和多路复用（MultiPlexing）

stream就是在HTTP/2连接上的双向帧序列。每个http request都会新建自己的stream，response在同一个stream上返回。

多路复用（MultiPlexing），即连接共享。之所以可以复用，是因为每个stream高度独立，堵塞的stream不会影响其它stream的处理。一个连接上可以有多个stream，每个stream的frame可以随机的混杂在一起，接收方可以根据stream id将frame再归属到各自不同的request里面。

* 同域名下所有通信都在单个连接上完成，同个域名只需要占用一个 TCP 连接，使用一个连接并行发送多个请求和响应。

* 单个连接可以承载任意数量的双向数据流，单个连接上可以并行交错的请求和响应，之间互不干扰。

* 数据流以消息的形式发送，而消息又由一个或多个帧组成，多个帧之间可以乱序发送，因为根据帧首部的流标识可以重新组装。每个请求都可以带一个 31bit 的优先值，0 表示最高优先级， 数值越大优先级越低。