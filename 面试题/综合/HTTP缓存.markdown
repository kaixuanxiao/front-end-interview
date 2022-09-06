### HTTP缓存

#### 客户端请求资源流程

* 首次请求，服务器返回资源，并在响应头中注明资源缓存参数，客户端缓存资源

* 再次请求时，根据资源地址查询客户端是否存在本地缓存，存在则根据资源缓存参数判断是否命中强缓存，命中则状态码200直接使用缓存

* 若未命中强缓存，则发送HTTP请求，判断协商缓存是否失效，如有效则状态码304继续使用缓存

* 若未命中协商缓存，则服务器返回完整资源，并更新缓存

#### 强缓存

* 强缓存由响应头中的 Expires 或 Cache-Control 两个字段控制，表示缓存有效期

* Expires：固定过期时间（若客户端时间不正确，会导致缓存误差）

* Cache-Control：相对时间

* 当Cache-Control设置为max-age=xx并且同时设置Expires时，Cache-Control的优先级更高

#### 协商缓存

* If-Modified-Since/Last-Modified：浏览器会向服务器传送 If-Modified-Since 报头（对应为资源响应时获取的Last-Modified），询问该时间之后文件是否有被修改过

* Etag/If-None-Match：客户端发起请求时，在请求头中包含字段 If-None-Match（对应为资源响应时获取的Etag），服务器收到后与该资源的当前的 Etag 来确定是否使用缓存

* ETag绝对精确，If-Modified-Since精确到秒级，并且可以应对批量自动生成的资源也使用缓存

* 当ETag和Last-Modified同时存在时，服务器先会检查ETag，然后再检查Last-Modified，最终决定返回304还是200
