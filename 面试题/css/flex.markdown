### flex 发音[fleks]

可能遇到的问题：

* 原理

* 有哪些属性

* justify-content, align-items, align-content区别

* flex的值可以怎么设置，一个值，两个值，三个值有什么区别

* flex-grow可以为小数吗，设置为小数和非小数有什么区别


#### 原理

弹性布局中的元素是有伸展和收缩自身的能力的。 


#### 容器属性 
以下六个属性设置在容器上

flex-direction: row | row-reverse | column | column-reverse;         决定主轴的方向（即项目的排列方向）

<img src="https://css-tricks.com/wp-content/uploads/2018/10/flex-direction.svg">

flex-wrap: nowrap | wrap | wrap-reverse;               项目是否换行及换行方向

flex-flow: flex-direction属性和flex-wrap属性的简写形式

justify-content       子元素在主轴上的对齐方式
  * flex-start	默认值。从行首起始位置开始排列
  * flex-end	从行尾位置开始排列
  * center	居中排列
  * space-between	均匀排列每个元素，首个元素放置于起点，末尾元素放置于终点
  * space-evenly	均匀排列每个元素，每个元素之间的间隔相等
  * space-around	均匀排列每个元素，每个元素周围分配相同的空间。
<img src="https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg">

align-content         定义了多根轴线的排列方式。（多轴情况下需要设置）
  * stretch	默认值。元素被拉伸以适应容器。(个人补充理解：对轴的行高度或列宽度进行拉伸)
  * flex-start	元素位于容器的开头。
  * flex-end	元素位于容器的结尾。
  * center	元素位于容器的中心。
  * space-between	元素位于各行之间留有空白的容器内。
  * space-evenly	均匀排列每个元素，每个元素之间的间隔相等
  * space-around 元素位于各行之前、之间、之后都留有空白的容器内。

<img src="https://css-tricks.com/wp-content/uploads/2018/10/align-content.svg">

align-items    子元素在交叉轴上的对齐方式（轴内元素不等大小的时候需要设置）
  * stretch	默认值。元素被拉伸以适应容器。
  * center	元素位于容器的中心。
  * flex-start 元素位于容器的开头。
  * flex-end	元素位于容器的结尾。
  * baseline	元素位于容器的基线上。

<img src="https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg">

align-items只作用于单行和align-content只作用于多行的说法是不准确的

总结：通过justify-content控制主轴内元素排列方式，通过align-content控制轴线布局方式，当交叉轴上内元素尺寸不相同时，通过align-items设置交叉轴上的对齐方式

#### 子元素属性 

以下六个属性设置在项目上

flex-grow    定义项目的放大比例，默认为0，即不放大
放大权重计算：grow的比例

  * 所有元素grow值相加 < 1,则会出现不完全填充父容器的情况

flex-shrink 发音[rɪŋk]   定义项目的缩小比例，默认为1，即会自动缩小
收缩权重计算：shrink * 元素宽度

flex-basis   定义了在分配多余空间之前，项目占据的主轴空间

flex        flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto
值为关键字：
initial	设置该属性为它的默认值，即为 0 1 auto。
auto	与 1 1 auto 相同。
none	与 0 0 auto 相同。


align-self   允许单个项目有与其他项目不一样的对齐方式

<img src="https://css-tricks.com/wp-content/uploads/2018/10/align-self.svg">

order       定义项目的排列顺序。数值越小，排列越靠前，默认为0
