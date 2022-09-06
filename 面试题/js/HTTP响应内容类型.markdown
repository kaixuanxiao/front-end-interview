### HTTP响应内容类型

#### 常见的媒体格式类型

* text/html：HTML格式
* text/plain：纯文本格式
* text/xml：XML格式
* image/gif：gif图片格式
* image/jpeg：jpg图片格式
* image/png：png图片格式

#### 以application开头的媒体格式类型

* application/json：JSON数据格式
* application/pdf：pdf格式
* application/msword：Word文档格式
* application/octet-stream：二进制流数据（如常见的文件下载）
* application/x-www-form-urlencoded：浏览器的原生 <form encType=""> 表单提交类型，如果不设置 enctype 属性，那么最终就会以 application/x-www-form-urlencoded 方式提交数据。

#### 表单提交中enctype可设置类型

* application/x-www-form-urlencoded:默认的编码方式。但在用文本的传输和MP3等大型文件的时候，使用这种编码就显得效率低下。
* multipart/form-data:指定传输数据为二进制类型，比如图片，mp3，文件
* text/plain：纯文本的传输。空格转换为"+"号，但不对特殊字符编码。