### BFC

Block Fromatting Context， 即块级格式上下文。

W3C对BFC的定义如下： 浮动元素和绝对定位元素，非块级盒子的块级容器（如 inline-blocks, tablecells, 和 table-captions），以及overflow值不为"visiable"的块级盒子，都会为他们的内容创建新的 BFC。

BFC的特性
1、属于同一个BFC的两个相邻容器的上下margin会重叠（重点）
2、计算BFC高度时浮动元素也参于计算（重点）
3、BFC的区域不会与浮动容器发生重叠（重点）
4、BFC内的容器在垂直方向依次排列
5、元素的margin-left与其包含块的border-left相接触
6、BFC是独立容器，容器内部元素不会影响容器外部元素
