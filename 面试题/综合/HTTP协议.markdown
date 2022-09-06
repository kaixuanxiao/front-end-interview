### HTTP协议


#### HTTP1.0

* 短链接：每次发送请求都要重新建立tcp请求，即三次握手，性能较差

#### HTTP1.1

* 长连接支持：

  * 一个TCP连接上可以传送多个HTTP请求（串行）
    
    减少了建立和关闭连接的消耗和延迟

  * 浏览器对同一域名可建立多个TCP连接：

    在同一个TCP连接上顺序处理多个HTTP请求。所以浏览器的并发性就体现在可以建立多个TCP连接，来支持多个http同时请求。

Stalled（阻塞）
　　浏览器对同一个主机域名的并发连接数有限制，Chrome浏览器最多允许对同一个域名Host建立6个TCP连接，不同的浏览器有所区别。因此如果当前的连接数已经超过上限，那么其余请求就会被阻塞，等待新的可用连接；此外脚本也会阻塞其他组件的下载；



#### HTTP2.0

* 新的二进制格式

http1.x的解析是基于文本，http2.x的解析是基于二进制

HTTP1.1:
<img src="https://img-blog.csdnimg.cn/0037ea4fc6d745fe8212a28401169a62.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAcmFveGlhb3lh,size_20,color_FFFFFF,t_70,g_se,x_16">

HTTP2:
<img src="https://img-blog.csdnimg.cn/b2f269199b9e44f4a188866a6e5ff60d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAcmFveGlhb3lh,size_20,color_FFFFFF,t_70,g_se,x_16">

* Header压缩

  通讯双方存储 Header 的 Key-Value 数据，那么在下次使用该数据的时候只要传输索引号就可以了。

<img src="https://st.imququ.com/i/webp/static/uploads/2015/10/hpack-header-compression.png.webp">

* 多路复用

多路复用，就是在一个 TCP 连接中可以存在多条流。换句话说，也就是可以发送多个请求，

实现原理：在 HTTP/2 中，有两个非常重要的概念，分别是帧（frame）和流（stream）。
帧代表着最小的数据单位，每个帧会标识出该帧属于哪个流，流也就是多个帧组成的数据流。
客户端和服务器可以把 HTTP 消息分解为互不依赖的帧，然后乱序发送，最后再在另一端把它们重新组合起来。

HTTP/2中，同一个域名只是用一个TCP连接，多个请求可以同时在一个连接上并行传输，某个请求阻塞时，不会影响其它连接的传输，没有了线头阻塞

解决1.1两个问题

  * TCP串行http请求
  * 同域名下TCP连接数限制

  <img src="https://freecontent.manning.com/wp-content/uploads/mentalmodel-HTTP2_in_Action2.png">

对于前端的意义：在`http1.1`时代的一些优化方案如合并请求、雪碧图、域名分区等可能不再那么必要。


#### HTTP2的问题和HTTP3

* HTTP2的TCP队头阻塞

TCP传输过程中会把数据拆分为一个个按照顺序排列的数据包，这些数据包通过网络传输到了接收端，接收端再按照顺序将这些数据包组合成原始数据，这样就完成了数据传输。

但是如果其中的某一个数据包没有按照顺序到达，接收端会一直保持连接等待数据包返回，这时候就会阻塞后续请求。这就发生了TCP队头阻塞。

所以，在HTTP/2中，TCP队头阻塞造成的影响会更大，因为HTTP/2的多路复用技术使得多个请求其实是基于同一个TCP连接的，那如果某一个请求造成了TCP队头阻塞，那么多个请求都会受到影响。

HTTP3: QUIC协议替代TCP


<img src="https://img-blog.csdnimg.cn/img_convert/591e3132cb3d355cc5cbbe3f3246ab65.webp?x-oss-process=image/format,png">


#### 浏览器加载请求时间消耗问题

当浏览器对页面进行加载并且解析时，会产生如下几个主要时间：

1)、queueing 时间

该时间为等候时间，也可以叫排队时间。即文件在加载之前的排队等候时间。该排队等候时间会根据优先级进行判定；而优先级则根据文件类型进行区分。在前端文件中，html，js，css为主要文件，该种类型文件等候时间较短；而其他类型，如jpg，png或者媒体文件，字体文件等则等候时间较长，等待时间长度较长时，将会导致文件加载缓慢，也就是常说的加载时挂起；

2)、stalled时间

该时间为阻塞时间，即在发起请求时服务器不能同时进行响应而产生的等待时间。该时间与queueing时间不同。queueing时间通常由于优先级不足而产生或者其他原因导致的，而stalled则由于同一个服务器无法同时响应多个请求而造成的。在chrome浏览器中，一个服务器最多会同时允许6个请求发出(一般情况下);

3)、Initial connection 时间

该时间通常是由于TCP 三次握手而产生的时间，一般不会对性能产生较大影响；

4)、RequireSent 时间

该时间为向服务器发起请求时的时间，一般对性能不会产生较大的影响；

5)、Waiting 时间

该时间为后台响应请求的时间，如果该段时间较长，一般多为服务器或者后端接口返回数据较慢的原因；
